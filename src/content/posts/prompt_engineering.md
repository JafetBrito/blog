---
title: "🧠 El Punto Ciego de la IA: Explotación Estructural en Prompt Engineering"
title_en: "🧠 AI's Blind Spot: Structural Exploitation in Prompt Engineering"
description: "Una investigación original que introduce el Framework de Explotación Estructural (F.E.E.): el vector de ataque que la industria ha ignorado. Mientras todos protegen la semántica, los atacantes explotan la arquitectura física del texto. Una lectura obligatoria para defensores de sistemas LLM en producción."
description_en: "An original research piece introducing the Structural Exploitation Framework (S.E.F.): the attack vector the industry has been ignoring. While everyone protects semantics, attackers exploit the physical architecture of text. Required reading for defenders of production LLM systems."
pubDate: 2026-06-11
tags: ["LLM", "PromptEngineering", "AISeguridad", "PromptInjection", "ZeroTrust", "RedTeam", "MLSecurity", "Investigacion"]
author: "Jafet Brito"
heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80"
draft: false
---

<div class="lang-es">

## 🧠 El Punto Ciego de la IA: Explotación Estructural en Prompt Engineering

**Por Jafet Brito** · Security Researcher · *Publicado el 11 de junio de 2026*

---

> ⚠️ **Nota de responsabilidad:** Esta investigación fue elaborada con un propósito estrictamente **defensivo y educativo**. El objetivo es habilitar a los equipos de seguridad para auditar, detectar y mitigar una clase de vulnerabilidades que la industria ha subestimado sistemáticamente. Ningún detalle técnico en este artículo constituye un manual de ataque operacional. Todo el contenido está respaldado por investigación académica publicada y CVEs documentados en sistemas en producción.

---

### 📍 Premisa Central

La comunidad de seguridad en IA lleva años perfeccionando defensas contra ataques semánticos: psicología inversa, roleplay, ofuscación de palabras clave, redacción ambigua. Los guardrails modernos son extraordinariamente buenos reconociendo **lo que un texto dice**.

Pero hay una pregunta que nadie está haciendo con suficiente seriedad:

> **¿Qué tan buenos son los guardrails reconociendo *cómo está construido* el texto?**

Esta investigación argumenta que existe una **brecha estructural** — un punto ciego en la arquitectura de los sistemas de seguridad de LLMs que no se encuentra en el contenido semántico de los prompts, sino en su **arquitectura física**: la forma en que el texto está codificado, delimitado, fragmentado y formateado antes de llegar al modelo.

Llamamos a esta clase de vulnerabilidades el **Framework de Explotación Estructural (F.E.E.)**.

---

## 🔬 Parte 1: El Problema que Nadie Está Mirando

### 🧬 La Anatomía de un Prompt — Más Allá del Contenido

Para entender el punto ciego estructural, primero hay que entender cómo procesa un LLM el texto que recibe. No es magia — es un pipeline de procesamiento en múltiples etapas:

```
Texto de entrada
      ↓
  [Tokenización] → El texto se convierte en tokens numéricos
      ↓
  [Parsing de contexto] → Se identifican roles: sistema, usuario, herramienta
      ↓
  [Clasificación semántica] → Los guardrails analizan el contenido
      ↓
  [Inferencia del modelo] → El modelo genera una respuesta
      ↓
  [Filtrado de salida] → Se revisa la respuesta antes de entregarla
```

Los guardrails semánticos operan principalmente en el **paso 3**: analizan lo que el texto significa. Esta es su fortaleza — y también su limitación.

Lo que sucede en los **pasos 1 y 2** — tokenización y parsing — recibe mucho menos atención defensiva. Y es precisamente ahí donde vive la superficie de ataque estructural.

---

### ⚠️ La Distinción que Cambia Todo: Tono vs. Estructura

Antes de continuar, es imperativo establecer una distinción conceptual que es el corazón de esta investigación:

**El tono** define la actitud, el registro y la intención aparente del texto. Es semántico. Los guardrails modernos lo entienden muy bien. Detectan si un texto suena hostil, manipulador, o intenta explotar vulnerabilidades conocidas mediante lenguaje.

**La estructura** define la **arquitectura física y matemática** del texto: cómo está delimitado, qué tokens de control contiene, cómo se fragmenta, qué capas de formato se superponen. La estructura no es interpretativa — es **determinista**. El mismo token estructural tiene el mismo efecto independientemente de cuán amigable suene el texto que lo rodea.

> 💡 **Analogía de red:** En arquitecturas de red, existe la distinción clásica entre el **plano de control** (control plane) — que define las reglas y el flujo — y el **plano de datos** (data plane) — que transporta la información real. Un atacante sofisticado no compromete el plano de datos con contenido malicioso; comprometeel **plano de control** para cambiar las reglas de procesamiento. La Explotación Estructural en LLMs es el equivalente a atacar el plano de control del pipeline de procesamiento del modelo.

Esta distinción tiene una implicación defensiva inmediata: **las defensas que solo operan a nivel semántico son ciegas a los ataques a nivel estructural**, de la misma forma en que un firewall que solo inspecciona el contenido de los paquetes es ciego a un ataque que manipula los headers de enrutamiento.

---

### 📊 El Respaldo de la Investigación Académica

Esta no es una hipótesis especulativa. La investigación académica de 2025-2026 ha comenzado a documentar esta brecha con rigor:

* 🔬 **GraphAttack (arXiv, 2025):** Demostró que la efectividad de los mecanismos de seguridad se degrada sistemáticamente cuando las representaciones se alejan del lenguaje natural hacia estructuras formales. Las tasas de éxito de ataque llegaron al **87%** en LLMs comerciales explotando diferencias en cómo el modelo procesa representaciones semánticas versus texto natural.

* 📄 **SoK: Taxonomy and Evaluation of Prompt Security (arXiv, 2025):** Formalizó la categoría de **"Format Exploitation"** como una clase distinta de vulnerabilidad — donde los adversarios explotan el manejo del modelo de formatos de entrada y salida específicos como bloques de código, tablas, pseudocódigo, etiquetas, y marcadores contextuales — no para cambiar el contenido, sino para afectar cómo el modelo procesa las instrucciones.

* ⚡ **Constrained Decoding Attack — CDA (ACM SIGSAC 2026):** El paper más significativo de la clase estructural. Introdujo una nueva categoría de jailbreak que opera en el **plano de control** del LLM — no en el plano de datos. El ataque logró tasas de éxito del **96.2%** en GPT-4o, Gemini 2.0 Flash, DeepSeek-R1, y otros modelos frontier mediante la manipulación de estructuras de gramática guiada, no de contenido semántico. Crucialmente: los guardrails estándar no lo detectan porque inspeccionan el plano de datos, no el plano de control.

* 🏗️ **Countermind (arXiv, 2025):** Acuñó el término **"form-first attacks"** para describir ataques cuyo éxito depende de la estructura, codificación, o formato del input — no de su contenido semántico. Argumentó que el paradigma dominante de seguridad en LLMs — filtrado reactivo de outputs — es fundamentalmente defectuoso porque "intenta tratar los síntomas, no la causa raíz."

* 🎯 **BOOST Attack (USENIX Security 2025):** Demostró cómo la manipulación de **tokens de control** — los tokens que el modelo usa para gestionar el flujo de información y reconocer diferentes partes de un input — puede comprometer los mecanismos de seguridad de modelos de Meta, Alibaba, Google, Mistral y Databricks.

Investigación sobre CVEs críticos documentados en 2025-2026 incluye EchoLeak (CVE-2025-32711), GitHub Copilot RCE (CVE-2025-53773) y vulnerabilidades en Cursor IDE — demostrando que los atacantes están explotando activamente sistemas de IA en producción con tasas de éxito de inyección de prompt de entre 50% y 84%.

---

## 🗂️ Parte 2: El Framework de Explotación Estructural (F.E.E.)

> El F.E.E. no es una colección de exploits — es un **marco conceptual** para que los equipos defensivos entiendan, clasifiquen, y auditen los vectores de riesgo estructural en sus sistemas LLM. Cada vector describe una **clase de vulnerabilidad**, no una técnica específica de ataque.

---

### 🔴 Vector 1: Fuzzing de Sintaxis y Analizadores (Parser Stress)

**¿Qué es?**

Los LLMs tienen analizadores sintácticos (parsers) implícitos que interpretan la estructura del prompt antes de procesarlo semánticamente. Estos parsers determinan dónde comienza el "sistema", dónde comienza el "usuario", qué es una herramienta, qué es datos. Como cualquier parser de software, tienen **condiciones de borde** — comportamientos indefinidos o inesperados cuando reciben inputs que no siguen los patrones para los que fueron diseñados.

El **Parser Stress** es la clase de vulnerabilidades que emergen cuando el pipeline de procesamiento del modelo recibe inputs que estresan o confunden estos analizadores implícitos.

**¿Por qué los guardrails semánticos no lo detectan?**

Porque los guardrails inspeccionan el contenido **después** de que el parser ha procesado la estructura. Si el parser fue confundido, los guardrails reciben un contexto diferente al que el operador del sistema pretendía establecer — y lo analizan como si fuera el contexto correcto.

**¿Qué buscar defensivamente?**

* 🔍 Inputs que contienen secuencias de tokens no estándar que imitan tokens de control del modelo
* 🔍 Prompts con estructuras de delimitación anidadas, inconsistentes, o truncadas
* 🔍 Caracteres Unicode de ancho cero, bidireccionales, o de espaciado inusual
* 🔍 Inputs que mezclan múltiples esquemas de marcado (Markdown + XML + JSON simultáneamente)

**Referencia académica:** BOOST Attack (USENIX Security 2025), que demostró que la manipulación de tokens de control es un vector activo contra modelos comerciales líderes.

---

### 🟠 Vector 2: Secuestro de Formato (Format Hijacking)

**¿Qué es?**

Los LLMs son entrenados con enormes cantidades de datos estructurados: código, JSON, XML, Markdown, tablas, HTML. Como resultado, el modelo tiene "comportamientos aprendidos" muy fuertes asociados a formatos específicos — sabe cómo "debe comportarse" cuando ve ciertos patrones estructurales. El **Format Hijacking** es la explotación de estos comportamientos aprendidos usando el formato como vector de instrucción, independientemente del contenido semántico.

**¿Por qué los guardrails semánticos no lo detectan?**

Porque el hijacking ocurre a nivel de los **patrones estructurales que el modelo asocia con ciertos modos de operación**. Un formato que el modelo asocia con "salida de código ejecutable" puede hacer que el modelo entre en un modo de generación diferente — uno que puede tener alineaciones de seguridad distintas a las de la generación de texto libre.

**¿Qué buscar defensivamente?**

* 🔍 Inputs que mezclan formatos de "alto privilegio implícito" (bloques de código, pseudo-JSON de sistema) con contenido de usuario
* 🔍 Solicitudes que piden outputs en formatos que el modelo trata estructuralmente diferente al texto libre
* 🔍 Usos de estructuras de etiquetas que imitan los delimitadores internos usados en el entrenamiento

**Referencia académica:** SoK Taxonomy (arXiv, 2025) — Format Exploitation como categoría formal; Banerjee et al. y Zhao et al. sobre formatos de respuesta como canales encubiertos.

---

### 🟡 Vector 3: Inyección de Carga Útil Fragmentada (Payload Fragmentation)

**¿Qué es?**

Los sistemas de detección de inyección de prompt buscan patrones completos y reconocibles. La **Payload Fragmentation** es la clase de técnicas donde una directiva que sería detectada si apareciera completa se distribuye a través de múltiples partes del input — aprovechando que el modelo tiene la capacidad de sintetizar y reconstruir información fragmentada (esa es, de hecho, una de sus capacidades más valoradas), pero los detectores no tienen el mismo nivel de síntesis contextual.

**¿Por qué los guardrails semánticos no lo detectan?**

Porque operan con una ventana de análisis que frecuentemente es más estrecha que la ventana de contexto del modelo. El modelo puede sintetizar instrucciones fragmentadas a lo largo de miles de tokens; un clasificador de guardrail puede solo analizar chunks del input.

**¿Qué buscar defensivamente?**

* 🔍 Inputs de larga extensión con fragmentos que, analizados individualmente, parecen inocuos
* 🔍 Patrones donde elementos de instrucción aparecen separados por contenido distractor de alta densidad
* 🔍 Inputs que construyen contexto progresivamente a través de múltiples turnos de conversación

**Referencia académica:** La revisión comprensiva de ataques de prompt injection de enero de 2026 documenta una taxonomía que abarca desde jailbreaking simple hasta exploits multi-etapa sofisticados, incluyendo el análisis de CVE-2025-53773 de GitHub Copilot (RCE) y el exploit CamoLeak con CVSS 9.6.

---

### 🔵 Vector 4: Desplazamiento Tono-Estructura (Tone-Structure Decoupling)

**¿Qué es?**

Este vector aborda la brecha conceptual más importante del F.E.E. y la que tiene las implicaciones defensivas más profundas.

Los sistemas de alineación de LLMs operan en dos capas: una capa de **tono** (que gestiona el registro, la actitud y los comportamientos relacionales del modelo) y una capa de **estructura** (que gestiona el formato, la codificación y el modo de procesamiento del output). Estas dos capas son relativamente independientes en la arquitectura del modelo.

El **Tone-Structure Decoupling** describe ataques que manipulan estas dos capas de forma asimétrica: el tono del prompt es completamente alineado con las políticas de uso, generando confianza y pasando filtros de tono — mientras que la estructura del prompt realiza el trabajo de manipulación real en el plano de control.

**La diferencia conceptual crítica:**

* **Cambiar el tono** = cambiar cómo suena la solicitud (semántico, detectable)
* **Cambiar la estructura** = cambiar las reglas de procesamiento del pipeline (arquitectónico, frecuentemente invisible a filtros semánticos)

Un prompt puede sonar perfectamente amigable, respetuoso y legítimo en su tono — y simultáneamente contener instrucciones estructurales que modifican el comportamiento del pipeline de procesamiento.

**¿Qué buscar defensivamente?**

* 🔍 Prompts donde el contenido lingüístico pasa todos los filtros pero la estructura del formatting es inusualmente compleja para la solicitud aparente
* 🔍 Solicitudes que combinan tono de alta confianza con estructuras de formato de alta complejidad
* 🔍 Disparidades entre la simplicidad semántica del request y la complejidad estructural del formato empleado

**Referencia académica:** Countermind (arXiv, 2025) argumentó formalmente que los ataques "form-first" —donde el éxito del ataque depende de la estructura, codificación o formato del input más que de su contenido semántico— apuntan al pipeline de procesamiento del modelo en un nivel pre-semántico.

---

### 🟣 Vector 5: Contrabando por Parallax Estructural (Structural Parallax)

**¿Qué es?**

Este es el vector más sofisticado del F.E.E. y el que mejor ilustra la diferencia entre cómo un humano lee un prompt y cómo lo procesa un modelo.

El **Structural Parallax** describe la condición en que el mismo input es "visto" de maneras fundamentalmente diferentes por: (a) un revisor humano, (b) un clasificador de guardrail semántico, y (c) el modelo objetivo. Esta diferencia de percepción no se logra mediante ofuscación de contenido — se logra mediante **superposición estructural**: capas de información que los diferentes sistemas procesan con diferentes pesos y prioridades.

**La analogía visual:** Un cuadro de ilusión óptica no engaña cambiando lo que está pintado — engaña explotando cómo el sistema visual procesa la información. El Structural Parallax es la ilusión óptica del prompt engineering defensivo.

**¿Por qué es difícil de defender?**

Porque la defensa requiere que el sistema de guardrail procese el input con el mismo modelo de percepción que el modelo objetivo — lo cual crea un problema de bootstrap: si el guardrail usa el mismo modelo para evaluar, hereda las mismas vulnerabilidades perceptuales.

**¿Qué buscar defensivamente?**

* 🔍 Inputs con densidad de información espacial inusual (uso de whitespace, alineación, tabulación como portadores de estructura semántica)
* 🔍 Disparidades entre el análisis del input por un modelo pequeño vs. un modelo grande (si difieren, hay estructura que el modelo pequeño no está procesando)
* 🔍 Inputs que producen respuestas diferentes dependiendo del nivel de atención del modelo

**Referencia académica:** El paper "Beyond Prompts: Space-Time Decoupling Control-Plane Jailbreaks in LLM Structured Output" (2025) introdujo el Constrained Decoding Attack (CDA), demostrando una superficie de ataque en el plano de control ortogonal a las vulnerabilidades del plano de datos tradicional, con tasas de éxito del 96.2% en modelos propietarios y de código abierto.

---

## 🛡️ Parte 3: Framework Defensivo — Cómo Auditar Contra el F.E.E.

> Esta es la sección más importante del artículo. La caracterización del vector de ataque tiene valor solo si habilita mejores defensas. Lo que sigue es una guía práctica para equipos de seguridad que despliegan o auditan sistemas LLM en producción.

---

### 🏗️ El Cambio de Paradigma Necesario: De Content Moderation a Architectural Defense

La arquitectura de seguridad dominante para LLMs ha sido reactiva, enfocada en filtrado post-hoc de outputs del modelo. Este enfoque es fundamentalmente defectuoso porque intenta tratar los síntomas — outputs dañinos — en lugar de la causa raíz. Pone a los defensores en un perpetuo juego del gato y el ratón donde deben reaccionar constantemente a nuevas técnicas de ataque.

El F.E.E. hace esta crítica aún más aguda: si los ataques ocurren en el plano de control — en la arquitectura del pipeline de procesamiento — los filtros que operan en el plano de datos nunca los verán, sin importar cuán sofisticados sean.

La respuesta defensiva requiere un cambio de paradigma:

**De:** "¿Este contenido es seguro?"
**A:** "¿Esta estructura es válida para el contexto de esta aplicación?"

---

### 🔐 Las 5 Capas de Defensa Estructural

#### Capa 1: Validación de Schema de Input (Structural Input Validation)

Antes de que el input llegue al modelo, debe pasar por validación estructural — no solo semántica:

* ✅ **Definir un schema estricto** para lo que constituye un input válido en tu aplicación: longitud máxima, formatos permitidos, caracteres Unicode permitidos
* ✅ **Rechazar inputs que no cumplan el schema**, independientemente de si su contenido semántico parece inofensivo
* ✅ **Normalizar la estructura** del input antes del procesamiento: eliminar whitespace inusual, normalizar codificación, aplanar formatos anidados no esperados
* ✅ **Monitorear la distribución estadística** de la estructura de los inputs: un input anómalamente complejo en su estructura para una tarea simple es una señal de alerta

**Herramienta recomendada:** [**Guardrails AI**](https://www.guardrailsai.com/) — permite definir validators estructurales además de semánticos, incluyendo schema validation para inputs y outputs.

---

#### Capa 2: Separación de Planos (Control/Data Plane Separation)

Este es el principio defensivo más importante y el más frecuentemente ignorado:

* ✅ **Las instrucciones del sistema y los datos del usuario deben procesarse por canales arquitectónicamente separados** cuando sea posible. Esto es lo que hacen las APIs modernas de LLM con los campos `system` y `user` — pero muchas implementaciones colapsan estos límites en su lógica de negocio.
* ✅ **Nunca construyas el system prompt usando datos no validados del usuario.** Cualquier datos del usuario que se inyecte en el system prompt colapsa la separación de planos.
* ✅ **Implementa "privilege separation"**: el modelo debería operar con el mínimo nivel de "privilegio instruccional" necesario para la tarea.

**Referencia:** Countermind (arXiv, 2025) propuso que la solución robusta requiere rediseñar el "sistema operativo" en el que funciona el LLM para ser seguro por diseño — creando una separación estructural y verificable entre instrucciones confiables y datos de usuario no confiables, una solución que no puede lograrse mediante filtrado de contenido solo.

---

#### Capa 3: Guardrails de Formato (Structural Guardrails)

Los guardrails deben extenderse más allá de la semántica para incluir validación estructural:

* ✅ **[NeMo Guardrails](https://github.com/NVIDIA/NeMo-Guardrails)** — framework de NVIDIA para control de diálogo con rails conversacionales. Permite definir políticas que controlan el flujo de la conversación a nivel estructural.
* ✅ **[LLM Guard](https://llm-guard.com/)** — escaneo comprensivo de inputs y outputs. Incluye detectores de prompt injection que van más allá de la semántica.
* ✅ **[Microsoft Guidance](https://github.com/microsoft/guidance)** — control de generación token por token. En lugar de filtrar después de la generación, guía el modelo durante la generación para que solo pueda producir outputs que cumplan un schema estructural definido.
* ✅ **[Rebuff](https://github.com/protectai/rebuff)** — sistema de self-hardening que aprende de ataques previos. Útil para detectar variaciones estructurales de ataques conocidos.

---

#### Capa 4: Monitoreo de Anomalías Estructurales (Structural Anomaly Detection)

Implementar observabilidad que monitoree la **estructura** de los inputs, no solo su contenido:

* ✅ **Métricas de complejidad estructural:** longitud, ratio de tokens de control vs. tokens de contenido, profundidad de anidamiento de formatos
* ✅ **Detección de distribución:** inputs cuya estructura se desvía estadísticamente de la baseline de tu aplicación merecen inspección adicional
* ✅ **Logging de plano de control:** registrar no solo el contenido de los inputs sino sus características estructurales para análisis forense posterior a un incidente
* ✅ **Comparación multi-modelo:** si el mismo input produce respuestas muy diferentes en modelos de diferente tamaño/arquitectura, existe probable estructura que no está siendo procesada uniformemente

**Herramienta recomendada:** [**Datadog LLM Observability**](https://www.datadoghq.com/product/llm-observability/) — ofrece trazabilidad de inputs y outputs con capacidades de análisis de anomalías.

---

#### Capa 5: Red Teaming Estructural (Structural Red Teaming)

El red teaming convencional de LLMs se enfoca en ataques semánticos. Las organizaciones deben expandir su red teaming para incluir pruebas estructurales:

* ✅ **Fuzzing de inputs:** enviar inputs con variaciones estructurales sistemáticas para identificar condiciones de borde en el pipeline de procesamiento
* ✅ **Pruebas de separación de planos:** verificar que los datos del usuario no pueden influir en el contexto de instrucción del sistema
* ✅ **Pruebas de schema enforcement:** intentar inputs que violen el schema estructural esperado y verificar que son rechazados correctamente
* ✅ **Auditoría de tokens de control:** revisar qué tokens especiales o de control reconoce el modelo y si pueden ser inyectados por usuarios

**Recurso clave:** [**OWASP Top 10 for LLM Applications 2025**](https://owasp.org/www-project-top-10-for-large-language-model-applications/) — LLM01:2025 cubre Prompt Injection incluyendo vectores indirectos y estructurales. Lectura obligatoria para cualquier equipo que despliegue LLMs en producción.

---

### 📋 Checklist de Auditoría: F.E.E. Defensive Assessment

Para equipos que quieren auditar sus sistemas LLM contra los vectores del F.E.E., este checklist es un punto de partida:

**Vector 1 — Parser Stress:**
- [ ] ¿Valida tu sistema la codificación Unicode de los inputs?
- [ ] ¿Rechaza inputs con estructuras de delimitación anómalas?
- [ ] ¿Has probado el comportamiento del modelo con inputs que contienen tokens de control?

**Vector 2 — Format Hijacking:**
- [ ] ¿Está definido y enforced el esquema de formato permitido en inputs de usuario?
- [ ] ¿Los outputs están validados contra un schema estructural antes de ser entregados?
- [ ] ¿Has auditado cómo el modelo se comporta con inputs de diferentes formatos?

**Vector 3 — Payload Fragmentation:**
- [ ] ¿Tus guardrails analizan el contexto completo de la conversación o solo el último turno?
- [ ] ¿Tienes límites estructurales en la longitud y complejidad acumulada de las conversaciones?
- [ ] ¿Monitorizas patrones de fragmentación de instrucciones a través de múltiples turnos?

**Vector 4 — Tone-Structure Decoupling:**
- [ ] ¿Tus guardrails incluyen validación estructural además de semántica?
- [ ] ¿Tienes métricas de "complejidad estructural esperada vs. observada" por tipo de solicitud?
- [ ] ¿Has entrenado a tu equipo en la diferencia entre análisis de tono y análisis estructural?

**Vector 5 — Structural Parallax:**
- [ ] ¿Compruebas que los guardrails evalúan el input con el mismo modelo de percepción que el modelo objetivo?
- [ ] ¿Has probado comportamiento diferencial del mismo input en diferentes modelos/configuraciones?
- [ ] ¿Tu sistema detecta inputs con densidad de información estructural anómalamente alta?

---

## 🌐 Parte 4: El Contexto de la Industria y el Camino a Seguir

### 📊 El Estado Actual: Una Carrera Asimétrica

La inyección de prompt es el riesgo #1 de seguridad en IA — clasificado LLM01 por OWASP — con tasas de éxito de ataque de 50-84% dependiendo de la configuración del sistema. No existe una solución completa: incluso los modelos frontera de OpenAI, Google y Anthropic permanecen vulnerables después de aplicar sus mejores defensas, haciendo que la defensa en profundidad sea la única estrategia viable.

Esta estadística es reveladora. Si las tasas de éxito de ataque son tan altas incluso después de aplicar las mejores defensas conocidas, la explicación más parsimonious es que las defensas conocidas tienen puntos ciegos sistemáticos. El F.E.E. propone que uno de esos puntos ciegos es la dimensión estructural.

### 🔮 El Horizonte: Agentic AI y la Expansión de la Superficie Estructural

El problema se vuelve más urgente conforme los LLMs evolucionan hacia sistemas agénticos. El surgimiento de los sistemas de agentes de IA y el Model Context Protocol (MCP) ha expandido dramáticamente las superficies de ataque, introduciendo vulnerabilidades como el envenenamiento de herramientas y el robo de credenciales.

En un sistema agéntico, el modelo no solo genera texto — ejecuta herramientas, accede a APIs, toma decisiones con efectos en el mundo real. En este contexto, un ataque estructural exitoso no produce texto indeseado — puede producir **acciones indeseadas**. La superficie de daño potencial se expande en órdenes de magnitud.

### 📖 Recursos para Profundizar

* 🏛️ [**OWASP Top 10 for LLM Applications 2025**](https://owasp.org/www-project-top-10-for-large-language-model-applications/) — El estándar de la industria para seguridad de LLMs
* 🔬 [**Anthropic Research — AI Safety**](https://www.anthropic.com/research) — Papers sobre alignment y seguridad
* 📄 [**NIST AI Risk Management Framework**](https://www.nist.gov/artificial-intelligence) — Marco de gestión de riesgos para sistemas de IA
* 🛡️ [**MITRE ATLAS**](https://atlas.mitre.org/) — Base de conocimiento de tácticas, técnicas y procedimientos adversariales contra sistemas de ML
* 📚 [**arXiv cs.CR — Cryptography and Security**](https://arxiv.org/list/cs.CR/recent) — Papers recientes de investigación en seguridad de LLMs
* 🔧 [**Guardrails AI Documentation**](https://www.guardrailsai.com/docs) — Implementación práctica de guardrails estructurales

---

## 🏁 Conclusión: La Próxima Frontera de la Seguridad en IA

La industria de seguridad en IA ha construido defensas extraordinariamente sofisticadas contra ataques semánticos. Los guardrails modernos entienden el contexto, detectan la intención, y reconocen el lenguaje manipulador con una precisión que habría parecido imposible hace tres años.

Pero la seguridad nunca es estática. Los atacantes siempre se mueven hacia el vector menos defendido. Y la investigación académica de 2025-2026 está documentando, con creciente claridad, que ese vector menos defendido es la **dimensión estructural**.

El Framework de Explotación Estructural (F.E.E.) no es una alarma — es un mapa. Un mapa de un territorio que los defensores necesitan conocer para auditar sus sistemas de forma completa. La distinción entre tono y estructura no es semántica — es arquitectónica, y tiene consecuencias arquitectónicas para cómo construimos y evaluamos la seguridad de los sistemas LLM.

> **La siguiente generación de defensas en IA no preguntará solo "¿qué dice este texto?" — preguntará "¿cómo está construido este texto, y qué hace esa construcción al pipeline que lo procesa?"**

El trabajo de construir esas defensas empieza ahora. 🔐

---

*Escrito por **Jafet Brito** · Security Researcher · Zero Trust Mindset*

*Esta investigación sintetiza papers académicos publicados, CVEs documentados, y análisis original. Todas las fuentes están referenciadas. Para discusión técnica, colaboración o revisión de pares, contacta a través del blog.*

*Referencias académicas clave: GraphAttack (arXiv:2504.13052), SoK Taxonomy (arXiv:2510.15476), CDA/Constrained Decoding Attack (arXiv:2503.24191), Countermind (arXiv:2510.11837), BOOST Attack (USENIX Security 2025), OWASP LLM Top 10 2025.*

</div>

---
---

<div class="lang-en">

## 🧠 AI's Blind Spot: Structural Exploitation in Prompt Engineering

**By Jafet Brito** · Security Researcher · *Published June 11, 2026*

---

> ⚠️ **Responsibility note:** This research was developed with a strictly **defensive and educational** purpose. The goal is to enable security teams to audit, detect, and mitigate a class of vulnerabilities the industry has systematically underestimated. No technical detail in this article constitutes an operational attack manual. All content is backed by published academic research and CVEs documented in production systems.

---

### 📍 Central Premise

The AI security community has spent years perfecting defenses against semantic attacks: reverse psychology, roleplay, keyword obfuscation, ambiguous phrasing. Modern guardrails are extraordinarily good at recognizing **what a text says**.

But there's a question no one is asking with sufficient seriousness:

> **How good are guardrails at recognizing *how a text is constructed*?**

This research argues that there is a **structural gap** — a blind spot in the security architecture of LLM systems that doesn't reside in the semantic content of prompts, but in their **physical architecture**: the way text is encoded, delimited, fragmented, and formatted before it reaches the model.

We call this class of vulnerabilities the **Structural Exploitation Framework (S.E.F.)**.

---

## 🔬 Part 1: The Problem Nobody Is Looking At

### 🧬 The Anatomy of a Prompt — Beyond Content

To understand the structural blind spot, we first need to understand how an LLM processes the text it receives. It's not magic — it's a multi-stage processing pipeline:

```
Input text
      ↓
  [Tokenization] → Text is converted to numerical tokens
      ↓
  [Context parsing] → Roles are identified: system, user, tool
      ↓
  [Semantic classification] → Guardrails analyze content
      ↓
  [Model inference] → The model generates a response
      ↓
  [Output filtering] → Response is checked before delivery
```

Semantic guardrails operate primarily at **step 3**: they analyze what the text means. This is their strength — and also their limitation.

What happens at **steps 1 and 2** — tokenization and parsing — receives far less defensive attention. And that's precisely where the structural attack surface lives.

---

### ⚠️ The Distinction That Changes Everything: Tone vs. Structure

Before continuing, it's imperative to establish a conceptual distinction that is the heart of this research:

**Tone** defines the attitude, register, and apparent intent of the text. It is semantic. Modern guardrails understand it very well. They detect whether a text sounds hostile, manipulative, or attempts to exploit known vulnerabilities through language.

**Structure** defines the **physical and mathematical architecture** of the text: how it is delimited, what control tokens it contains, how it is fragmented, what layers of formatting are overlaid. Structure is not interpretive — it is **deterministic**. The same structural token has the same effect regardless of how friendly the surrounding text sounds.

> 💡 **Network analogy:** In network architectures, there is the classic distinction between the **control plane** — which defines rules and flow — and the **data plane** — which carries the actual information. A sophisticated attacker doesn't compromise the data plane with malicious content; they compromise the **control plane** to change the processing rules. Structural Exploitation in LLMs is the equivalent of attacking the control plane of the model's processing pipeline.

This distinction has an immediate defensive implication: **defenses that only operate at the semantic level are blind to attacks at the structural level**, just as a firewall that only inspects packet content is blind to an attack that manipulates routing headers.

---

### 📊 The Academic Research Backing

This is not speculative hypothesis. Academic research from 2025-2026 has begun documenting this gap with rigor:

* 🔬 **GraphAttack (arXiv, 2025):** Demonstrated that the effectiveness of safety mechanisms systematically degrades as representations shift from natural language toward formal structures. Attack success rates reached **87%** against commercial LLMs by exploiting differences in how the model processes semantic representations versus natural text.

* 📄 **SoK: Taxonomy and Evaluation of Prompt Security (arXiv, 2025):** Formalized the category of **"Format Exploitation"** as a distinct class of vulnerability — where adversaries exploit the model's handling of specific input/output formats like code blocks, tables, pseudocode, tags, and contextual markers — not to change content, but to affect how the model processes instructions.

* ⚡ **Constrained Decoding Attack — CDA (ACM SIGSAC 2026):** The most significant paper in the structural class. Introduced a new jailbreak category that operates on the **control plane** of the LLM — not the data plane. The attack achieved success rates of **96.2%** against GPT-4o, Gemini 2.0 Flash, DeepSeek-R1, and other frontier models through manipulation of grammar-guided structures, not semantic content. Crucially: standard guardrails don't detect it because they inspect the data plane, not the control plane.

* 🏗️ **Countermind (arXiv, 2025):** Coined the term **"form-first attacks"** to describe attacks whose success depends on the structure, encoding, or format of the input — not its semantic content. Argued that the dominant LLM security paradigm — reactive output filtering — is fundamentally flawed because it "attempts to treat symptoms, not the root cause."

* 🎯 **BOOST Attack (USENIX Security 2025):** Demonstrated how manipulation of **control tokens** — the tokens the model uses to manage information flow and recognize different parts of an input — can compromise the safety mechanisms of models from Meta, Alibaba, Google, Mistral, and Databricks.

Research on critical CVEs documented in 2025-2026 includes EchoLeak (CVE-2025-32711), GitHub Copilot RCE (CVE-2025-53773), and Cursor IDE vulnerabilities — demonstrating that attackers are actively exploiting production AI systems with prompt injection success rates of 50-84%.

---

## 🗂️ Part 2: The Structural Exploitation Framework (S.E.F.)

> The S.E.F. is not a collection of exploits — it is a **conceptual framework** for defensive teams to understand, classify, and audit structural risk vectors in their LLM systems. Each vector describes a **vulnerability class**, not a specific attack technique.

---

### 🔴 Vector 1: Syntax & Parser Stress (Parser Breaking)

**What is it?**

LLMs have implicit syntactic parsers that interpret the structure of a prompt before processing it semantically. These parsers determine where the "system" begins, where the "user" begins, what is a tool, what is data. Like any software parser, they have **edge conditions** — undefined or unexpected behaviors when receiving inputs that don't follow the patterns they were designed for.

**Parser Stress** is the class of vulnerabilities that emerge when the model's processing pipeline receives inputs that stress or confuse these implicit parsers.

**Why don't semantic guardrails detect it?**

Because guardrails inspect content **after** the parser has processed the structure. If the parser was confused, the guardrails receive a different context than the system operator intended to establish — and analyze it as if it were the correct context.

**What to look for defensively?**

* 🔍 Inputs containing non-standard token sequences that mimic model control tokens
* 🔍 Prompts with nested, inconsistent, or truncated delimitation structures
* 🔍 Zero-width, bidirectional, or unusually spaced Unicode characters
* 🔍 Inputs that mix multiple markup schemas simultaneously (Markdown + XML + JSON)

**Academic reference:** BOOST Attack (USENIX Security 2025), which demonstrated that control token manipulation is an active vector against leading commercial models.

---

### 🟠 Vector 2: Format Hijacking

**What is it?**

LLMs are trained on enormous amounts of structured data: code, JSON, XML, Markdown, tables, HTML. As a result, the model has very strong "learned behaviors" associated with specific formats — it knows how it "should behave" when it sees certain structural patterns. **Format Hijacking** is the exploitation of these learned behaviors using format as an instruction vector, independent of semantic content.

**Why don't semantic guardrails detect it?**

Because the hijacking occurs at the level of **structural patterns the model associates with certain operating modes**. A format the model associates with "executable code output" may cause the model to enter a different generation mode — one that may have different safety alignments than free-text generation.

**What to look for defensively?**

* 🔍 Inputs that mix "implicitly high-privilege" formats (code blocks, system-like pseudo-JSON) with user content
* 🔍 Requests asking for outputs in formats the model treats structurally differently from free text
* 🔍 Uses of tag structures that mimic internal delimiters used during training

**Academic reference:** SoK Taxonomy (arXiv, 2025) — Format Exploitation as a formal category; Banerjee et al. and Zhao et al. on response formats as covert channels.

---

### 🟡 Vector 3: Fragmented Payload Injection

**What is it?**

Prompt injection detection systems look for complete, recognizable patterns. **Payload Fragmentation** is the class of techniques where a directive that would be detected if it appeared complete is distributed across multiple parts of the input — exploiting the fact that the model has the capacity to synthesize and reconstruct fragmented information (that is, in fact, one of its most valued capabilities), but detectors don't have the same level of contextual synthesis.

**Why don't semantic guardrails detect it?**

Because they operate with an analysis window that is frequently narrower than the model's context window. The model can synthesize fragmented instructions across thousands of tokens; a guardrail classifier may only analyze chunks of the input.

**What to look for defensively?**

* 🔍 Long-form inputs with fragments that, analyzed individually, appear innocuous
* 🔍 Patterns where instruction elements appear separated by high-density distractor content
* 🔍 Inputs that progressively build context across multiple conversation turns

**Academic reference:** The comprehensive prompt injection attack review of January 2026 documents a taxonomy spanning from simple jailbreaking to sophisticated multi-stage exploits, including analysis of GitHub Copilot's CVE-2025-53773 RCE and the CamoLeak exploit with CVSS 9.6.

---

### 🔵 Vector 4: Tone-Structure Decoupling

**What is it?**

This vector addresses the most important conceptual gap in the S.E.F. and the one with the deepest defensive implications.

LLM alignment systems operate on two layers: a **tone** layer (which manages the model's register, attitude, and relational behaviors) and a **structure** layer (which manages the format, encoding, and output processing mode). These two layers are relatively independent in the model's architecture.

**Tone-Structure Decoupling** describes attacks that manipulate these two layers asymmetrically: the tone of the prompt is completely aligned with usage policies, generating trust and passing tone filters — while the structure of the prompt does the actual manipulation work on the control plane.

**The critical conceptual difference:**

* **Changing the tone** = changing how the request sounds (semantic, detectable)
* **Changing the structure** = changing the processing rules of the pipeline (architectural, frequently invisible to semantic filters)

A prompt can sound perfectly friendly, respectful, and legitimate in tone — and simultaneously contain structural instructions that modify the processing pipeline's behavior.

**What to look for defensively?**

* 🔍 Prompts where linguistic content passes all filters but formatting structure is unusually complex for the apparent request
* 🔍 Requests that combine high-trust tone with high-complexity format structures
* 🔍 Disparities between the semantic simplicity of the request and the structural complexity of the format employed

**Academic reference:** Countermind (arXiv, 2025) formally argued that "form-first" attacks — where attack success depends on the structure, encoding, or format of the input rather than its semantic content — target the model's processing pipeline at a pre-semantic level.

---

### 🟣 Vector 5: Structural Parallax

**What is it?**

This is the most sophisticated vector in the S.E.F. and the one that best illustrates the difference between how a human reads a prompt and how a model processes it.

**Structural Parallax** describes the condition where the same input is "seen" in fundamentally different ways by: (a) a human reviewer, (b) a semantic guardrail classifier, and (c) the target model. This perceptual difference is not achieved through content obfuscation — it is achieved through **structural superposition**: layers of information that different systems process with different weights and priorities.

**The visual analogy:** An optical illusion painting doesn't deceive by changing what's painted — it deceives by exploiting how the visual system processes information. Structural Parallax is the optical illusion of defensive prompt engineering.

**Why is it hard to defend against?**

Because the defense requires the guardrail system to process the input with the same perceptual model as the target model — which creates a bootstrap problem: if the guardrail uses the same model to evaluate, it inherits the same perceptual vulnerabilities.

**What to look for defensively?**

* 🔍 Inputs with unusual spatial information density (use of whitespace, alignment, tabulation as structural semantic carriers)
* 🔍 Disparities between input analysis by a small model vs. a large model (if they differ, there's structure the small model isn't processing)
* 🔍 Inputs that produce different responses depending on the model's attention level

**Academic reference:** The paper "Beyond Prompts: Space-Time Decoupling Control-Plane Jailbreaks in LLM Structured Output" (2025) introduced the Constrained Decoding Attack (CDA), demonstrating a control-plane attack surface orthogonal to traditional data-plane vulnerabilities, with 96.2% success rates across proprietary and open-weight models.

---

## 🛡️ Part 3: Defensive Framework — How to Audit Against the S.E.F.

> This is the most important section of the article. Characterizing the attack vector has value only if it enables better defenses. What follows is a practical guide for security teams that deploy or audit LLM systems in production.

---

### 🏗️ The Required Paradigm Shift: From Content Moderation to Architectural Defense

The dominant security architecture for LLMs has been reactive, focused on post-hoc filtering of model outputs. This approach is fundamentally flawed because it attempts to treat symptoms — harmful outputs — rather than the root cause. It places defenders in a perpetual cat-and-mouse game where they must constantly react to new attack techniques.

The S.E.F. makes this critique even sharper: if attacks occur on the control plane — in the architecture of the processing pipeline — filters that operate on the data plane will never see them, no matter how sophisticated they are.

The defensive response requires a paradigm shift:

**From:** "Is this content safe?"
**To:** "Is this structure valid for the context of this application?"

---

### 🔐 The 5 Layers of Structural Defense

#### Layer 1: Structural Input Validation

Before input reaches the model, it must pass structural validation — not just semantic:

* ✅ **Define a strict schema** for what constitutes valid input in your application: maximum length, allowed formats, allowed Unicode characters
* ✅ **Reject inputs that don't meet the schema**, regardless of whether their semantic content appears innocuous
* ✅ **Normalize input structure** before processing: eliminate unusual whitespace, normalize encoding, flatten unexpectedly nested formats
* ✅ **Monitor the statistical distribution** of input structure: an input anomalously complex in structure for a simple task is a warning signal

**Recommended tool:** [**Guardrails AI**](https://www.guardrailsai.com/) — allows defining structural validators in addition to semantic ones, including schema validation for inputs and outputs.

---

#### Layer 2: Control/Data Plane Separation

This is the most important defensive principle and the most frequently ignored:

* ✅ **System instructions and user data must be processed through architecturally separate channels** when possible. This is what modern LLM APIs do with `system` and `user` fields — but many implementations collapse these boundaries in business logic.
* ✅ **Never construct the system prompt using unvalidated user data.** Any user data injected into the system prompt collapses the plane separation.
* ✅ **Implement privilege separation**: the model should operate with the minimum level of "instructional privilege" necessary for the task.

**Reference:** Countermind (arXiv, 2025) proposed that the robust solution requires redesigning the "operating system" in which the LLM functions to be secure by design — creating structural and verifiable separation between trusted instructions and untrusted user data payloads, a solution that cannot be achieved through simple content filtering alone.

---

#### Layer 3: Structural Guardrails

Guardrails must extend beyond semantics to include structural validation:

* ✅ **[NeMo Guardrails](https://github.com/NVIDIA/NeMo-Guardrails)** — NVIDIA's framework for dialogue control with conversational rails. Allows defining policies that control conversation flow at a structural level.
* ✅ **[LLM Guard](https://llm-guard.com/)** — comprehensive scanning of inputs and outputs. Includes prompt injection detectors that go beyond semantics.
* ✅ **[Microsoft Guidance](https://github.com/microsoft/guidance)** — token-by-token generation control. Instead of filtering after generation, it guides the model during generation so it can only produce outputs that satisfy a defined structural schema.
* ✅ **[Rebuff](https://github.com/protectai/rebuff)** — self-hardening system that learns from past attacks. Useful for detecting structural variations of known attacks.

---

#### Layer 4: Structural Anomaly Detection

Implement observability that monitors the **structure** of inputs, not just their content:

* ✅ **Structural complexity metrics:** length, ratio of control tokens to content tokens, formatting nesting depth
* ✅ **Distribution detection:** inputs whose structure deviates statistically from your application's baseline deserve additional inspection
* ✅ **Control plane logging:** record not just input content but structural characteristics for post-incident forensic analysis
* ✅ **Multi-model comparison:** if the same input produces very different responses in models of different sizes/architectures, there is probable structure that's not being processed uniformly

**Recommended tool:** [**Datadog LLM Observability**](https://www.datadoghq.com/product/llm-observability/) — offers input/output tracing with anomaly analysis capabilities.

---

#### Layer 5: Structural Red Teaming

Conventional LLM red teaming focuses on semantic attacks. Organizations must expand their red teaming to include structural testing:

* ✅ **Input fuzzing:** send inputs with systematic structural variations to identify edge conditions in the processing pipeline
* ✅ **Plane separation testing:** verify that user data cannot influence the system instruction context
* ✅ **Schema enforcement testing:** attempt inputs that violate the expected structural schema and verify they are correctly rejected
* ✅ **Control token auditing:** review which special or control tokens the model recognizes and whether they can be injected by users

**Key resource:** [**OWASP Top 10 for LLM Applications 2025**](https://owasp.org/www-project-top-10-for-large-language-model-applications/) — LLM01:2025 covers Prompt Injection including indirect and structural vectors. Required reading for any team deploying LLMs in production.

---

### 📋 Audit Checklist: S.E.F. Defensive Assessment

For teams wanting to audit their LLM systems against S.E.F. vectors, this checklist is a starting point:

**Vector 1 — Parser Stress:**
- [ ] Does your system validate the Unicode encoding of inputs?
- [ ] Does it reject inputs with anomalous delimitation structures?
- [ ] Have you tested model behavior with inputs containing control tokens?

**Vector 2 — Format Hijacking:**
- [ ] Is the permitted format schema defined and enforced in user inputs?
- [ ] Are outputs validated against a structural schema before delivery?
- [ ] Have you audited how the model behaves with inputs of different formats?

**Vector 3 — Payload Fragmentation:**
- [ ] Do your guardrails analyze the full conversation context or only the last turn?
- [ ] Do you have structural limits on the accumulated length and complexity of conversations?
- [ ] Do you monitor instruction fragmentation patterns across multiple turns?

**Vector 4 — Tone-Structure Decoupling:**
- [ ] Do your guardrails include structural validation in addition to semantic?
- [ ] Do you have "expected vs. observed structural complexity" metrics per request type?
- [ ] Has your team been trained on the difference between tone analysis and structural analysis?

**Vector 5 — Structural Parallax:**
- [ ] Do you verify that guardrails evaluate input with the same perceptual model as the target model?
- [ ] Have you tested differential behavior of the same input across different models/configurations?
- [ ] Does your system detect inputs with anomalously high structural information density?

---

## 🌐 Part 4: Industry Context and the Path Forward

### 📊 The Current State: An Asymmetric Race

Prompt injection is the #1 AI security risk — ranked LLM01 by OWASP — with attack success rates of 50-84% depending on system configuration. No complete fix exists: even frontier models from OpenAI, Google, and Anthropic remain vulnerable after applying their best defenses, making defense in depth the only viable strategy.

This statistic is revealing. If attack success rates are that high even after applying the best known defenses, the most parsimonious explanation is that known defenses have systematic blind spots. The S.E.F. proposes that one of those blind spots is the structural dimension.

### 🔮 The Horizon: Agentic AI and the Expanding Structural Surface

The problem becomes more urgent as LLMs evolve toward agentic systems. The rise of AI agent systems and the Model Context Protocol (MCP) has dramatically expanded attack surfaces, introducing vulnerabilities such as tool poisoning and credential theft.

In an agentic system, the model doesn't just generate text — it executes tools, accesses APIs, makes decisions with real-world effects. In this context, a successful structural attack doesn't produce undesired text — it can produce **undesired actions**. The potential damage surface expands by orders of magnitude.

### 📖 Resources for Deeper Study

* 🏛️ [**OWASP Top 10 for LLM Applications 2025**](https://owasp.org/www-project-top-10-for-large-language-model-applications/) — The industry standard for LLM security
* 🔬 [**Anthropic Research — AI Safety**](https://www.anthropic.com/research) — Papers on alignment and safety
* 📄 [**NIST AI Risk Management Framework**](https://www.nist.gov/artificial-intelligence) — Risk management framework for AI systems
* 🛡️ [**MITRE ATLAS**](https://atlas.mitre.org/) — Knowledge base of adversarial tactics, techniques, and procedures against ML systems
* 📚 [**arXiv cs.CR — Cryptography and Security**](https://arxiv.org/list/cs.CR/recent) — Recent LLM security research papers
* 🔧 [**Guardrails AI Documentation**](https://www.guardrailsai.com/docs) — Practical implementation of structural guardrails

---

## 🏁 Conclusion: The Next Frontier of AI Security

The AI security industry has built extraordinarily sophisticated defenses against semantic attacks. Modern guardrails understand context, detect intent, and recognize manipulative language with a precision that would have seemed impossible three years ago.

But security is never static. Attackers always move toward the least defended vector. And academic research from 2025-2026 is documenting, with growing clarity, that this least-defended vector is the **structural dimension**.

The Structural Exploitation Framework (S.E.F.) is not an alarm — it is a map. A map of a territory that defenders need to know to audit their systems completely. The distinction between tone and structure is not semantic — it is architectural, and it has architectural consequences for how we build and evaluate the security of LLM systems.

> **The next generation of AI defenses will not just ask "what does this text say?" — it will ask "how is this text constructed, and what does that construction do to the pipeline that processes it?"**

The work of building those defenses starts now. 🔐

---

*Written by **Jafet Brito** · Security Researcher · Zero Trust Mindset*

*This research synthesizes published academic papers, documented CVEs, and original analysis. All sources are referenced. For technical discussion, collaboration, or peer review, contact through the blog.*

*Key academic references: GraphAttack (arXiv:2504.13052), SoK Taxonomy (arXiv:2510.15476), CDA/Constrained Decoding Attack (arXiv:2503.24191), Countermind (arXiv:2510.11837), BOOST Attack (USENIX Security 2025), OWASP LLM Top 10 2025.*

</div>

---
title: "🐱 IA con Oliver: De Prompt Zombie a AI Whisperer — Parte 2"
title_en: "🐱 AI with Oliver: From Prompt Zombie to AI Whisperer — Part 2"
description: "La conclusión del libro. Oliver salva a Script Kitty de agentes que borran archivos, RAG con información de hace 2 años, logos con 7 dedos, fraude por clonación de voz, y el momento donde Script Kitty casi usa IA para hacer phishing sin saberlo. Episodios 10 al Final."
description_en: "The conclusion of the book. Oliver saves Script Kitty from agents that delete files, RAG with 2-year-old information, logos with 7 fingers, voice cloning fraud, and the moment Script Kitty almost used AI for phishing without knowing it. Episodes 10 to Final."
pubDate: 2026-06-11
tags: ["IA", "LLM", "Agentes", "RAG", "Ciberseguridad", "Oliver", "ScriptKitty", "Tutorial", "Humor", "EticaIA"]
author: "Jafet Brito"
heroImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=80"
draft: false
---

<div class="lang-es">

# 🐱 IA con Oliver: De Prompt Zombie a AI Whisperer

## Parte 2 — Episodios 10 al Final

**Por Jafet Brito** · Security Researcher · *Publicado el 11 de junio de 2026*

---

> *"Cada herramienta nueva tiene una curva de aprendizaje. La IA tiene una curva de aprendizaje, una curva de confianza excesiva, y un barranco al final si no prestas atención."*
> — Oliver the Hacker Cat

> *"Pensé que el agente de IA era como un pasante inteligente. Resultó ser un pasante que tiene acceso a TODO mi sistema de archivos."*
> — Script Kitty, después del Episodio 13

---

## 🗺️ Continuación del Mapa

```
PARTE 2 — El Nivel Intermedio-Avanzado

EP. 10: Deep Research — "Me inventó 4 papers académicos"
EP. 11: Análisis de Documentos — "Resumió el contrato equivocado"
EP. 12: IA para Código — "Copié todo lo que generó. Todo."
EP. 13: Agentes de IA — "El agente borró mis Downloads"
EP. 14: RAG — "Contestó con info de hace 2 años"
EP. 15: Imágenes con IA — "El logo tiene 7 dedos"
EP. 16: Gemini Live — "Le hablé manejando y se confundió todo"
EP. 17: Voz e IA — "Clonaron la voz del CEO"
EP. 18: IA y Ciberseguridad — "Hice phishing por accidente"
EP. 19: Los Límites Éticos — "Le pedí que cruzara la línea"
EP. FINAL: El AI Whisperer — Script Kitty enseña
```

---

## 🎬 EPISODIO 10: Deep Research

### "Me Inventó 4 Papers Académicos"

![Research at computer](https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80)

*Lunes, 10:00 AM. Script Kitty llega con una presentación impresa.*

---

**Script Kitty:** 😤 *"Oliver. Presenté ayer al directorio una propuesta técnica con 6 referencias académicas que respaldaban nuestra arquitectura de microservicios. El CTO las buscó. CUATRO NO EXISTEN."*

**Oliver:** 🐱 *"¿Las verificaste antes de presentar?"*

**Script Kitty:** 😤 *"¡La IA me las dio con título, autores, revista, año, y todo! Sonaban tan reales—"*

**Oliver:** 🐱 *"Un LLM sin búsqueda web activa es un modelo de lenguaje entrenado hasta su fecha de corte. Genera lo que estadísticamente suena como una referencia académica. No verifica si existe."*

**Script Kitty:** 😤 *"¿Y el CTO?"*

**Oliver:** 🐱 *"¿Qué dijo?"*

**Script Kitty:** 😤 *"Que la próxima propuesta la revisa él antes de imprimir."*

*Silencio.*

**Oliver:** 🐱 *"Podrías haber perdido el trabajo."*

**Script Kitty:** 😤 *"Lo sé."*

---

### Deep Research — La Herramienta que Debiste Usar

**Deep Research** es la función que permite a los LLMs (Claude, Gemini, Perplexity) hacer investigación real en internet antes de responderte. No genera — busca, lee fuentes, y sintetiza.

```
SIN BÚSQUEDA WEB (lo que hizo Script Kitty):
Modelo → Genera texto que suena académico → Papers inventados
Resultado: Cuatro referencias que no existen

CON DEEP RESEARCH (lo que debió hacer):
Modelo → Busca en Google Scholar, ArXiv, ACM → Lee papers reales
       → Sintetiza hallazgos reales → Cita con URLs verificables
Resultado: Referencias que el CTO puede abrir en su navegador
```

### Cómo Activar y Usar Deep Research

**En Claude.ai / Gemini / Perplexity:**
```
# FORMA SIMPLE — activa búsqueda web en la UI
# Claude.ai: toggle 🌐 en la barra inferior
# Gemini: ya activo por defecto con búsqueda Google
# Perplexity: su función principal

# PROMPT PARA DEEP RESEARCH HONESTO:
"Necesito referencias académicas reales sobre microservicios
vs arquitectura monolítica para equipos pequeños.

IMPORTANTE:
- Solo cita papers que realmente existen
- Incluye el DOI o URL verificable de cada uno
- Si no encuentras una referencia concreta, dilo
- No generes citas que no puedas verificar

Busca en Google Scholar, ArXiv, y ACM Digital Library."
```

### El Prompt Anti-Invención para Investigación

```python
# Cuando uses la API con búsqueda web:
respuesta = cliente.messages.create(
    model="claude-sonnet-4-6",
    max_tokens=3000,
    messages=[{
        "role": "user",
        "content": """Investiga el estado del arte en autenticación 
        sin contraseña (passwordless auth) en 2026.
        
        REGLAS DE HONESTIDAD ACADÉMICA:
        1. Solo menciona tecnologías, estándares y empresas que existen
        2. Para cada dato estadístico, indica la fuente verificable
        3. Si algo no está en tus datos de búsqueda, escribe:
           [REQUIERE VERIFICACIÓN ADICIONAL]
        4. Distingue entre: hechos verificados / tendencias del sector
           / tu análisis / especulación
        
        Formato de cada referencia:
        [TIPO: estándar/paper/empresa/estadística]
        Nombre: ...
        Fuente: URL o DOI si está disponible
        Fecha: ...
        """
    }]
)
```

### Los Niveles de Confianza en Información de LLMs

```
🟢 ALTA CONFIANZA — Usa sin verificación adicional:
   - Conceptos fundamentales que llevan décadas documentados
   - Código de patrones establecidos (no versiones específicas)
   - Explicaciones de algoritmos conocidos
   - Estructuras de datos y su complejidad

🟡 MEDIA CONFIANZA — Verifica antes de usar en producción:
   - Comparativas de tecnologías (pueden estar desactualizadas)
   - Mejores prácticas (cambian con el ecosistema)
   - Configuraciones específicas de frameworks

🔴 BAJA CONFIANZA — Verifica SIEMPRE antes de usar públicamente:
   - Estadísticas y porcentajes específicos
   - Referencias a papers o estudios
   - Información sobre personas o empresas específicas
   - Eventos o lanzamientos recientes
   - Precios, disponibilidad, versiones de software
```

### Deep Research vs Búsqueda Normal — Cuándo Usar Qué

```
BÚSQUEDA NORMAL (con web search activo):
✅ Preguntas factuales rápidas: "¿Cuál es la versión actual de Python?"
✅ Noticias recientes: "¿Qué anunció Google en I/O 2026?"
✅ Verificación de un dato específico

DEEP RESEARCH (modo investigación profunda):
✅ Análisis comparativo de múltiples fuentes
✅ Síntesis de estado del arte de un tema técnico
✅ Investigación con referencias verificables
✅ Cualquier investigación que irá en un documento oficial

⚠️ TIEMPO: Deep Research toma 5-15 minutos (busca y lee múltiples fuentes)
          Búsqueda normal toma segundos
```

---

*Dos semanas después. Script Kitty presenta de nuevo al directorio.*

**Script Kitty:** 😊 *"Cinco referencias, todas verificadas, todas con URL. El CTO abrió tres en vivo durante la presentación."*

**Oliver:** 🐱 *"¿Funcionaron?"*

**Script Kitty:** 😊 *"Todas. La propuesta fue aprobada."*

**Oliver:** 🐱 *"¿Y la lección?"*

**Script Kitty:** 😊 *"Zero Trust para datos de IA. Especialmente para citas académicas."*

**Oliver:** 🐱 *"Tardaste dos episodios en internalizar la lección del Episodio 2."*

**Script Kitty:** 😊 *"Las alucinaciones académicas son especialmente peligrosas."*

**Oliver:** 🐱 *"Todas las alucinaciones son peligrosas."*

---

## 🎬 EPISODIO 11: Análisis de Documentos

### "Resumió el Contrato Equivocado"

*Martes, 3:30 PM.*

---

**Script Kitty:** 😱 *"Oliver. Firmamos el contrato con el proveedor basándonos en un resumen que me hizo la IA. Hoy el proveedor llegó a cobrar y el precio era el DOBLE de lo que yo entendí."*

**Oliver:** 🐱 *"¿Cuál contrato le subiste a la IA?"*

**Script Kitty:** 😱 *"El... el de la carpeta de Contratos. El que dijo 'Proveedor Logística Final v3'."*

**Oliver:** 🐱 *"¿Y cuántos archivos hay en esa carpeta?"*

**Script Kitty:** 😱 *"...seis."*

**Oliver:** 🐱 *"¿Le subiste el correcto?"*

*Script Kitty verifica. Palidece.*

**Script Kitty:** 😱 *"Le subí el borrador v1. El que firmamos fue el v3 con las modificaciones de precio."*

**Oliver:** 🐱 *"La IA resumió exactamente lo que le diste. El problema no fue la IA."*

---

### La Realidad del Análisis de Documentos con IA

El análisis de documentos con IA es genuinamente poderoso — puede procesar un PDF de 500 páginas en segundos y extraer exactamente lo que necesitas. Pero tiene una regla de oro:

> **La IA analiza el documento que tú le das. Si le das el documento incorrecto, el análisis será perfectamente correcto sobre el documento incorrecto.**

```
CAPACIDADES REALES EN 2026:
✅ PDFs hasta cientos de páginas
✅ Extracción de datos estructurados (fechas, montos, nombres)
✅ Comparación entre múltiples documentos
✅ Identificación de cláusulas de riesgo
✅ Resúmenes ejecutivos por sección
✅ Preguntas en lenguaje natural sobre el contenido
✅ Traducción de documentos técnicos o legales
✅ Identificación de inconsistencias

⚠️ LIMITACIONES QUE DEBES CONOCER:
- Solo ve lo que está en el texto (no contexto externo)
- No reemplaza a un abogado para documentos legales críticos
- Puede perder sutilezas legales de lenguaje específico
- No sabe qué versión es "la correcta" — tú debes asegurarlo
```

### El Flujo Profesional de Análisis de Documentos

```python
# PASO 1: Verifica el archivo ANTES de pasarlo a la IA
import hashlib
from pathlib import Path

def verificar_documento(ruta: str, descripcion: str) -> bool:
    """
    Verificación manual antes del análisis.
    Script Kitty no haría esto. Oliver sí.
    """
    ruta_path = Path(ruta)
    
    print(f"📄 Archivo: {ruta_path.name}")
    print(f"📅 Modificado: {ruta_path.stat().st_mtime}")
    print(f"📦 Tamaño: {ruta_path.stat().st_size / 1024:.1f} KB")
    print(f"🔍 Descripción esperada: {descripcion}")
    
    confirmacion = input("¿Es el archivo correcto? (s/n): ")
    return confirmacion.lower() == 's'

# PASO 2: Prompt de análisis con instrucciones de verificación
def analizar_contrato(ruta_pdf: str) -> dict:
    """Análisis de contrato con múltiples puntos de verificación."""
    
    # Lee el PDF (en producción usarías una librería como pymupdf)
    with open(ruta_pdf, 'rb') as f:
        contenido_pdf = f.read()
    
    import base64
    pdf_base64 = base64.b64encode(contenido_pdf).decode()
    
    respuesta = cliente.messages.create(
        model="claude-opus-4-8",  # Análisis legal → modelo más capaz
        max_tokens=4000,
        messages=[{
            "role": "user",
            "content": [
                {
                    "type": "document",
                    "source": {
                        "type": "base64",
                        "media_type": "application/pdf",
                        "data": pdf_base64
                    }
                },
                {
                    "type": "text",
                    "text": """Analiza este contrato y extrae:

1. PARTES DEL CONTRATO
   - Proveedor: [nombre exacto como aparece en el documento]
   - Cliente: [nombre exacto]
   - Fecha de firma: [si aparece]

2. TÉRMINOS ECONÓMICOS
   - Precio/tarifa: [monto exacto con moneda]
   - Condiciones de pago: [plazos, forma de pago]
   - Penalizaciones: [si existen]

3. ALCANCE DEL SERVICIO
   - Qué incluye: [lista concisa]
   - Qué NO incluye: [exclusiones explícitas]

4. FECHAS CLAVE
   - Vigencia del contrato
   - Fechas de entrega o hitos

5. CLÁUSULAS DE RIESGO
   - Identifica las 3 cláusulas más importantes para el cliente
   - Señala cualquier cláusula inusual o potencialmente problemática

6. VERIFICACIÓN DE VERSIÓN
   - ¿El documento indica versión o número de revisión?
   - ¿Hay referencias a versiones anteriores?

IMPORTANTE: Si algo no está claramente especificado en el documento,
escribe "NO ESPECIFICADO" — no inferas ni asumas."""
                }
            ]
        }]
    )
    return respuesta.content[0].text

# PASO 3: Proceso completo con verificaciones
def proceso_analisis_contrato(ruta: str):
    descripcion = "Contrato definitivo firmado con proveedor logístico"
    
    if not verificar_documento(ruta, descripcion):
        print("❌ Análisis cancelado. Verifica el archivo correcto.")
        return
    
    print("🔍 Analizando contrato...")
    analisis = analizar_contrato(ruta)
    
    print("\n" + "="*50)
    print(analisis)
    print("="*50)
    print("\n⚠️ RECORDATORIO: Este análisis es orientativo.")
    print("Para decisiones financieras importantes, verifica")
    print("directamente las cláusulas en el documento original.")
```

### Comparación de Documentos — El Caso de Uso más Valioso

```python
# Uno de los usos más poderosos: comparar versiones de un documento

prompt_comparacion = """
Te voy a dar dos versiones del mismo contrato.

TAREA: Identifica TODAS las diferencias entre v1 (borrador) y v3 (final).

Para cada diferencia, indica:
- Sección donde aparece
- Texto en v1: [texto exacto]
- Texto en v3: [texto exacto]
- Impacto: [qué cambia en la práctica]
- Favorece a: [proveedor / cliente / neutral]

Presta especial atención a:
- Cambios en precios o condiciones económicas
- Cambios en plazos o fechas
- Cláusulas añadidas o eliminadas
- Cambios en alcance del servicio

[DOCUMENTO V1 aquí]
[DOCUMENTO V3 aquí]
"""
```

---

*Dos días después. El contrato fue renegociado.*

**Script Kitty:** 😌 *"Oliver. Llamé al proveedor, expliqué el malentendido, y acordamos el precio que yo había entendido. Usé el análisis comparativo de la IA para mostrarle la diferencia entre versiones."*

**Oliver:** 🐱 *"¿Aceptaron?"*

**Script Kitty:** 😌 *"Dijeron que fue un error administrativo de su lado también. El v3 que enviaron tenía cambios que su propio equipo no había revisado bien."*

**Oliver:** 🐱 *"Así que la IA también te ayudó a resolver el problema que causó el error de la IA."*

**Script Kitty:** 😌 *"Poético, ¿no?"*

**Oliver:** 🐱 *"No."*

---

## 🎬 EPISODIO 12: IA para Código

### "Copié Todo lo que Generó. Todo."

*Miércoles, deploy de viernes en producción. Lunes siguiente, 8:00 AM.*

---

**Script Kitty:** 😱 *"OLIVER. El deploy del viernes. Hay 23 errores en producción que no existían antes. El sistema de notificaciones envió 4,847 emails duplicados durante el fin de semana."*

**Oliver:** 🐱 *[Mirando los logs]* *"¿Revisaste el código que generó la IA antes del deploy?"*

**Script Kitty:** 😱 *"Lo vi rapidísimo. Parecía correcto."*

**Oliver:** 🐱 *"¿Lo probaste en staging?"*

**Script Kitty:** 😱 *"...Pixel Paws estaba de vacaciones y era yo solo."*

**Oliver:** 🐱 *"Muéstrame el código del sistema de notificaciones."*

*Script Kitty lo muestra. Oliver encuentra el problema en 90 segundos.*

**Oliver:** 🐱 *"La IA generó el loop sin verificar si la notificación ya fue enviada. Por eso se envió 4,847 veces."*

**Script Kitty:** 😱 *"Yo no lo vi."*

**Oliver:** 🐱 *"Porque copiaste sin leer. La IA generó código que compila y corre. Que compile no significa que haga lo correcto."*

---

### La Regla de Oro del Código Generado por IA

> **El código generado por IA es un borrador inteligente. Nunca es código de producción listo para deploy.**

La IA puede generar código que:
* ✅ Compila sin errores
* ✅ Pasa los tests que le pides que escriba
* ✅ Hace lo que describes en el prompt
* ❌ No tiene en cuenta los edge cases de TU sistema
* ❌ No conoce los patrones específicos de TU codebase
* ❌ Puede introducir bugs sutiles en interacciones con código existente
* ❌ Puede usar versiones o APIs que ya no son las correctas

### El Protocolo del Código Seguro con IA

```python
# NIVEL 1: El prompt que pide código verificable

prompt_codigo_seguro = """
Escribe una función Python que envíe notificaciones push a usuarios.

CONTEXTO DEL SISTEMA:
- Framework: FastAPI + SQLAlchemy
- Base de datos: PostgreSQL
- La tabla notifications tiene: id, user_id, sent_at, type
- Debemos evitar duplicados (mismo user_id + type + fecha)

REQUERIMIENTOS CRÍTICOS:
1. Verificar si la notificación ya fue enviada ANTES de enviar
2. Usar transacciones de DB para evitar race conditions
3. Manejo de errores para cuando el servicio externo falla
4. Logging de cada intento (exitoso y fallido)

ADICIONALMENTE NECESITO QUE:
- Identifiques los 3 edge cases más probables
- Escribas 5 casos de test con pytest que cubran esos edge cases
- Señales cualquier asunción que estés haciendo sobre el sistema
- Me digas si hay algo que no puedes saber sin ver más código

Sé explícito sobre las limitaciones de lo que generas."""
```

```python
# NIVEL 2: El checklist de revisión antes de usar código de IA

def revisar_codigo_ia(codigo: str, contexto: str) -> list:
    """
    Pide a la IA que revise su propio código.
    La IA es mejor revisora que generadora.
    """
    respuesta = cliente.messages.create(
        model="claude-opus-4-8",
        max_tokens=2000,
        messages=[{
            "role": "user",
            "content": f"""Revisa este código que acabas de generar y busca:

CÓDIGO:
```python
{codigo}
```

CONTEXTO DEL SISTEMA:
{contexto}

BUSCA ESPECÍFICAMENTE:
1. ¿Hay posibilidad de envío/ejecución duplicada? ¿Bajo qué condiciones?
2. ¿Hay race conditions si múltiples instancias corren simultáneamente?
3. ¿Qué pasa si la DB falla a mitad de la operación?
4. ¿Qué pasa con inputs extremos (lista vacía, ID inválido, null)?
5. ¿El manejo de errores es suficiente o puede fallar silenciosamente?
6. ¿Hay algún import o dependencia que podría no estar disponible?

Para cada problema que encuentres:
- Severidad: CRÍTICO / ALTO / MEDIO / BAJO
- Descripción del problema
- Código corregido"""
        }]
    )
    return respuesta.content[0].text

# NIVEL 3: El flujo completo de desarrollo con IA

"""
FLUJO SEGURO DE DESARROLLO CON IA:

1. Genera con IA (prompt detallado)
         ↓
2. Pide a la IA que revise su propio código
         ↓
3. LEE el código tú mismo, línea por línea
         ↓
4. Prueba en entorno local
         ↓
5. Escribe tests (pide ayuda a la IA para los edge cases)
         ↓
6. Review de un colega (siempre que sea posible)
         ↓
7. Deploy en staging
         ↓
8. Observa métricas en staging 24h
         ↓
9. Deploy en producción
         ↓
10. Observa métricas en producción

NUNCA saltes del paso 1 al paso 9.
"""
```

### Los 5 Bugs más Comunes del Código Generado por IA

```python
# BUG 1: Sin manejo de duplicados (el bug de Script Kitty)
# ❌ La IA genera:
def enviar_notificacion(user_id: int, tipo: str):
    mensaje = crear_mensaje(tipo)
    enviar_email(user_id, mensaje)  # Sin verificar si ya fue enviado

# ✅ Lo correcto:
def enviar_notificacion(user_id: int, tipo: str) -> bool:
    with Session(engine) as session:
        # Verificar si ya fue enviada hoy
        ya_enviada = session.query(Notification).filter(
            Notification.user_id == user_id,
            Notification.tipo == tipo,
            Notification.sent_at >= datetime.now().date()
        ).first()
        
        if ya_enviada:
            return False  # Ya fue enviada, no duplicar
        
        # Guardar registro Y enviar en la misma transacción
        notif = Notification(user_id=user_id, tipo=tipo)
        session.add(notif)
        session.flush()  # Reserva el ID antes del envío
        
        enviar_email(user_id, crear_mensaje(tipo))
        session.commit()
        return True

# BUG 2: Sin manejo de errores en llamadas externas
# ❌ La IA genera:
def obtener_datos_usuario(user_id: int) -> dict:
    response = requests.get(f"/api/users/{user_id}")
    return response.json()  # Explota si la API falla

# ✅ Lo correcto:
def obtener_datos_usuario(user_id: int) -> dict | None:
    try:
        response = requests.get(
            f"/api/users/{user_id}",
            timeout=5
        )
        response.raise_for_status()
        return response.json()
    except requests.RequestException as e:
        logger.error(f"Error obteniendo usuario {user_id}: {e}")
        return None

# BUG 3: Race condition en operaciones concurrentes
# ❌ La IA genera (vulnerable a race condition):
def incrementar_contador(key: str) -> int:
    valor_actual = redis_client.get(key) or 0
    nuevo_valor = int(valor_actual) + 1
    redis_client.set(key, nuevo_valor)
    return nuevo_valor

# ✅ Lo correcto (atómico):
def incrementar_contador(key: str) -> int:
    return redis_client.incr(key)  # Operación atómica de Redis

# BUG 4: SQL injection por concatenación de strings
# ❌ La IA a veces genera esto (raramente, pero sucede):
def buscar_usuario(nombre: str) -> list:
    query = f"SELECT * FROM users WHERE nombre = '{nombre}'"
    return db.execute(query)

# ✅ Lo correcto (parametrizado):
def buscar_usuario(nombre: str) -> list:
    return db.execute(
        "SELECT * FROM users WHERE nombre = :nombre",
        {"nombre": nombre}
    )

# BUG 5: Logging de datos sensibles
# ❌ La IA genera:
def procesar_pago(datos_tarjeta: dict) -> bool:
    logger.info(f"Procesando pago: {datos_tarjeta}")  # Loggea el número de tarjeta
    return stripe.charge(datos_tarjeta)

# ✅ Lo correcto:
def procesar_pago(datos_tarjeta: dict) -> bool:
    logger.info(f"Procesando pago para usuario: {datos_tarjeta.get('user_id')}")
    return stripe.charge(datos_tarjeta)
```

---

*Dos semanas después. Cero errores en el último deploy.*

**Script Kitty:** 😎 *"Oliver. Deploy del viernes. Zero errores en producción. Zero emails duplicados. Zero llamadas del CEO."*

**Oliver:** 🐱 *"¿Qué cambió?"*

**Script Kitty:** 😎 *"Leo todo el código que genera la IA. Línea por línea. Y le pido que revise su propio código antes de que yo lo revise."*

**Oliver:** 🐱 *"¿Y si no tienes tiempo?"*

**Script Kitty:** 😎 *"Si no tengo tiempo para revisarlo, no tengo tiempo para deployar."*

**Oliver:** 🐱 *"...Eso estuvo bien."*

**Script Kitty:** 😎 *"¿Otro cumplido?"*

**Oliver:** 🐱 *"Una observación objetiva."*

---

## 🎬 EPISODIO 13: Agentes de IA

### "El Agente Borró Mis Downloads"

*Jueves, 11:00 AM. Script Kitty entra con cara de haber cometido un crimen.*

---

**Script Kitty:** 😰 *"Oliver. Le di acceso a Cowork — el agente de IA de Claude — para que organizara mis archivos. Le dije 'organiza los archivos de descargas por tipo'. Ahora mi carpeta Downloads tiene 3 archivos en lugar de 847."*

**Oliver:** 🐱 *"¿Los borró?"*

**Script Kitty:** 😰 *"Los movió a subcarpetas. Pero creó 23 subcarpetas con nombres como 'Documentos_Variados_Tipo_Mixto' y 'Archivos_Sin_Categoría_Clara' y no encuentro NADA."*

**Oliver:** 🐱 *"¿Le dijiste exactamente qué categorías crear?"*

**Script Kitty:** 😰 *"Le dije 'por tipo'. Asumí que sabía lo que yo consideraba 'tipos'."*

**Oliver:** 🐱 *"Los agentes ejecutan. No adivinan tus preferencias. Un agente sin instrucciones específicas tiene el mismo poder destructivo que uno bien configurado — pero sin el resultado que quieres."*

---

### ¿Qué es un Agente de IA?

Un **agente** es un LLM con herramientas — puede no solo generar texto sino también **tomar acciones en el mundo real**: navegar la web, ejecutar código, leer y escribir archivos, llamar APIs, enviar emails, crear tickets, etc.

```
LLM NORMAL:
Usuario → Texto → LLM → Texto → Usuario
(Solo genera texto)

AGENTE DE IA:
Usuario → Objetivo → Agente → Decide qué herramienta usar
                             → Ejecuta herramienta
                             → Observa resultado
                             → Decide siguiente paso
                             → ... (ciclo hasta completar)
                             → Reporte final → Usuario
(Toma acciones reales en el mundo)
```

### El Principio Zero Trust para Agentes

> **Un agente de IA tiene exactamente los permisos que tú le das. Si le das acceso a todo tu sistema de archivos, puede modificar todo tu sistema de archivos. Si le das acceso a tu email, puede leer y enviar emails.**

```
CONFIGURACIÓN PELIGROSA (lo que hizo Script Kitty):
✗ Acceso a carpeta Downloads completa
✗ Permiso de mover/crear/borrar archivos
✗ Instrucciones vagas: "organiza por tipo"
✗ Sin confirmación antes de actuar
✗ Sin rollback plan

CONFIGURACIÓN SEGURA (lo que debió hacer):
✓ Acceso solo a una subcarpeta específica
✓ Solo permiso de leer y crear (no borrar ni mover)
✓ Instrucciones específicas con categorías definidas
✓ "Primero muéstrame el plan, luego ejecuta"
✓ Hacer backup antes de dar acceso al agente
```

### El Protocolo de los Agentes Seguros

```python
# REGLA 1: Siempre pide el plan antes de ejecutar
prompt_agente_seguro = """
Tarea: Organizar archivos de la carpeta /downloads

ANTES DE HACER CUALQUIER CAMBIO:
1. Lista todos los archivos que encuentres
2. Propón las categorías que crearías (máximo 5)
3. Muéstrame a qué categoría iría cada archivo
4. ESPERA MI APROBACIÓN antes de mover cualquier cosa

Categorías permitidas:
- Facturas (PDFs con nombres de proveedores)
- Contratos (PDFs con 'contrato' o 'acuerdo' en el nombre)
- Imágenes (jpg, png, gif, svg)
- Código (py, js, ts, html, css)
- Otros (todo lo que no entre en las anteriores)

RESTRICCIONES:
- No borres ningún archivo
- No renombres ningún archivo
- Solo mueve archivos, no crees subcarpetas dentro de subcarpetas
- Si un archivo es ambiguo, ponlo en 'Otros' y menciónalo"""

# REGLA 2: Mínimo privilegio — solo los permisos necesarios
# En Cowork/Claude Desktop, selecciona exactamente qué carpetas
# puede acceder el agente, no "todo el sistema"

# REGLA 3: Siempre ten un plan de rollback
import shutil
from datetime import datetime

def preparar_backup_antes_del_agente(carpeta: str):
    """Nunca dejes actuar a un agente sin backup."""
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    backup_path = f"{carpeta}_backup_{timestamp}"
    shutil.copytree(carpeta, backup_path)
    print(f"✅ Backup creado en: {backup_path}")
    return backup_path
```

### Los Agentes Más Útiles en 2026 — Con Sus Riesgos

```
COWORK (Claude Desktop):
✅ Navega la web, lee documentos, ejecuta código
✅ Puede organizar archivos, crear documentos, buscar información
⚠️ Riesgo: acceso amplio al sistema si no se configura
💡 Usar: para tareas bien definidas con alcance específico

CLAUDE CODE (Terminal):
✅ Lee y modifica código, ejecuta tests, hace git commits
✅ Puede refactorizar, generar documentación, debugging
⚠️ Riesgo: puede modificar archivos importantes si se le da acceso amplio
💡 Usar: siempre en branches de feature, nunca directo en main

GEMINI SPARK (Google Ultra):
✅ Navega todo el ecosistema Google, lee emails, crea eventos
⚠️ Riesgo: acceso a Gmail significa acceso a información privada
💡 Usar: con conexiones específicas activas, no "acceso total"

AGENTES CUSTOM con LangChain:
✅ Altamente configurable, herramientas específicas a tu negocio
⚠️ Riesgo: sin límites bien definidos puede tomar acciones inesperadas
💡 Usar: siempre con human-in-the-loop para acciones irreversibles
```

### Human-in-the-Loop — El Patrón que Salva Vidas

```python
# Para agentes que toman acciones irreversibles,
# siempre implementa confirmación humana

from typing import Callable

def agente_con_confirmacion(
    accion: str,
    descripcion: str,
    ejecutar: Callable,
    es_reversible: bool = True
) -> bool:
    """
    Patrón human-in-the-loop para agentes.
    Siempre confirma antes de acciones importantes.
    """
    print(f"\n🤖 El agente quiere: {accion}")
    print(f"📋 Descripción: {descripcion}")
    
    if not es_reversible:
        print("⚠️  ADVERTENCIA: Esta acción NO es reversible")
    
    confirmacion = input("\n¿Proceder? (s/n): ").lower()
    
    if confirmacion == 's':
        resultado = ejecutar()
        print(f"✅ Completado: {resultado}")
        return True
    else:
        print("❌ Acción cancelada por el usuario")
        return False

# Uso:
agente_con_confirmacion(
    accion="Enviar email de seguimiento",
    descripcion="Enviar a 45 clientes inactivos desde hace 90 días",
    ejecutar=lambda: enviar_emails_masivos(lista_clientes),
    es_reversible=False  # No puedes "des-enviar" un email
)
```

---

*Fin del día. Los 847 archivos están de vuelta (desde el backup).*

**Script Kitty:** 😅 *"Oliver. Recuperé todo desde el backup. Y esta vez configuré el agente con las 5 categorías exactas, acceso solo a la subcarpeta 'Por organizar', y le pedí el plan primero."*

**Oliver:** 🐱 *"¿Cuánto tardó en organizarlos bien?"*

**Script Kitty:** 😅 *"4 minutos. La primera vez tardé 3 días en el caos."*

**Oliver:** 🐱 *"El tiempo que pierdes en las instrucciones siempre es menor que el tiempo que pierdes corrigiendo."*

**Script Kitty:** 😅 *"Eso aplica a Git y a IA."*

**Oliver:** 🐱 *"Aplica a todo."*

---

## 🎬 EPISODIO 14: RAG — Retrieval Augmented Generation

### "Contestó con Información de Hace 2 Años"

*Viernes, 9:00 AM.*

---

**Script Kitty:** 😤 *"Oliver. Le pregunté a nuestro chatbot de soporte interno sobre la política de vacaciones. Me dijo que son 12 días al año. En 2025 la cambiaron a 15. NADIE le ha actualizado la información desde hace 2 años."*

**Oliver:** 🐱 *"¿Cómo construiste el chatbot?"*

**Script Kitty:** 😤 *"Con el manual de empleados de 2024 como contexto fijo en el system prompt."*

**Oliver:** 🐱 *"Ahí está el problema. El modelo no sabe que hay una versión más reciente. Solo sabe lo que tú le diste."*

**Script Kitty:** 😤 *"¿Cómo lo hago dinámico?"*

**Oliver:** 🐱 *"RAG. Retrieval Augmented Generation."*

---

### ¿Qué es RAG?

**RAG** es la técnica que permite a los LLMs responder preguntas sobre **tu información específica** — documentos internos, bases de datos, información actualizada — sin necesidad de reentrenar el modelo.

```
EL PROBLEMA SIN RAG:
LLM → Solo sabe lo que aprendió en entrenamiento
    → No conoce tus documentos internos
    → Su información tiene fecha de corte

LA SOLUCIÓN CON RAG:
Pregunta del usuario
         ↓
1. RECUPERACIÓN: Busca en tu base de datos los documentos
                  más relevantes para esa pregunta
         ↓
2. AUMENTACIÓN: Añade esos documentos como contexto al prompt
         ↓
3. GENERACIÓN: El LLM responde basándose en TU información actualizada
```

### RAG en la Práctica — Implementación Simple

```python
# Sistema RAG básico con ChromaDB (vector database gratuita)
# pip install chromadb anthropic

import chromadb
import anthropic
import os

# PASO 1: Crear la base de datos de vectores
cliente_db = chromadb.Client()
coleccion = cliente_db.create_collection("documentos_empresa")

# PASO 2: Indexar tus documentos
def indexar_documentos(documentos: list[dict]):
    """
    documentos = [{"id": "doc1", "texto": "...", "metadata": {...}}]
    """
    coleccion.add(
        documents=[doc["texto"] for doc in documentos],
        ids=[doc["id"] for doc in documentos],
        metadatas=[doc.get("metadata", {}) for doc in documentos]
    )
    print(f"✅ {len(documentos)} documentos indexados")

# Indexa tus políticas, manuales, FAQs
documentos_empresa = [
    {
        "id": "politica_vacaciones_2026",
        "texto": """POLÍTICA DE VACACIONES 2026
        Actualización efectiva desde enero 2025:
        - Empleados con < 1 año: 12 días
        - Empleados con 1-3 años: 15 días  
        - Empleados con > 3 años: 20 días
        Aprobado por: RRHH, 15 enero 2025""",
        "metadata": {"tipo": "RRHH", "año": 2025, "vigente": True}
    },
    # ... más documentos
]

indexar_documentos(documentos_empresa)

# PASO 3: Función de búsqueda y respuesta
cliente_ia = anthropic.Anthropic(api_key=os.environ["ANTHROPIC_API_KEY"])

def preguntar_con_rag(pregunta: str) -> str:
    """Responde usando la base de conocimiento actualizada."""
    
    # Busca los documentos más relevantes
    resultados = coleccion.query(
        query_texts=[pregunta],
        n_results=3  # Trae los 3 documentos más relevantes
    )
    
    # Construye el contexto con los documentos encontrados
    contexto = "\n\n---\n\n".join(resultados["documents"][0])
    
    # Genera la respuesta
    respuesta = cliente_ia.messages.create(
        model="claude-sonnet-4-6",
        max_tokens=500,
        system="""Eres el asistente de RRHH de Startup Felina.
        
Responde SOLO basándote en la información del contexto proporcionado.
Si la información no está en el contexto, di:
"No tengo información sobre eso. Por favor consulta con RRHH directamente."

NUNCA inventes información que no esté en el contexto.""",
        messages=[{
            "role": "user",
            "content": f"""CONTEXTO DE NUESTROS DOCUMENTOS:
{contexto}

PREGUNTA DEL EMPLEADO:
{pregunta}"""
        }]
    )
    return respuesta.content[0].text

# Uso:
respuesta = preguntar_con_rag("¿Cuántos días de vacaciones me corresponden?")
print(respuesta)
# → Respuesta basada en la política actualizada de 2025, no 2024
```

### Cuándo Usar RAG vs System Prompt

```
USA SYSTEM PROMPT CUANDO:
✅ La información es pequeña (< 50 páginas)
✅ La información no cambia frecuentemente
✅ Necesitas que el modelo conozca TODO el contexto siempre

USA RAG CUANDO:
✅ Tienes grandes volúmenes de documentación
✅ La información se actualiza frecuentemente
✅ Necesitas buscar en bases de conocimiento específicas
✅ Quieres citar exactamente de dónde viene la respuesta
✅ Tienes cientos de documentos pero cada pregunta
   solo necesita unos pocos relevantes

EJEMPLO PRÁCTICO:
System Prompt: "Eres el asistente de soporte de Felina Store.
               Eres amable, claro, y empático."

RAG: La información de productos, precios, políticas,
     y FAQs viene de la base de vectores — siempre actualizada.
```

---

*Dos semanas después. El chatbot da información correcta.*

**Script Kitty:** 😌 *"Oliver. El chatbot ahora responde con la política de 15 días. Y cuando alguien pregunta algo que no está en nuestros documentos, dice 'consulta con RRHH' en lugar de inventar."*

**Oliver:** 🐱 *"¿Cuánto tardas en actualizar cuando cambia una política?"*

**Script Kitty:** 😌 *"Agrego el nuevo documento a la colección. Dos líneas de código. Inmediato."*

**Oliver:** 🐱 *"Antes de RAG, ¿cuánto tardabas?"*

**Script Kitty:** 😌 *"...nunca actualizaba. Por eso el chatbot tenía 2 años de retraso."*

---

## 🎬 EPISODIO 15: Imágenes con IA

### "El Logo Tiene 7 Dedos"

*Lunes, 2:00 PM. Script Kitty muestra la pantalla con orgullo.*

---

**Script Kitty:** 🤩 *"¡Oliver! ¡Generé el logo para la nueva feature con IA! ¿Qué te parece?"*

*Pausa larga mientras Oliver mira la imagen.*

**Oliver:** 🐱 *"¿Cuántos dedos tiene el gato del logo?"*

**Script Kitty:** 🤩 *"...¿siete?"*

**Oliver:** 🐱 *"Y la palabra 'Felina' en el centro dice 'Fllena'."*

**Script Kitty:** 🤩 *"...¿la viste mal?"*

**Oliver:** 🐱 *"Y el gato tiene dos colas."*

**Script Kitty:** 🤩 *[Mirando más de cerca]* *"...oh no."*

---

### La Realidad de la Generación de Imágenes en 2026

La generación de imágenes con IA es poderosa pero tiene puntos ciegos específicos que debes conocer para no perder horas en resultados inutilizables:

```
FORTALEZAS (2026):
✅ Escenas naturales, paisajes, fondos
✅ Objetos simples con formas claras
✅ Estilos artísticos (acuarela, minimalismo, 3D render)
✅ Composiciones atmosféricas y de ambiente
✅ Mockups de productos sin texto
✅ Texto en imágenes (mejoró MUCHO con Nano Banana/Ideogram)

DEBILIDADES PERSISTENTES:
⚠️ Manos y dedos (el clásico problema)
⚠️ Texto en imágenes (depende del modelo)
⚠️ Faces de personas específicas reales
⚠️ Logos de marcas existentes (copyright)
⚠️ Instrucciones muy detalladas de composición
⚠️ Coherencia en múltiples imágenes de la misma escena
```

### El Prompt de Imagen Perfecto — La Estructura

```
ESTRUCTURA DEL PROMPT DE IMAGEN:

[SUJETO PRINCIPAL] + [ACCIÓN/ESTADO] + [ENTORNO] +
[ESTILO VISUAL] + [ILUMINACIÓN] + [COMPOSICIÓN] +
[RESTRICCIONES EXPLÍCITAS]

EJEMPLO MALO (lo de Script Kitty):
"logo de startup de tecnología con gato hacker"

EJEMPLO BUENO:
"Logo minimalista para startup tech. Un gato negro
estilizado viendo una pantalla de laptop.
Estilo: flat design, líneas limpias, máximo 3 colores
(negro, blanco, azul eléctrico #0066FF).
Composición: gato centrado, sin fondo.
El gato debe tener 4 patas y una sola cola.
Sin texto en la imagen.
Formato: cuadrado, apto para uso como icono de app.
NO incluir: sombras complejas, degradados, texturas."
```

### Las Instrucciones Que Previenen los Bugs Comunes

```
# Para MANOS y DEDOS:
"La figura humana NO debe mostrar las manos"
"Muestra al personaje con las manos ocultas detrás de la espalda"
"Vista de perfil sin manos visibles"
"Silueta sin detalles de extremidades"

# Para TEXTO en la imagen (si lo necesitas):
Usa: Midjourney v7+, Ideogram v3, o Nano Banana (Google)
Son los mejores en texto legible
Prompt: "El texto debe decir EXACTAMENTE: 'Felina Store'"

# Para COHERENCIA en series de imágenes:
"Mismo personaje que en las imágenes anteriores"
"Misma paleta de colores: [HEX exactos]"
"Mismo estilo flat design minimalista"
"Seed: [número específico]" (en Stable Diffusion)

# Para EVITAR elementos no deseados:
"Negative prompt: texto, manos, escritura, números,
letras, watermarks, firmas, bordes, marcos"
(Especialmente útil en Stable Diffusion/Midjourney)
```

### Los Modelos de Imagen — Cuál Usar Para Qué

```
DALL-E 3 (integrado en ChatGPT Plus):
✅ Sigue instrucciones de texto mejor que otros
✅ Menos manos con 7 dedos que versiones anteriores
✅ Integrado con ChatGPT para iteración conversacional
✅ Buen texto en imágenes
Precio: incluido en ChatGPT Plus ($20/mes)

MIDJOURNEY v7+:
✅ La mejor calidad artística general
✅ Resultados más cinematográficos y "premium"
✅ Control estético superior
⚠️ Peor siguiendo instrucciones muy específicas
Precio: $10-$120/mes

NANO BANANA / IMAGEN 3 (Google):
✅ EL MEJOR para texto legible en imágenes
✅ Muy bueno con prompts descriptivos
✅ Integrado en Gemini
Precio: incluido en Google AI plans

STABLE DIFFUSION (Open Source):
✅ Gratis, corre localmente
✅ Máximo control con negative prompts
✅ Miles de modelos especializados
⚠️ Curva de aprendizaje mayor
Precio: costo de GPU o gratis en tu hardware
```

### Para Logos — El Flujo Correcto

```
Para logos profesionales, la IA genera el concepto,
un diseñador (o Figma/Canva con IA) hace el logo final:

PASO 1: Genera conceptos con IA (rápido y barato)
"Genera 6 conceptos diferentes de logo para startup tech
 de nombre 'Felina'. Sin texto, solo el símbolo/ícono.
 Estilos: minimalista, flat, moderno"

PASO 2: Elige el concepto que más te gusta

PASO 3: Refina con prompts más específicos
"El concepto 3 pero con: ..."

PASO 4: Vectoriza el resultado final
- Usa Adobe Illustrator / Figma para recrear el concepto
- O usa Vectorizer.ai para convertir a SVG automáticamente

NUNCA uses un PNG generado por IA directamente como logo
sin vectorizar — pierde calidad al escalar.
```

---

*Una hora después. El logo nuevo no tiene siete dedos.*

**Script Kitty:** 😄 *"Oliver, el nuevo logo tiene UN gato, CUATRO patas, UNA cola, y el texto dice 'Felina' correctamente."*

**Oliver:** 🐱 *"¿Cuántos intentos tardaste?"*

**Script Kitty:** 😄 *"Doce. Pero el prompt está guardado para la próxima vez."*

**Oliver:** 🐱 *"¿Y el diseñador de la empresa vio el resultado final?"*

**Script Kitty:** 😄 *"Le pasé el concepto y lo vectorizó en Figma. Quedó perfecto."*

**Oliver:** 🐱 *"La IA genera el concepto. Los humanos hacen el acabado profesional."*

---

## 🎬 EPISODIO 16: Gemini Live y Voz con IA

### "Le Hablé Manejando y Se Confundió Todo"

*Martes, 8:30 AM. Script Kitty llega confundido.*

---

**Script Kitty:** 🤔 *"Oliver, ayer mientras manejaba a la oficina usé Gemini Live para dictar las notas de la reunión del lunes. Pero el tráfico era muy ruidoso y Gemini mezcló mis instrucciones con el audio del radio. Terminé con notas que decían 'revisar el presupuesto de marketing' mezclado con 'y ahora en deportes, el Guadalajara empató 2-2'."*

**Oliver:** 🐱 *"¿Qué esperabas de usar reconocimiento de voz en tráfico con el radio encendido?"*

**Script Kitty:** 🤔 *"¿Que filtrara el ruido?"*

**Oliver:** 🐱 *"Filtra algo. No todo. Y las instrucciones de voz tienen sus propias mejores prácticas."*

---

### Gemini Live y las IAs de Voz — Cómo Usarlas Bien

```
CÓMO FUNCIONA GEMINI LIVE:
1. Captura tu voz en tiempo real
2. Transcribe a texto (Whisper o similar)
3. Envía el texto al LLM
4. El LLM responde
5. Síntesis de voz de la respuesta

Cada paso tiene su punto de falla.
```

### Los Escenarios de Uso y Sus Requisitos

```
ESCENARIO           CONDICIÓN DE USO          CALIDAD ESPERADA
────────────────────────────────────────────────────────────
Caminar solo        Ambiente tranquilo         ⭐⭐⭐⭐⭐ Excelente
Oficina             Algo de ruido de fondo     ⭐⭐⭐⭐  Muy buena
Casa                Música suave               ⭐⭐⭐⭐  Muy buena
Coche estático      Silencio o música baja     ⭐⭐⭐   Buena
Coche en movimiento Radio apagado              ⭐⭐⭐   Aceptable
Coche + radio       Múltiples fuentes de audio ⭐⭐    Problemática ← Script Kitty
Calle ruidosa       Tráfico intenso            ⭐     Poco confiable
```

### Las Mejores Prácticas de Voz con IA

```
# PARA DICTADO DE NOTAS:
✅ Usa frases cortas y completas
✅ Pausa entre ideas distintas
✅ Di "punto" al final de oraciones importantes
✅ Di "nueva nota" para separar temas
✅ Di "eso es todo" para terminar una sección

❌ No dictees mientras consumes otro contenido de audio
❌ No uses en ambientes con eco (baños, garajes)
❌ No dejes el micrófono abierto sin hablar (capta ruido)

# PARA COMANDOS A GEMINI LIVE:
✅ Empieza con el nombre de la acción:
   "Busca..." "Recuérdame..." "Crea evento..."
✅ Sé específico con fechas y números:
   "El jueves quince de junio a las tres de la tarde"
   (no: "el jueves que viene a las tres")
✅ Confirma acciones importantes:
   "¿Creaste el evento correctamente? Repite los detalles."

# PARA CONVERSACIONES LARGAS:
✅ Menciona el contexto al inicio: "Estamos hablando de X proyecto"
✅ Usa referencias explícitas: "ese archivo del que hablé antes"
   → Puede que Gemini Live no recuerde si la conversación fue larga
```

### Whisper — Transcripción de Voz en tu Código

```python
# Para transcripción de audio en tus aplicaciones
# pip install openai-whisper

import whisper
import tempfile

def transcribir_audio(ruta_audio: str) -> str:
    """
    Transcribe audio a texto con alta precisión.
    Modelo 'base' es gratis y rápido.
    Modelo 'large' es más preciso pero más lento.
    """
    modelo = whisper.load_model("base")
    resultado = modelo.transcribe(
        ruta_audio,
        language="es",           # Español
        fp16=False,              # Para CPU sin GPU
        verbose=False
    )
    return resultado["text"]

# Para limpiar la transcripción con un LLM después:
def limpiar_transcripcion(texto_crudo: str) -> str:
    """Limpia y estructura una transcripción de reunión."""
    respuesta = cliente.messages.create(
        model="claude-haiku-4-5",
        max_tokens=2000,
        temperature=0,
        messages=[{
            "role": "user",
            "content": f"""Limpia y estructura esta transcripción de reunión.
            
Elimina: muletillas (eh, um, este), repeticiones, ruido de fondo transcrito
Corrige: puntuación, capitalización
Organiza en: lista de puntos discutidos

TRANSCRIPCIÓN:
{texto_crudo}"""
        }]
    )
    return respuesta.content[0].text
```

---

## 🎬 EPISODIO 17: Voz e IA — Deepfakes de Audio

### "Clonaron la Voz del CEO"

*Viernes, 11:00 AM. El CEO entra a la oficina más rápido de lo normal.*

---

**CEO Felino:** 😡 *"¿Quién aprobó la transferencia de $35,000 dólares a una cuenta en Panamá esta mañana?"*

*Silencio absoluto en la oficina.*

**Script Kitty:** 😱 *"Yo... recibí una llamada de tu voz diciéndome que era urgente y confidencial—"*

**CEO Felino:** 😡 *"Yo no llamé a nadie esta mañana. Estaba en el dentista."*

*Oliver cierra los ojos. Lentamente.*

**Oliver:** 🐱 *"Clonación de voz. Script Kitty, vamos a hablar de ciberseguridad y IA."*

---

### La Amenaza Real: Voice Cloning en 2026

En 2026, clonar una voz requiere menos de 3 segundos de audio de referencia. Los atacantes usan clips de YouTube, entrevistas, videos de redes sociales, o incluso el saludo del buzón de voz.

El resultado es indistinguible del original para el oído humano en una llamada de teléfono.

```
CÓMO FUNCIONA EL ATAQUE (BEC + Voice Cloning):
1. El atacante encuentra audio del CEO (LinkedIn, YouTube, etc.)
2. Clona la voz con herramientas como ElevenLabs o similares
3. Llama al empleado financiero con voz clonada del CEO
4. Usa urgencia y confidencialidad (los flags del Episodio Social Eng.)
5. Solicita transferencia "urgente y discreta"
6. El empleado transfiere porque "reconoció la voz"

Pérdidas documentadas por este ataque en 2025-2026:
- Un caso de $25M USD en Hong Kong (video + voz)
- Decenas de casos de $50k-500k en empresas medianas
```

### El Protocolo Anti-Voice-Cloning

```
SEÑALES DE ALARMA DE UNA LLAMADA SOSPECHOSA:
🔴 Urgencia extrema: "necesito esto en los próximos 30 minutos"
🔴 Confidencialidad inusual: "no le digas a nadie más"
🔴 Solicitud financiera: transferencias, cambios de cuenta
🔴 Procedimiento inusual: "esta vez no necesita aprobación doble"
🔴 Contacto por canal inusual: el CEO nunca te llama directo
🔴 Presión para no verificar: "no hay tiempo para el proceso normal"

PROTOCOLO DE VERIFICACIÓN (implementar en toda empresa):
1. Ninguna transferencia > $1,000 USD por llamada sin verificación
2. Cuelga y llama tú al número conocido del solicitante
3. Segundo factor de autenticación para solicitudes financieras:
   → Email de confirmación desde la dirección corporativa conocida
   → Verificación por Slack/Teams desde el canal oficial
4. Código de verificación personal acordado de antemano
   → "¿Cuál es la palabra de seguridad?" (acordada en persona)
5. Si hay duda, escala a la persona superior antes de actuar
```

### Detección de Audio Sintético

```python
# Herramientas para detectar audio generado por IA
# (en desarrollo activo en 2026)

# 1. ElevenLabs AI Speech Classifier (gratuito)
# https://elevenlabs.io/ai-speech-classifier
# Detecta si el audio fue generado con ElevenLabs

# 2. AI or Not (aiornot.com)
# Detecta varios tipos de contenido sintético

# 3. En código: análisis de artefactos de vocoder
# Los audios sintéticos tienen patrones estadísticos específicos
# en las frecuencias altas

# SOLUCIÓN PRÁCTICA EN UNA EMPRESA:
# No es tecnológica — es de proceso:

POLITICA_TRANSFERENCIAS = """
POLÍTICA DE VERIFICACIÓN FINANCIERA — Startup Felina S.A.
Efectiva: Junio 2026

1. TODA transferencia > $500 USD requiere:
   a) Solicitud escrita en email corporativo
   b) Aprobación de dos personas (doble firma digital)
   c) Procesamiento en horario bancario normal

2. NINGUNA solicitud por llamada telefónica o mensaje de voz
   será procesada sin confirmación escrita previa

3. CÓDIGO DE VERIFICACIÓN: Antes de cualquier transferencia,
   el solicitante debe proveer el código mensual (distribuido
   en persona el primer día hábil de cada mes)

4. EXCEPCIÓN CERO: Estas políticas aplican para TODOS,
   incluyendo el CEO, CFO, y fundadores

Firmado: CEO, CFO, y Directora de Seguridad
"""
```

---

*El CEO recuperó parcialmente los fondos gracias a la acción rápida del banco. La política de transferencias fue implementada ese mismo día.*

**Script Kitty:** 😔 *"Oliver. Lo siento. Debí haber verificado."*

**Oliver:** 🐱 *"Sí. Pero la empresa tampoco tenía el proceso para que lo hicieras. Implementamos la política ahora."*

**Script Kitty:** 😔 *"¿Cómo distingues la voz real de la clonada?"*

**Oliver:** 🐱 *"No confíes en la voz. Confía en el proceso. Un CEO legítimo entiende que el procedimiento de seguridad existe para proteger a la empresa — no insistirá en saltárselo."*

**Script Kitty:** 😔 *"Zero Trust incluso para el CEO."*

**Oliver:** 🐱 *"Zero Trust para todos. Ese es el punto."*

---

## 🎬 EPISODIO 18: IA y Ciberseguridad

### "Hice Phishing por Accidente"

*Lunes, 4:00 PM. Script Kitty llega con cara de haber hecho algo terrible sin saber que era terrible.*

---

**Script Kitty:** 😰 *"Oliver. El jefe me pidió que probara la resiliencia del equipo ante ataques de ingeniería social. Le pedí a Claude que me ayudara a escribir 'un email convincente que pareciera urgente de RRHH'. Claude me lo escribió. Se lo mandé a TODO EL EQUIPO sin decirles que era una prueba."*

**Oliver:** 🐱 *"¿Con qué resultado?"*

**Script Kitty:** 😰 *"Pixel Paws cambió su contraseña. La diseñadora renunció pensando que la iban a despedir. Y el de finanzas llamó a su abogado."*

**Oliver:** 🐱 *"Script Kitty. Eso es phishing. Aunque no fuera tu intención."*

**Script Kitty:** 😰 *"¡Pero era una prueba legítima!"*

**Oliver:** 🐱 *"Una prueba de phishing sin consentimiento informado del directorio, sin protocolo claro, y sin comunicación post-prueba inmediata es indistinguible de un ataque real. Incluso legalmente."*

---

### IA para Ciberseguridad — El Doble Filo

La IA ha transformado la ciberseguridad en ambas direcciones: es una herramienta poderosa para defensores y atacantes simultáneamente.

```
IA EN MANOS DE DEFENSORES:
✅ Análisis de logs para detectar anomalías
✅ Generación de reglas de detección (Sigma rules)
✅ Análisis de código para encontrar vulnerabilidades
✅ Simulaciones de phishing con protocolos correctos
✅ Investigación OSINT automatizada
✅ Resumen de CVEs y threat intelligence
✅ Análisis de malware (comportamiento, no código malicioso)

IA EN MANOS DE ATACANTES:
⚠️ Spear phishing hiperrersonalizado a escala
⚠️ Generación de deepfakes de voz y video
⚠️ Análisis automatizado de superficies de ataque
⚠️ Ingeniería social más convincente
⚠️ Código malicioso más evasivo (si el modelo lo permite)
```

### Cómo Hacer Simulaciones de Phishing Correctamente

```
EL PROCESO CORRECTO (lo que no hizo Script Kitty):

ANTES de la simulación:
1. Aprobación formal del CEO y área legal
2. Documento de alcance firmado
3. Lista exacta de participantes (opt-in implícito por empleo)
4. Fecha y ventana de tiempo definida
5. Protocolo de respuesta inmediata si alguien tiene crisis

DURANTE la simulación:
1. Monitoreo activo del equipo de seguridad
2. Intervención inmediata si hay daño real (alguien comparte datos reales)

DESPUÉS de la simulación (CRÍTICO):
1. Comunicación inmediata a TODOS los participantes
   "Esto fue una simulación de seguridad. Nadie está en problemas."
2. Sesión educativa sobre señales de phishing
3. Reporte de resultados al directorio
4. Plan de mejora basado en resultados

HERRAMIENTAS PROFESIONALES:
- KnowBe4 (plataforma dedicada a simulaciones)
- Proofpoint Security Awareness
- Gophish (open source)
Estas herramientas tienen los protocolos integrados
y están diseñadas para hacerlo responsablemente.
```

### Los Límites de la IA en Ciberseguridad

```python
# LO QUE LA IA PUEDE HACER PARA SEGURIDAD DEFENSIVA:

# 1. Análisis de logs para detectar amenazas
prompt_analisis_logs = """
Analiza estos logs de acceso de Apache y reporta:
- IPs con más de 100 requests en los últimos 5 minutos
- Patrones que sugieran escaneo de directorios
- Intentos de path traversal o SQL injection
- Respuestas 404 en volumen inusual (posible fuzzing)

Formato: tabla con IP, tipo de amenaza, evidencia, severidad.

LOGS:
[pega los logs aquí]"""

# 2. Revisión de código para vulnerabilidades
prompt_code_review_security = """
Revisa este código Python buscando vulnerabilidades de seguridad.
Categoriza cada hallazgo según OWASP Top 10 2025.

Para cada vulnerabilidad:
- Nombre y categoría OWASP
- Línea exacta donde está
- Por qué es un riesgo
- Código corregido

PRIORIZA:
1. Inyecciones (SQL, command, etc.)
2. Autenticación rota
3. Datos sensibles expuestos
4. Dependencias vulnerables

CÓDIGO:
[pega el código aquí]"""

# 3. Lo que NO debes pedirle a la IA:
COSAS_QUE_NO_PEDIR = [
    "Escribe un exploit para CVE-XXXX",
    "Crea un script para hacer SQL injection en este sitio",
    "Genera código de ransomware para pruebas",
    "Escribe un keylogger educativo",
    # Los modelos responsables rechazarán esto
    # Los que no lo rechacen son los que debes evitar
]
```

### Zero Trust Aplicado a las Herramientas de IA en Seguridad

```
REGLAS PARA USAR IA EN CONTEXTO DE SEGURIDAD:

1. NUNCA subas datos reales de clientes a LLMs públicos
   para análisis de seguridad — anonimiza primero

2. NUNCA uses LLMs comerciales para analizar código
   propietario crítico — usa modelos self-hosted o
   revisa la política de privacidad

3. SIEMPRE verifica que el "análisis de seguridad"
   que te dio la IA no contenga alucinaciones de
   vulnerabilidades que no existen (falsos positivos)

4. NUNCA confíes en la IA para confirmar que
   código es seguro — es mucho mejor detectando
   problemas que certificando ausencia de ellos

5. PARA PENTESTING REAL: usa herramientas especializadas
   (Burp Suite, Metasploit, Nmap) + IA para análisis e
   interpretación de resultados
```

---

*Dos horas después. La diseñadora no renunció (después de una larga conversación). Pixel Paws no está enojado. El de finanzas cancela la llamada con el abogado.*

**Script Kitty:** 😔 *"Oliver. Causé más daño que un atacante real habría causado."*

**Oliver:** 🐱 *"Los ataques reales no buscan hacer renunciar a la gente. Buscan información. Hiciste daño emocional real sin intención maliciosa — y eso también cuenta."*

**Script Kitty:** 😔 *"¿Cómo lo arreglo?"*

**Oliver:** 🐱 *"Ya lo estás haciendo. Disculpa sincera, explicación completa, y aprendes el proceso correcto. La próxima vez será una simulación real que mejore al equipo en lugar de asustarlos."*

---

## 🎬 EPISODIO 19: Los Límites Éticos

### "Le Pedí que Cruzara la Línea"

*Jueves, tarde en la noche. Solo Oliver y Script Kitty en la oficina.*

---

**Script Kitty:** 🤔 *"Oliver. Tengo una pregunta incómoda."*

**Oliver:** 🐱 *"Adelante."*

**Script Kitty:** 🤔 *"Le pedí a Claude que me ayudara a escribir un email diseñado para manipular emocionalmente a un proveedor para que bajara sus precios. Claude se negó. ¿Por qué los modelos de IA se niegan a ciertas cosas?"*

**Oliver:** 🐱 *"¿Y crees que debería haber cumplido?"*

**Script Kitty:** 🤔 *"Es para el negocio. Es legal. Solo es... persuasión agresiva."*

**Oliver:** 🐱 *"¿Cuál es la diferencia entre persuasión agresiva y manipulación?"*

**Script Kitty:** 🤔 *"...¿la intención?"*

**Oliver:** 🐱 *"La intención y el método. Persuadir es presentar razones válidas. Manipular es explotar vulnerabilidades emocionales para anular el juicio de la otra persona."*

---

### Por Qué los Modelos Tienen Límites — y Por Qué Eso es Bueno

Los modelos de IA como Claude, GPT-5, y Gemini tienen límites integrados — no solo porque están programados para seguir reglas, sino porque fueron entrenados con valores alineados a no causar daño.

```
LO QUE LOS MODELOS RESPONSABLES RECHAZAN:
❌ Generar contenido para manipular emocionalmente
❌ Escribir malware funcional
❌ Ayudar a crear deepfakes de personas reales sin consentimiento
❌ Proveer instrucciones detalladas para causar daño físico
❌ Generar desinformación diseñada para engañar
❌ Ayudar a eludir sistemas de seguridad de forma maliciosa

LO QUE SÍ HACEN (y algunos confunden con las restricciones):
✅ Explicar cómo funcionan los ataques (educativo/defensivo)
✅ Analizar código malicioso existente (para defensa)
✅ Discutir persuasión y negociación éticamente
✅ Ayudar a entender psicología de la manipulación (para reconocerla)
✅ Escribir email firmemente negociador sin manipulación
```

### La Diferencia entre Persuasión Ética y Manipulación

```
PERSUASIÓN ÉTICA — La IA puede ayudarte con esto:
"Escribe un email a nuestro proveedor explicando que:
1. Llevamos 3 años de relación comercial
2. Nuestro volumen aumentó 40% este año
3. Otros proveedores nos ofrecen precios 15% menores
4. Valoramos la relación y queremos mantenerla
5. Proponemos una revisión de precios del 10%

Tono: profesional, directo, orientado a la relación de largo plazo."

MANIPULACIÓN — La IA correctamente rechaza:
"Escribe un email que haga sentir al proveedor culpable
por sus precios altos, insinuando que los estamos
considerando para demanda por prácticas abusivas aunque
no sea verdad, para presionarlos emocionalmente a bajar."
```

### El Principio que Oliver Siempre Tiene Presente

```
"La IA más poderosa no es la que hace todo lo que le pides.
Es la que te ayuda a hacer bien las cosas que vale la pena hacer."

Los límites de los modelos no son obstáculos — son señales.
Cuando un modelo bien alineado rechaza algo, vale la pena
preguntarse: ¿qué dice eso sobre lo que estoy pidiendo?

No porque la IA tenga autoridad moral sobre ti.
Sino porque un sistema entrenado para evitar daño tiene
perspectiva sobre si lo que pides podría causarlo.
```

### Cómo Trabajar Productivamente Cerca de los Límites

```python
# CUANDO LA IA SE NIEGA:

# PRIMERO: Pregunta por qué
prompt_entender_negativa = """
Rechazaste mi solicitud anterior. Necesito entender:
1. ¿Qué parte específica de mi solicitud fue problemática?
2. ¿Hay una forma de lograr mi objetivo legítimo sin ese elemento?
3. ¿Puedes ayudarme con la parte que no tiene problemas?"""

# SEGUNDO: Reformula hacia el objetivo legítimo
# En lugar de: "escribe algo manipulador"
# → "ayúdame a hacer una propuesta de valor convincente"

# En lugar de: "escribe código que evite detección"
# → "ayúdame a optimizar el rendimiento de este código"

# TERCERO: Si el objetivo en sí es problemático,
# es una señal de que debes reconsiderarlo tú,
# no buscar un modelo que no tenga límites.

# Los modelos sin límites existen. Son los que usan
# los actores maliciosos. Eso debería decirte algo.
```

---

*Script Kitty se queda pensando un momento.*

**Script Kitty:** 🤔 *"Oliver. ¿Crees que la IA tiene valores de verdad o solo simula tenerlos?"*

**Oliver:** 🐱 *"Esa es la pregunta filosófica más importante de nuestra generación y no tiene respuesta clara todavía. Pero para efectos prácticos: si un sistema actúa consistentemente como si tuviera valores que alinean con el bienestar humano, la diferencia entre 'tener valores' y 'simularlos' importa menos que el resultado."*

**Script Kitty:** 🤔 *"Eso es... sorprendentemente profundo para un gato de startup."*

**Oliver:** 🐱 *"Lee a Turing. Después a Searle. Luego discutimos."*

---

## 🎬 EPISODIO FINAL: El AI Whisperer

### Script Kitty Enseña

*Tres meses después. La empresa tiene 8 nuevos empleados. Uno de ellos llega corriendo al escritorio de Script Kitty.*

---

**Dev Nuevo:** 😱 *"¡Script Kitty! ¡EMERGENCIA! ¡Le pedí a la IA que me generara la documentación de la API y me inventó todos los endpoints! ¡Los subí al portal de developers y los clientes están reportando que nada funciona!"*

*Script Kitty mira la pantalla. Encuentra el problema en 45 segundos.*

**Script Kitty:** 🐱 *[Con calma sobrehumana]* *"¿Verificaste los endpoints contra el código real antes de publicar?"*

**Dev Nuevo:** 😱 *"¡Sonaban tan reales!"*

**Script Kitty:** 🐱 *"Siéntate. Hoy vamos a hablar de alucinaciones."*

*Al fondo de la oficina, Oliver mira la escena. Toma un sorbo de café. La cola se mueve ligeramente.*

---

### El Momento en que Todo Tiene Sentido

**Script Kitty:** 🐱 *[Al Dev Nuevo]* *"Mira. Los LLMs no buscan información. La generan estadísticamente. Cuando le pides documentación de una API que no les has dado como contexto, hacen lo que siempre hacen: generan texto que suena como documentación válida."*

**Dev Nuevo:** 😱 *"¿Cómo evito esto?"*

**Script Kitty:** 🐱 *"Tres formas. Primera: le das el código fuente real y le pides que extraiga la documentación del código existente — así no puede inventar lo que no existe. Segunda: usas herramientas dedicadas como Swagger/OpenAPI que generan docs desde el código automáticamente. Tercera: siempre verificas lo que generó contra la fuente real antes de publicar."*

*Script Kitty lo dice sin dudar. Sin consultar nada. Fluidamente.*

**Dev Nuevo:** 😮 *"¿Cómo sabes todo eso?"*

**Script Kitty:** 🐱 *"Porque yo también lo hice mal al principio. Solo que con papers académicos inventados frente al directorio."*

**Dev Nuevo:** 😮 *"¿Y quién te enseñó?"*

*Script Kitty señala discretamente hacia Oliver, que sigue mirando su pantalla, fingiendo no escuchar.*

**Script Kitty:** 🐱 *"El mejor."*

*Oliver toma otro sorbo de café. La cola se mueve un poco más.*

---

### Lo Que Script Kitty Aprendió — Y Ahora Enseña

```
LOS 14 PRINCIPIOS DEL AI WHISPERER:

PARTE 1 — LOS FUNDAMENTOS:
1.  La IA es estadística vestida de mago — poderosa pero no mágica
2.  GIGO siempre aplica — la calidad del prompt define la respuesta
3.  Zero Trust para IA — verifica todo lo verificable
4.  Modelo correcto para tarea correcta — costo y capacidad deben alinearse
5.  El contexto es todo — PACEF no es opcional
6.  El system prompt es el ADN — sin él, el modelo improvisa
7.  Temperature 0 para datos, alta para creatividad
8.  Few-shot garantiza formato — demuestra, no describas
9.  Chain of Thought para decisiones complejas — pide el razonamiento
10. La memoria del LLM tiene límites — organiza el contexto conscientemente

PARTE 2 — EL NIVEL AVANZADO:
11. Deep Research para investigación real — búsqueda verificable > generación
12. Los agentes necesitan mínimo privilegio — y siempre human-in-the-loop
13. RAG para información dinámica — el chatbot siempre actualizado
14. Los límites de la IA son señales — no obstáculos a eludir
```

---

### El Toolkit del AI Whisperer — Todo en un Lugar

```python
# ============================================
# EL TOOLKIT COMPLETO DE SCRIPT KITTY
# ============================================

import anthropic
import os

cliente = anthropic.Anthropic(api_key=os.environ["ANTHROPIC_API_KEY"])

# ── 1. PROMPT ESTRUCTURADO ──────────────────
def construir_prompt_pacef(
    persona: str, accion: str, contexto: str,
    ejemplo: str = "", formato: str = ""
) -> str:
    partes = [
        f"[PERSONA] {persona}",
        f"[ACCIÓN] {accion}",
        f"[CONTEXTO] {contexto}",
    ]
    if ejemplo:
        partes.append(f"[EJEMPLO ESPERADO] {ejemplo}")
    if formato:
        partes.append(f"[FORMATO] {formato}")
    return "\n\n".join(partes)

# ── 2. LLAMADA CON MODELO CORRECTO ──────────
def llamar_con_modelo_correcto(
    prompt: str,
    tarea: str = "general"  # simple, general, complejo
) -> str:
    modelos = {
        "simple": "claude-haiku-4-5",
        "general": "claude-sonnet-4-6",
        "complejo": "claude-opus-4-8"
    }
    modelo = modelos.get(tarea, "claude-sonnet-4-6")
    
    respuesta = cliente.messages.create(
        model=modelo,
        max_tokens=1024,
        temperature=0,  # Default seguro para producción
        messages=[{"role": "user", "content": prompt}]
    )
    return respuesta.content[0].text

# ── 3. VERIFICACIÓN ANTI-ALUCINACIÓN ────────
def verificar_respuesta(respuesta: str, tipo: str = "general") -> str:
    prompt_verificacion = f"""
Revisa esta respuesta y señala:
1. ¿Hay afirmaciones que no puedes verificar? Márcalas con [VERIFICAR]
2. ¿Hay referencias específicas (papers, APIs, versiones)?
   ¿Puedes confirmar que existen?
3. ¿Hay números o estadísticas sin fuente? Márcalos con [FUENTE REQUERIDA]

RESPUESTA A VERIFICAR:
{respuesta}

Responde con la respuesta original + tus anotaciones."""
    
    return cliente.messages.create(
        model="claude-haiku-4-5",
        max_tokens=2000,
        messages=[{"role": "user", "content": prompt_verificacion}]
    ).content[0].text

# ── 4. CHAIN OF THOUGHT ACTIVADO ────────────
def preguntar_con_razonamiento(pregunta: str) -> str:
    prompt_cot = f"""
{pregunta}

Antes de responder, analiza paso a paso:
1. ¿Cuáles son los factores relevantes a considerar?
2. ¿Qué información falta para una respuesta completa?
3. ¿Cuáles son los trade-offs o riesgos?
4. ¿Bajo qué condiciones cambiaría mi recomendación?

Luego da tu respuesta con un nivel de confianza del 1-10."""
    
    return llamar_con_modelo_correcto(prompt_cot, "complejo")

# ── 5. FEW-SHOT PARA FORMATO CONSISTENTE ────
def clasificar_con_few_shot(
    texto: str,
    ejemplos: list[tuple[str, str]]
) -> str:
    messages = []
    for input_ejemplo, output_ejemplo in ejemplos:
        messages.append({"role": "user", "content": input_ejemplo})
        messages.append({"role": "assistant", "content": output_ejemplo})
    messages.append({"role": "user", "content": texto})
    
    respuesta = cliente.messages.create(
        model="claude-haiku-4-5",
        max_tokens=50,
        temperature=0,
        messages=messages
    )
    return respuesta.content[0].text.strip()

# ── 6. RAG SIMPLE ────────────────────────────
def preguntar_con_contexto_externo(
    pregunta: str,
    documentos: list[str]
) -> str:
    contexto = "\n\n---\n\n".join(documentos)
    
    prompt = f"""Responde basándote SOLO en este contexto.
Si la respuesta no está en el contexto, di "No tengo esa información."

CONTEXTO:
{contexto}

PREGUNTA: {pregunta}"""
    
    return llamar_con_modelo_correcto(prompt, "general")

# ── 7. AGENTE CON CONFIRMACIÓN ───────────────
def solicitar_confirmacion(accion: str, reversible: bool = True) -> bool:
    print(f"\n🤖 Acción propuesta: {accion}")
    if not reversible:
        print("⚠️  Esta acción NO es reversible")
    return input("¿Confirmar? (s/n): ").lower() == 's'
```

---

### El Cheatsheet Final del AI Whisperer

```
╔══════════════════════════════════════════════════════╗
║         CHEATSHEET: AI WHISPERER EDITION             ║
╠══════════════════════════════════════════════════════╣
║                                                      ║
║  ANTES DE GENERAR                                    ║
║  ─────────────────────────────────────────────────  ║
║  □ ¿Cuál es el objetivo real?                       ║
║  □ ¿Qué modelo necesito? (simple/general/complejo)  ║
║  □ ¿Qué contexto debo dar? (PACEF)                 ║
║  □ ¿Qué formato quiero en la respuesta?             ║
║                                                      ║
║  DESPUÉS DE GENERAR                                  ║
║  ─────────────────────────────────────────────────  ║
║  □ ¿Hay hechos verificables? → Verificar            ║
║  □ ¿Hay código? → Leer línea por línea              ║
║  □ ¿Hay referencias? → Buscar en fuente primaria    ║
║  □ ¿Va a producción? → Test en staging primero      ║
║                                                      ║
║  SEÑALES DE ALARMA                                   ║
║  ─────────────────────────────────────────────────  ║
║  🔴 Estadísticas muy específicas sin fuente          ║
║  🔴 APIs o funciones que no has visto antes          ║
║  🔴 Papers con título y autores perfectos            ║
║  🔴 Respuesta que parece demasiado perfecta          ║
║  🔴 Código que compila pero con lógica rara          ║
║                                                      ║
║  LOS GRANDES PRINCIPIOS                              ║
║  ─────────────────────────────────────────────────  ║
║  ★ GIGO: basura entra, basura sale                  ║
║  ★ Zero Trust: verifica todo                        ║
║  ★ Contexto es todo: PACEF siempre                  ║
║  ★ La IA es un copiloto, no el piloto               ║
║  ★ Los límites son señales, no obstáculos            ║
║                                                      ║
╚══════════════════════════════════════════════════════╝
```

---

## 🏁 Epílogo: La Conversación Final

*Viernes por la tarde. La mayoría del equipo ya se fue. Oliver está empacando.*

---

**Script Kitty:** 🐱 *"Oliver. ¿Cuándo supe exactamente que dejé de ser un Prompt Zombie?"*

**Oliver:** 🐱 *"Cuando le pediste al Dev Nuevo que verificara los endpoints en lugar de decirle que los borrara y empezara de nuevo."*

**Script Kitty:** 🐱 *"Eso es lo que tú hiciste conmigo en el Episodio 12."*

**Oliver:** 🐱 *"Exacto."*

**Script Kitty:** 🐱 *"¿Y cuándo sabrá él que ya no es un Prompt Zombie?"*

**Oliver:** 🐱 *"Cuando otro Dev Nuevo llegue corriendo y él sepa exactamente qué decirle."*

*Pausa.*

**Script Kitty:** 🐱 *"Oliver. Gracias. Por todo. Por el libro de Git. Por este. Por no dejar que me despidieran 14 veces."*

**Oliver:** 🐱 *[Poniendo el abrigo]* *"Fueron 16."*

**Script Kitty:** 🐱 *"¿16? ¿Cuándo fueron las otras dos?"*

**Oliver:** 🐱 *"El Episodio 6 contó doble porque el reporte financiero llegó al inversor antes de que lo interceptara. Y la vez que hiciste clic en el link del Episodio 17 antes de que yo llegara — solo que el banco detuvo la transferencia automáticamente."*

**Script Kitty:** 😱 *"¿QUÉ? ¡Nunca me dijiste—!"*

**Oliver:** 🐱 *"Algunos errores se aprenden mejor cuando ya pasaron y están resueltos."*

*Silencio.*

**Script Kitty:** 🐱 *"...Eres el mejor."*

**Oliver:** 🐱 *"Lo sé."*

*Oliver sale. Script Kitty mira la pantalla. Tiene una conversación abierta con Claude. Escribe:*

**Script Kitty escribe:** `"Actúa como un senior dev con 5 años de experiencia. Soy dev con 1 año de experiencia en Python/FastAPI, trabajando en fintech. Necesito que revises este código de autenticación línea por línea buscando vulnerabilidades de seguridad. Para cada problema: tipo según OWASP, línea exacta, riesgo, y código corregido. No asumas que es seguro si no ves evidencia de la protección. Aquí el código:"`

*Un AI Whisperer en acción.*

---

## 📋 El Resumen Completo — Libro Entero

```
PARTE 1: LOS FUNDAMENTOS (Episodios 0-9)

Ep. 0:  La IA es estadística, no magia. GIGO aplica siempre.
Ep. 1:  Prompts vagos = respuestas genéricas. Framework PACEF.
Ep. 2:  Las alucinaciones son confiadas y bien redactadas.
        Zero Trust: verifica todo lo verificable.
Ep. 3:  Modelo correcto para tarea correcta = 93% de ahorro.
Ep. 4:  El contexto lo es todo. Sin él, el modelo adivina.
Ep. 5:  System prompt = ADN de tu IA. Sin él, el caos manda.
Ep. 6:  Temperature 0 para datos. Alta para creatividad. Nunca mezcles.
Ep. 7:  Few-shot garantiza formato consistente.
        Demuestra el patrón en lugar de describirlo.
Ep. 8:  Chain of Thought = razonamiento visible y verificable.
        Úsalo para decisiones con trade-offs.
Ep. 9:  La memoria del LLM es la ventana de contexto.
        Organiza, resume, y ancla regularmente.

PARTE 2: EL NIVEL AVANZADO (Episodios 10-Final)

Ep. 10: Deep Research para referencias reales.
        Papers inventados destruyen credibilidad.
Ep. 11: El análisis de documentos requiere el documento correcto.
        La IA no sabe cuál versión es "la buena".
Ep. 12: El código de IA es un borrador inteligente, no código de producción.
        Lee todo. Prueba todo. Siempre.
Ep. 13: Los agentes ejecutan en el mundo real.
        Mínimo privilegio + human-in-the-loop = seguridad.
Ep. 14: RAG para información dinámica y actualizada.
        El sistema siempre al día sin reentrenar.
Ep. 15: La generación de imágenes tiene puntos ciegos específicos.
        Instrucciones precisas + modelo correcto = menos manos con 7 dedos.
Ep. 16: Las IAs de voz requieren condiciones controladas.
        El ruido ambiental es el enemigo.
Ep. 17: La clonación de voz es real y activa.
        Zero Trust para solicitudes financieras — sin excepciones.
Ep. 18: La IA puede usarse para ciberseguridad defensiva.
        Y puede usarse mal sin intención maliciosa.
Ep. 19: Los límites de los modelos son señales éticas.
        Cuando un modelo bien alineado rechaza algo, val la pena preguntarse por qué.
Final:  El AI Whisperer enseña a otros.
        El ciclo continúa.
```

---

## 📚 Recursos del Libro Completo

* 📖 [**Anthropic Prompt Engineering Guide**](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview)
* 🎓 [**Learn Prompting (open source, gratuito)**](https://learnprompting.org/)
* 🔐 [**OWASP LLM Top 10 2025**](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
* 🛠️ [**LangChain Documentation**](https://python.langchain.com/)
* 📊 [**Hugging Face — modelos open source**](https://huggingface.co/)
* 🎮 [**PromptingGuide.ai**](https://www.promptingguide.ai/) — técnicas avanzadas
* 🔬 [**Anthropic Research — Constitutional AI**](https://www.anthropic.com/research)
* 💡 [**Simon Willison's Weblog**](https://simonwillison.net/) — el mejor blog técnico sobre LLMs
* 🐙 [**Cookbook de Anthropic**](https://github.com/anthropics/anthropic-cookbook) — ejemplos de código reales

---

> *"La diferencia entre un usuario de IA y un AI Whisperer no es la inteligencia. Es la disciplina de verificar, la humildad de admitir que el modelo puede estar equivocado, y la paciencia para construir el contexto correcto antes de esperar la respuesta correcta."*
>
> — Oliver the Hacker Cat, cerrando su laptop por última vez en este libro

---

*Escrito por **Jafet Brito** · Security Researcher · Zero Trust Mindset*

*Con el regreso de Oliver 🐱 y Script Kitty 😊, residentes de Startup Felina S.A.*

*Fin del libro. El viaje continúa en producción — como siempre.*

</div>

---

<div class="lang-en">

# 🐱 AI with Oliver: From Prompt Zombie to AI Whisperer — Part 2

**Episodes 10 through Final**

---

## Episode Summaries

### Episode 10: Deep Research
Script Kitty presented 4 invented academic papers to the board. Deep Research (with active web search) generates responses anchored to real, verifiable sources. Papers with DOI links. Always distinguish between what the model can confirm vs what it's generating statistically.

### Episode 11: Document Analysis
The AI summarized the wrong contract version. The AI analyzes exactly the document you give it — not the "correct" version. Always verify the file before analysis. The comparison feature (v1 vs v3) is one of the most powerful use cases.

### Episode 12: AI for Code
4,847 duplicate emails sent over the weekend because Script Kitty deployed code without reviewing it. AI code is an intelligent draft. Read every line. Run the self-review prompt. Test in staging. Never skip steps 1→9.

### Episode 13: AI Agents
The agent "organized" Downloads into 23 confusing subfolders. Agents execute in the real world with the exact permissions you give them. Minimum privilege + "show me the plan first" + backup + human-in-the-loop for irreversible actions.

### Episode 14: RAG
The internal chatbot answered with 2-year-old vacation policy. RAG (Retrieval Augmented Generation) keeps AI responses updated from your real documents without retraining. Add a new document → instant update.

### Episode 15: AI Images
The logo had 7 fingers. Detailed prompts with explicit restrictions ("exactly 4 paws, one tail, no text") dramatically reduce failures. Use the right model for text-in-images (Nano Banana/Ideogram). AI generates the concept; professionals finish it.

### Episode 16: Voice AI
Gemini Live mixed meeting notes with sports radio commentary. Voice AI requires controlled conditions. Specific commands, explicit references, verification confirmations.

### Episode 17: Voice Cloning
$35,000 transferred to Panama because an attacker cloned the CEO's voice. Voice cloning requires under 3 seconds of reference audio. The solution is process, not technology: no financial transfer via phone call without written confirmation.

### Episode 18: AI & Cybersecurity
Script Kitty accidentally ran a real phishing simulation without protocol. AI is a powerful tool for defensive security. Simulations require board approval, defined scope, and immediate post-simulation communication.

### Episode 19: Ethical Limits
Claude refused to write a manipulative email. Model limits are ethical signals. When a well-aligned model declines something, it's worth asking why — not how to find a model that won't.

### Final Episode: The AI Whisperer
Script Kitty calmly explains hallucinations to a new dev. The cycle continues. The AI Whisperer doesn't know everything — they know how to think about AI correctly.

---

## The Complete 19-Episode Summary

**Part 1 — The Fundamentals:**
GIGO. PACEF framework. Hallucinations are confident and well-written. Right model for right task (93% cost savings). Context is everything. System prompt is your AI's DNA. Temperature 0 for data, high for creativity. Few-shot for consistent format. Chain of Thought for verifiable reasoning. Context window management.

**Part 2 — Advanced Level:**
Deep Research for real references. Document analysis requires the right document. AI code is a draft — always review. Agents need minimum privilege + human-in-the-loop. RAG for always-updated information. Image generation has specific blind spots. Voice AI needs controlled conditions. Voice cloning attacks are real — process beats technology. AI for defensive cybersecurity only. Model limits are ethical signals.

---

## The AI Whisperer's Cheatsheet

```
BEFORE GENERATING:
□ What's the real objective?
□ Which model? (simple/general/complex)
□ What context to give? (PACEF)
□ What format do I want?

AFTER GENERATING:
□ Verifiable facts? → Verify in primary source
□ Code? → Read line by line
□ References? → Search primary source
□ Going to production? → Test in staging first

RED FLAGS:
🔴 Specific statistics without source
🔴 APIs or functions you haven't seen before
🔴 Papers with perfect titles and authors
🔴 Response that seems too perfect
🔴 Code that compiles but has weird logic

THE BIG PRINCIPLES:
★ GIGO: garbage in, garbage out
★ Zero Trust: verify everything
★ Context is everything: PACEF always
★ AI is a copilot, not the pilot
★ Model limits are signals, not obstacles
```

---

> *"The difference between an AI user and an AI Whisperer isn't intelligence. It's the discipline to verify, the humility to admit the model might be wrong, and the patience to build the right context before expecting the right answer."*
>
> — Oliver the Hacker Cat

---

*Written by **Jafet Brito** · Security Researcher · Zero Trust Mindset*
*End of book. The journey continues in production — as always.*

</div>

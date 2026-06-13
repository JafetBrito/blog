# Capítulo 1: La Voz del Lobo — Vishing y el Principio de Autoridad

> *"El primero de los atributos de un príncipe es saber cuándo la voz que habla con autoridad no proviene de ningún trono legítimo."*
> — Nicolás Maquiavelo, *El Príncipe* (1532), adaptación

---

## Reporte de Incidente CatCorp — Caso #0001

**Clasificación:** Crítico
**Vector de Ataque:** Vishing (Voice Phishing) con suplantación de autoridad
**Activo Comprometido:** Credenciales de acceso al sistema de nómina
**Perpetrador Involuntario:** Script Kittie, Practicante de Desarrollo
**Pérdida Estimada:** Acceso no autorizado a datos de 47 empleados
**Estado:** Contenido — pendiente de análisis forense

- **Vector primario:** Llamada telefónica entrante con Caller ID falsificado
- **Pretexto:** Suplantación del Director de IT durante "auditoría de emergencia"
- **Principio de Cialdini explotado:** Autoridad + Urgencia (Escasez de tiempo)
- **Sesgo cognitivo activado:** Efecto de halo + Obediencia a la autoridad (Milgram)
- **Técnica de presión:** "Account lockout inminente en 15 minutos"
- **Dato de inteligencia usado:** Nombre real del Director IT (obtenido de LinkedIn)
- **Duración del ataque:** 4 minutos, 23 segundos
- **Credenciales entregadas:** Usuario + contraseña + código 2FA verbal

---

La mañana del martes comenzó con la fragancia familiar del café colombiano recorriendo las instalaciones de **CatCorp** — la firma boutique de seguridad corporativa y desarrollo que Jafet Brito y su socio Oliver dirigían desde un edificio discreto en el corazón de la ciudad. La recepción lucía el mismo orden meticuloso que Jafet exigía: pantallas de monitoreo activas, bitácoras de acceso visibles, y una planta de bambú que Oliver había nombrado, con su habitual desdén poético, "el único ser vivo en esta oficina que no ha cometido aún un error de seguridad."

Jafet revisaba el informe de amenazas de la semana cuando el teléfono de su escritorio interrumpió el silencio con la cadencia nerviosa de algo urgente.

Era Pixel Paws, la contadora del equipo, con voz entrecortada.

— Script Kittie le dio sus credenciales del sistema de nómina a alguien que llamó diciendo ser el Director de IT — pronunció cada sílaba como si cada una doliera —. Incluyendo el código de autenticación de dos factores. Verbalmente. Por teléfono.

El silencio que siguió duró exactamente tres segundos.

Desde el sillón en la esquina, Oliver — un gato naranja de tamaño mediocre y reputación exorbitante — levantó la vista de su pantalla, donde compilaba un análisis de threat intelligence con la misma expresión con la que Sócrates debió haber mirado a los sofistas: una mezcla perfecta de asombro intelectual y fatiga moral profunda.

— *"What a piece of work is a man"*, murmuró en un inglés impecable, citando a Hamlet sin apartar los ojos de la pantalla. — Qué pieza de trabajo es el hombre. Capaz de diseñar arquitecturas de cero-conocimiento y, simultáneamente, incapaz de colgar un teléfono.

---

Script Kittie esperaba en la sala de reuniones con la postura de alguien que sabe que ha hecho algo irreversible pero todavía no comprende exactamente *qué*. Era joven — demasiado, para el tipo de confianza que se le había otorgado — y tenía esa cualidad particular de los novatos brillantes: suficiente inteligencia para llegar a las puertas equivocadas, insuficiente experiencia para saber que están equivocadas.

Jafet entró con una tableta y la bitácora de la llamada. Oliver entró con el café.

— Cuéntame qué pasó — dijo Jafet, sentándose frente a él con la ecuanimidad de un médico ante un diagnóstico que ya conoce.

— Me llamaron del número interno del Director Martínez — comenzó Script Kittie —. Al menos, eso mostraba el ID. Dijo que había una auditoría de emergencia del CNBV y que el sistema detectó actividad sospechosa en mi cuenta. Que si no verificaba mis credenciales en los próximos quince minutos, el sistema me iba a bloquear y eso comprometería toda la auditoría. Sonaba exactamente como el Director Martínez. Sabía mi nombre. Sabía en qué proyecto estaba trabajando.

Oliver posó la taza lentamente sobre la mesa.

— ¿Sabía en qué proyecto estabas trabajando — repitió, no como pregunta sino como el momento en que un forense identifica el punto de entrada —. ¿Y eso te pareció tranquilizador?

— Me pareció que era él.

— Naturalmente — dijo Oliver —. Eso es exactamente lo que debía parecerte.

Jafet extendió la tableta sobre la mesa. En la pantalla, una cronología: el número desde el que llamaron correspondía al interno del Director Martínez porque había sido *falsificado* — caller ID spoofing, una técnica tan vieja como las telecomunicaciones y tan efectiva como el día en que fue inventada. El nombre del proyecto lo habían obtenido del perfil de LinkedIn de Script Kittie, actualizado cuatro días antes con entusiasmo profesional. El nombre del Director Martínez: también LinkedIn. El tono de urgencia, el reloj corriendo, la auditoría regulatoria: un guión. Un guión antiguo, ejecutado con precisión quirúrgica.

— Maquiavelo — dijo Jafet, apoyando los codos en la mesa — escribió que el príncipe hábil siempre aparenta poseer las virtudes que más se valoran, aunque no las tenga. El atacante no *era* el Director Martínez. Solo necesitaba *parecer* serlo durante cuatro minutos con veintitrés segundos.

— El tiempo exacto — añadió Oliver — que tarda el cerebro humano en proceder irreflexivamente cuando se combinan tres estímulos simultáneos: una figura de autoridad reconocida, una amenaza a la continuidad laboral, y un reloj que corre. Pavlov no necesitó teléfonos. Nosotros se los dimos.

Script Kittie miraba la cronología con una expresión que Jafet había aprendido a reconocer: la del momento en que el mapa mental de alguien se reconfigura permanentemente.

— ¿Cómo sabían tanto de mí?

— Porque tú se lo dijiste — respondió Oliver, sin crueldad pero sin piedad —. Tu LinkedIn, actualizado hace cuatro días, era un currículum operativo completo para cualquier atacante con paciencia de treinta minutos. Nombre completo, cargo, empresa, proyecto activo, nombre de tu gerente. — Hizo una pausa. — Lo único que faltaba era tu tipo sanguíneo, y apostaría a que eso también estaba en tus redes sociales en algún formulario de donación.

---

La reunión de análisis post-incidente duró noventa minutos. Jafet la condujo con la metodología que había desarrollado a lo largo de años: no buscar culpables sino *arquitecturas de fallo*. El error de Script Kittie no era personal — era sistémico. CatCorp no tenía un protocolo documentado de verificación de identidad para llamadas internas. No tenía una política de código de palabra. No tenía un principio explícito de *Never Verify by Voice Alone*.

— Shakespeare — dijo Jafet mientras proyectaba el diagrama del ataque — escribió en *Otelo* que el engaño más perfecto no necesita mentir sobre los hechos. Solo necesita reordenar la percepción de los hechos. El atacante no mintió sobre el número del Director Martínez: lo falsificó. No mintió sobre el nombre de tu proyecto: lo investigó. La mentira estuvo solo en el pretexto — la auditoría, la urgencia. Y ese pretexto funcionó porque ningún sistema humano o técnico en CatCorp estaba diseñado para cuestionarlo.

Oliver añadió, desde la esquina donde había permanecido observando con la atención concentrada de quien toma notas sin lápiz:

— Sócrates dijo que el primer paso de la sabiduría es reconocer lo que no sabemos. Lo que Script Kittie no sabía — y que ahora sabe — es que la voz humana, en el contexto de una llamada telefónica empresarial, es el vector de ataque menos verificado y más confiado en cualquier organización. Las empresas blindan sus correos, parchean sus sistemas, monitorizan su tráfico. Y luego ponen a recibir llamadas a personas sin ningún protocolo de verificación de identidad en tiempo real. — Tomó un sorbo de café. — Es el equivalente de instalar una caja fuerte con biométrico en la puerta principal y dejar una ventana abierta en el tercer piso.

---

### Políticas de Mitigación — Defensa Corporativa contra Vishing

La defensa efectiva contra vishing no es tecnológica en primera instancia. Es **arquitectónica y conductual**. Los controles técnicos son el segundo perímetro; el primero es el protocolo humano.

#### 1. El Protocolo de Verificación de Identidad por Llamada (PVIC)

Ninguna solicitud sensible — credenciales, accesos, transferencias, cambios de configuración — debe procesarse por voz sin verificación independiente por canal separado.

```
PROTOCOLO PVIC — CatCorp Standard v1.0

ANTE CUALQUIER LLAMADA QUE SOLICITE:
  - Credenciales (usuario, contraseña, PIN, OTP)
  - Accesos a sistemas
  - Transferencias o aprobaciones financieras
  - Cambios de configuración crítica

PASO 1: CUELGA LA LLAMADA
  No importa quién diga ser. No importa la urgencia.
  La urgencia fabricada es una señal de ataque, no una
  razón para saltarse el protocolo.

PASO 2: VERIFICA POR CANAL INDEPENDIENTE
  - Busca el número en el directorio INTERNO de la empresa
    (no en el caller ID — puede estar falsificado)
  - Llama TÚ al número conocido de la persona
  - Usa el canal oficial alternativo (Slack interno, Teams)

PASO 3: CÓDIGO DE PALABRA DE SESIÓN
  Si la persona es quien dice ser, sabrá el código
  de verificación del período (rotado mensualmente,
  distribuido en persona o canal cifrado)

PASO 4: DOCUMENTA EL INCIDENTE
  Toda solicitud sospechosa = reporte inmediato al
  equipo de seguridad, independientemente del resultado.

REGLA DE ORO:
  "La urgencia legítima puede esperar 3 minutos de
   verificación. La urgencia fabricada no puede."
```

#### 2. Política de Mínimo Privilegio Vocal

```
INFORMACIÓN QUE NUNCA SE ENTREGA POR TELÉFONO:

CATEGORÍA ROJA — PROHIBICIÓN ABSOLUTA:
  - Contraseñas (parciales o completas)
  - Códigos OTP / 2FA / MFA
  - PINs de acceso
  - Tokens de sesión
  - Respuestas a preguntas de seguridad

CATEGORÍA AMARILLA — SOLO CON VERIFICACIÓN COMPLETA:
  - Confirmación de identidad de usuarios
  - Estado de tickets o incidentes activos
  - Información de configuración de sistemas

CATEGORÍA VERDE — INFORMACIÓN PÚBLICA:
  - Horarios de atención
  - Datos de contacto del directorio público
  - Estado general de servicios

NOTA: Un representante legítimo de IT NUNCA solicitará
tu contraseña. Si lo solicita, el ataque ya está en curso.
```

#### 3. Hardening de Identidad Digital (OSINT Propio)

El ataque a Script Kittie fue habilitado por OSINT básico en LinkedIn. La defensa incluye auditar la huella digital de todos los empleados con acceso a sistemas sensibles.

```bash
# Búsqueda de OSINT propio — ejecutar trimestralmente
# Evalúa qué información tuya es públicamente accesible

# En Google:
site:linkedin.com "[Nombre Empleado]" "[Empresa]"
site:github.com "[Nombre Empleado]"
"[Nombre Empleado]" "[Empresa]" proyecto OR sistema OR acceso

# Información que NUNCA debe ser pública en RRSS:
# - Nombre de proyectos activos
# - Nombre de herramientas o sistemas internos
# - Nombres de superiores directos con relación de reporte
# - Horarios de trabajo o patrones de presencia
# - Menciones a procesos de auditoría o compliance activos

# Política recomendada para empleados con acceso privilegiado:
# LinkedIn: solo título de cargo genérico, sin proyectos específicos
# No publicar actualizaciones de proyectos en tiempo real
# Revisar conexiones: ¿son personas verificadas o contactos desconocidos?
```

#### 4. Simulaciones de Vishing — Entrenamiento Muscular

El entrenamiento de concienciación basado en diapositivas no construye los reflejos necesarios para resistir un ataque de vishing en tiempo real. La evidencia indica que los programas de simulación de vishing reducen la susceptibilidad hasta en un 80% con tres simulaciones anuales.

```
PROGRAMA DE SIMULACIÓN CATCORP — Frecuencia: trimestral

FASE 1 — Pre-awareness (sin aviso):
  Simular una llamada de vishing real a empleados
  aleatoriamente seleccionados. Registrar:
  - ¿Colgaron para verificar? ✓
  - ¿Entregaron información parcial? ⚠
  - ¿Entregaron credenciales? ✗

FASE 2 — Debriefing inmediato:
  Inmediatamente después: sesión de 20 min explicando
  el vector de ataque, los sesgos activados, y el protocolo
  correcto. Sin nombres públicos, sin humillación.
  El objetivo es aprendizaje, no punición.

FASE 3 — Re-test (30 días después):
  Segunda simulación con variación del pretexto.
  Medir mejora en tasa de detección.

MÉTRICAS DE ÉXITO:
  Target: >85% de empleados cuelgan y verifican
  Red flag: <60% → programa de entrenamiento reforzado
```

#### 5. Controles Técnicos Complementarios

Los controles técnicos no reemplazan el protocolo humano, pero añaden capas de detección:

```yaml
# Política de Caller ID y Autenticación de Llamadas
# Basada en STIR/SHAKEN framework (RFC 8224)

call_authentication:
  stir_shaken_verification: enabled
  # Verifica la autenticidad del Caller ID
  # Los operadores certificados firman las llamadas
  # Las llamadas no certificadas se marcan como "Posible Spoofing"

internal_directory:
  source_of_truth: active_directory_only
  # El directorio de números internos solo puede ser
  # consultado desde la red corporativa
  # Evita que un atacante identifique números internos por OSINT

sensitive_system_access:
  voice_authentication: never_sole_factor
  # La voz nunca puede ser el único factor de autenticación
  # para sistemas con datos sensibles
  required_factors:
    - something_you_know: password
    - something_you_have: hardware_token OR authenticator_app
    - something_you_are: biometric (para acceso físico)

incident_reporting:
  suspicious_call_hotline: enabled
  anonymous_reporting: enabled
  sla_initial_response: 15_minutes
```

---

La reunión terminó cuando el sol de mediodía atravesaba las persianas de la sala de CatCorp con esa luz de confesionario que, pensó Jafet, era apropiada para la ocasión.

Script Kittie salió con la bitácora del incidente en una mano y, en la otra, el *Protocolo PVIC v1.0* impreso. En su rostro había algo que Jafet había aprendido a valorar por encima de la experiencia técnica: la cara específica de quien ha entendido no solo *qué* salió mal, sino *por qué* el cerebro humano está arquitectónicamente predispuesto a que salga mal.

— ¿Estaré mejor preparado la próxima vez? — preguntó desde la puerta.

Oliver, que ya había vuelto a su pantalla, respondió sin levantar la vista:

— Eso depende de si lo que llevas en la mano lo guardas en un cajón o en la cabeza. Los protocolos impresos no protegen a nadie. Los protocolos *internalizados* sí.

Jafet añadió, con una sonrisa que era al mismo tiempo amistad y pedagogía:

— Sócrates dijo que la educación no es llenar un balde sino encender un fuego. Hoy encendimos uno. La próxima llamada determinará si siguió ardiendo.

Script Kittie asintió. Cerró la puerta.

Oliver esperó tres segundos exactos antes de pronunciar, sin apartar los ojos de la pantalla:

— Va a volver a caer.

— Probablemente — concedió Jafet.

— Pero la próxima vez sabrá exactamente cómo lo hizo.

— Eso es todo lo que podemos pedir.

---

### Referencias de CatCorp — Capítulo 1

**Fuentes Técnicas y Estadísticas:**
- Verizon Data Breach Investigations Report (DBIR) 2025 — Pretexting como vector inicial en el 6% de brechas; 19% de brechas con componente de vishing/smishing
- CrowdStrike Global Threat Report 2025 — Incremento del 442% en ataques de vishing de H1 a H2 2024
- Keepnet Labs Voice Phishing Response Report 2024 — 6.5% de usuarios entregaron información sensible en llamadas simuladas
- Right Hand Cybersecurity Report 2025 — Deepfake vishing: incremento del 1,600% en Q1 2025 vs fin de 2024
- NIST Special Publication 800-61 Rev. 3 (2025) — Recomendaciones para gestión de incidentes y respuesta
- STIR/SHAKEN Framework — RFC 8224 / RFC 8588 — Autenticación de llamadas y verificación de Caller ID
- Hoxhunt Vishing Simulation Report 2026 — Reducción de susceptibilidad con programas de simulación activa
- MITRE ATT&CK Framework — Tactic: Initial Access / Technique: Phishing: Spearphishing via Service (T1566.003)

**Sesgos Cognitivos Documentados:**
- Principio de Autoridad — Robert B. Cialdini, *Influence: The Psychology of Persuasion* (1984, rev. 2021)
- Efecto de Halo — Edward Thorndike, *A Constant Error in Psychological Ratings* (1920)
- Experimentos de Obediencia a la Autoridad — Stanley Milgram, *Obedience to Authority* (1974)
- Sesgo de Urgencia / Escasez temporal — Cialdini, principio de Scarcity aplicado a tiempo limitado

**Obras Literarias y Filosóficas Referenciadas:**
- Nicolás Maquiavelo — *El Príncipe* (1532): apariencia de virtud como herramienta de poder
- William Shakespeare — *Hamlet*, Acto II, Escena 2: "What a piece of work is a man"
- William Shakespeare — *Otelo* (1603): manipulación de la percepción sin falsificar los hechos
- Sócrates / Platón — *Meno* y *República*: el conocimiento como iluminación, no acumulación
- Platón — *Apología de Sócrates*: "Solo sé que no sé nada" como fundamento de la vigilancia epistémica

---

<div class="lang-en">

# Chapter 1: The Wolf's Voice — Vishing and the Authority Principle

> *"The first attribute of a prince is to know when the voice that speaks with authority comes from no legitimate throne."*
> — Niccolò Machiavelli, *The Prince* (1532), adaptation

---

## CatCorp Incident Report — Case #0001

**Classification:** Critical
**Attack Vector:** Vishing (Voice Phishing) with authority impersonation
**Compromised Asset:** Payroll system access credentials
**Involuntary Perpetrator:** Script Kittie, Development Intern
**Estimated Loss:** Unauthorized access to data of 47 employees
**Status:** Contained — pending forensic analysis

- **Primary vector:** Incoming call with spoofed Caller ID
- **Pretext:** Impersonation of IT Director during "emergency audit"
- **Cialdini principle exploited:** Authority + Urgency (Time Scarcity)
- **Cognitive bias activated:** Halo Effect + Obedience to Authority (Milgram)
- **Pressure technique:** "Account lockout imminent in 15 minutes"
- **Intelligence used:** Real IT Director name (obtained from LinkedIn)
- **Attack duration:** 4 minutes, 23 seconds
- **Credentials surrendered:** Username + password + 2FA code (verbal)

---

Tuesday morning arrived carrying the familiar fragrance of Colombian coffee drifting through the corridors of **CatCorp** — the boutique security and software firm that Jafet Brito and his partner Oliver ran from a discreet building in the heart of the city. The reception area carried the same meticulous order Jafet demanded: monitoring screens active, access logs visible, and a bamboo plant Oliver had named, with his habitual poetic disdain, "the only living entity in this office that hasn't committed a security error yet."

Jafet was reviewing the week's threat intelligence report when his desk phone interrupted the silence with the nervous cadence of something urgent.

It was Pixel Paws, the team's accountant, her voice fractured.

— Script Kittie gave his payroll system credentials to someone who called claiming to be the IT Director — she pronounced each syllable as if each one hurt —. Including the two-factor authentication code. Verbally. Over the phone.

The silence that followed lasted exactly three seconds.

From the corner armchair, Oliver — an orange cat of modest size and exorbitant reputation — looked up from his screen, where he was compiling a threat intelligence analysis with the same expression Socrates must have worn while observing the sophists: a perfect mixture of intellectual astonishment and profound moral fatigue.

— *"What a piece of work is a man,"* he murmured in impeccable English, quoting Hamlet without taking his eyes off the screen. — Capable of designing zero-knowledge architectures and, simultaneously, incapable of hanging up a telephone.

---

Script Kittie waited in the conference room with the posture of someone who knows they have done something irreversible but doesn't yet fully understand *what*. He was young — too young, for the level of trust he'd been granted — and possessed that particular quality of brilliant novices: enough intelligence to arrive at the wrong doors, insufficient experience to know they are wrong.

Jafet entered with a tablet and the call log. Oliver entered with coffee.

— Tell me what happened — said Jafet, sitting across from him with the equanimity of a physician before a diagnosis he already knows.

— They called from Director Martínez's internal number — Script Kittie began —. At least, that's what the Caller ID showed. He said there was an emergency CNBV audit and that the system had detected suspicious activity in my account. That if I didn't verify my credentials in the next fifteen minutes, the system would lock me out and compromise the entire audit. He sounded exactly like Director Martínez. He knew my name. He knew what project I was working on.

Oliver set his cup down slowly on the table.

— He knew which project you were working on — he repeated, not as a question but as the moment a forensic examiner identifies the entry point —. And that struck you as reassuring?

— It struck me as proof it was him.

— Naturally — said Oliver —. That is precisely what it was designed to make you feel.

Jafet extended the tablet across the table. On the screen, a timeline: the number they had called from matched Director Martínez's internal extension because it had been *spoofed* — caller ID spoofing, a technique as old as telecommunications and as effective as the day it was invented. The project name had been harvested from Script Kittie's LinkedIn profile, updated four days earlier with professional enthusiasm. Director Martínez's name: also LinkedIn. The urgency, the running clock, the regulatory audit: a script. An old script, executed with surgical precision.

— Machiavelli — said Jafet, resting his elbows on the table — wrote that the skillful prince always appears to possess the virtues most valued, even if he doesn't have them. The attacker was not *Director Martínez*. He only needed to *seem* like him for four minutes and twenty-three seconds.

— The exact time — added Oliver — it takes the human brain to act without reflection when three simultaneous stimuli are combined: a recognized authority figure, a threat to professional continuity, and a running clock. Pavlov didn't need telephones. We gave them to him.

Script Kittie looked at the timeline with an expression Jafet had learned to recognize: the moment when someone's mental map permanently reconfigures.

— How did they know so much about me?

— Because you told them — replied Oliver, without cruelty but without mercy —. Your LinkedIn, updated four days ago, was a complete operational curriculum for any attacker with thirty minutes of patience. Full name, role, company, active project, manager's name. — He paused. — The only thing missing was your blood type, and I'd wager that was somewhere in your social media on some donation form.

---

The post-incident analysis meeting lasted ninety minutes. Jafet conducted it with the methodology he had developed over years: not seeking culprits but *failure architectures*. Script Kittie's error was not personal — it was systemic. CatCorp had no documented identity verification protocol for internal calls. No codeword policy. No explicit *Never Verify by Voice Alone* principle.

— Shakespeare — said Jafet while projecting the attack diagram — wrote in *Othello* that the most perfect deception doesn't need to lie about the facts. It only needs to reorder the perception of facts. The attacker didn't lie about Director Martínez's number: he spoofed it. He didn't lie about your project name: he researched it. The only lie was in the pretext — the audit, the urgency. And that pretext worked because no human or technical system at CatCorp was designed to question it.

Oliver added, from the corner where he had remained watching with the concentrated attention of someone taking notes without a pencil:

— Socrates said that the first step of wisdom is recognizing what we do not know. What Script Kittie did not know — and now does — is that the human voice, in the context of a business phone call, is the least verified and most trusted attack vector in any organization. Companies harden their emails, patch their systems, monitor their traffic. And then they put people on the phones with no real-time identity verification protocol. — He took a sip of coffee. — It's the equivalent of installing a biometric safe at the front door and leaving a third-floor window open.

---

### Mitigation Policies — Corporate Defense Against Vishing

Effective defense against vishing is not primarily technological. It is **architectural and behavioral**. Technical controls are the second perimeter; the first is human protocol.

#### 1. The Call Identity Verification Protocol (CIVP)

No sensitive request — credentials, access, transfers, configuration changes — should be processed by voice without independent verification through a separate channel.

```
CIVP PROTOCOL — CatCorp Standard v1.0

FOR ANY CALL REQUESTING:
  - Credentials (username, password, PIN, OTP)
  - System access
  - Financial transfers or approvals
  - Critical configuration changes

STEP 1: HANG UP THE CALL
  Regardless of who they claim to be. Regardless of urgency.
  Fabricated urgency is an attack signal, not a reason
  to bypass the protocol.

STEP 2: VERIFY VIA INDEPENDENT CHANNEL
  - Look up the number in the INTERNAL company directory
    (not Caller ID — it may be spoofed)
  - You call the person at their known number
  - Use the official alternate channel (internal Slack, Teams)

STEP 3: SESSION CODEWORD
  If the person is who they claim to be, they will know
  the period verification code (rotated monthly,
  distributed in person or via encrypted channel)

STEP 4: DOCUMENT THE INCIDENT
  All suspicious requests = immediate security team report,
  regardless of outcome.

GOLDEN RULE:
  "Legitimate urgency can wait 3 minutes of verification.
   Fabricated urgency cannot."
```

#### 2. Vocal Minimum Privilege Policy

```
INFORMATION NEVER SHARED BY PHONE:

RED CATEGORY — ABSOLUTE PROHIBITION:
  - Passwords (partial or complete)
  - OTP / 2FA / MFA codes
  - Access PINs
  - Session tokens
  - Security question answers

YELLOW CATEGORY — ONLY WITH FULL VERIFICATION:
  - User identity confirmation
  - Active ticket or incident status
  - System configuration information

GREEN CATEGORY — PUBLIC INFORMATION:
  - Business hours
  - Public directory contact data
  - General service status

NOTE: A legitimate IT representative will NEVER ask for
your password. If they do, the attack is already underway.
```

#### 3. Digital Identity Hardening (Own OSINT)

The attack on Script Kittie was enabled by basic LinkedIn OSINT. Defense includes auditing the digital footprint of all employees with access to sensitive systems.

```bash
# Own OSINT search — run quarterly
# Assess what information about you is publicly accessible

# On Google:
site:linkedin.com "[Employee Name]" "[Company]"
site:github.com "[Employee Name]"
"[Employee Name]" "[Company]" project OR system OR access

# Information that should NEVER be public on social media:
# - Names of active projects
# - Names of internal tools or systems
# - Direct manager names with reporting relationships
# - Work schedules or presence patterns
# - Mentions of active audit or compliance processes

# Recommended policy for employees with privileged access:
# LinkedIn: generic job title only, no specific projects
# Don't post real-time project updates
# Review connections: verified people or unknown contacts?
```

#### 4. Vishing Simulations — Muscle Memory Training

Slide-based security awareness training does not build the reflexes needed to resist a real-time vishing attack. Evidence indicates that vishing simulation programs reduce susceptibility by up to 80% with three annual simulations.

```
CATCORP SIMULATION PROGRAM — Frequency: quarterly

PHASE 1 — Pre-awareness (unannounced):
  Simulate a real vishing call to randomly selected employees.
  Record:
  - Did they hang up to verify? ✓
  - Did they deliver partial information? ⚠
  - Did they surrender credentials? ✗

PHASE 2 — Immediate debriefing:
  Immediately after: 20-min session explaining the attack
  vector, the biases activated, and the correct protocol.
  No public naming, no humiliation.
  Objective is learning, not punishment.

PHASE 3 — Re-test (30 days later):
  Second simulation with pretext variation.
  Measure improvement in detection rate.

SUCCESS METRICS:
  Target: >85% of employees hang up and verify
  Red flag: <60% → reinforced training program
```

#### 5. Complementary Technical Controls

Technical controls don't replace human protocol, but add detection layers:

```yaml
# Caller ID Authentication and Call Verification Policy
# Based on STIR/SHAKEN framework (RFC 8224)

call_authentication:
  stir_shaken_verification: enabled
  # Verifies Caller ID authenticity
  # Certified carriers sign calls
  # Uncertified calls flagged as "Possible Spoofing"

internal_directory:
  source_of_truth: active_directory_only
  # Internal number directory only accessible
  # from corporate network
  # Prevents attacker from identifying internal numbers via OSINT

sensitive_system_access:
  voice_authentication: never_sole_factor
  # Voice can never be the sole authentication factor
  # for systems containing sensitive data
  required_factors:
    - something_you_know: password
    - something_you_have: hardware_token OR authenticator_app
    - something_you_are: biometric (for physical access)

incident_reporting:
  suspicious_call_hotline: enabled
  anonymous_reporting: enabled
  sla_initial_response: 15_minutes
```

---

The meeting ended when the midday sun cut through the CatCorp conference room blinds with that confessional light that, thought Jafet, was appropriate for the occasion.

Script Kittie left with the incident log in one hand and, in the other, the printed *CIVP Protocol v1.0*. His face carried something Jafet had learned to value above technical experience: the specific look of someone who has understood not only *what* went wrong, but *why* the human brain is architecturally predisposed to let it go wrong.

— Will I be better prepared next time? — he asked from the doorway.

Oliver, already back at his screen, answered without looking up:

— That depends on whether what you're holding ends up in a drawer or in your head. Printed protocols protect no one. *Internalized* protocols do.

Jafet added, with a smile that was simultaneously friendship and pedagogy:

— Socrates said that education is not the filling of a bucket but the lighting of a fire. Today we lit one. The next call will determine whether it kept burning.

Script Kittie nodded. He closed the door.

Oliver waited exactly three seconds before pronouncing, without taking his eyes off the screen:

— He's going to fall for it again.

— Probably — Jafet conceded.

— But next time he'll know exactly how he did it.

— That's all we can ask.

---

### CatCorp References — Chapter 1

**Technical Sources & Statistics:**
- Verizon Data Breach Investigations Report (DBIR) 2025 — Pretexting as initial vector in 6% of breaches; 19% of breaches involving vishing/smishing component
- CrowdStrike Global Threat Report 2025 — 442% surge in vishing attacks from H1 to H2 2024
- Keepnet Labs Voice Phishing Response Report 2024 — 6.5% of users surrendered sensitive information in simulated vishing calls
- Right Hand Cybersecurity Report 2025 — Deepfake vishing: 1,600% surge in Q1 2025 vs end of 2024
- NIST Special Publication 800-61 Rev. 3 (2025) — Incident management and response recommendations
- STIR/SHAKEN Framework — RFC 8224 / RFC 8588 — Call authentication and Caller ID verification
- Hoxhunt Vishing Simulation Report 2026 — Susceptibility reduction with active simulation programs
- MITRE ATT&CK Framework — Tactic: Initial Access / Technique: Phishing: Spearphishing via Service (T1566.003)

**Documented Cognitive Biases:**
- Authority Principle — Robert B. Cialdini, *Influence: The Psychology of Persuasion* (1984, rev. 2021)
- Halo Effect — Edward Thorndike, *A Constant Error in Psychological Ratings* (1920)
- Obedience to Authority Experiments — Stanley Milgram, *Obedience to Authority* (1974)
- Urgency Bias / Temporal Scarcity — Cialdini, Scarcity principle applied to time pressure

**Literary & Philosophical Works Referenced:**
- Niccolò Machiavelli — *The Prince* (1532): appearance of virtue as an instrument of power
- William Shakespeare — *Hamlet*, Act II, Scene 2: "What a piece of work is a man"
- William Shakespeare — *Othello* (1603): perception manipulation without falsifying facts
- Socrates / Plato — *Meno* and *Republic*: knowledge as illumination, not accumulation
- Plato — *Apology of Socrates*: "I know that I know nothing" as foundation of epistemic vigilance

</div>

---

**¿Deseas que avancemos al siguiente capítulo o prefieres ajustar algo en este incidente de CatCorp?**

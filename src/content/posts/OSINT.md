---
title: "🕵️ Arsenal OSINT 2026: Herramientas, Dorks y Técnicas para Investigadores"
title_en: "🕵️ OSINT Arsenal 2026: Tools, Dorks & Techniques for Investigators"
description: "Guía intermedia de herramientas OSINT online organizadas por categoría: dominios e infraestructura, personas y redes sociales, imágenes y geolocalización. Incluye Google Dorks actualizados para 2026 y una metodología de investigación paso a paso."
description_en: "Intermediate guide to online OSINT tools organized by category: domains and infrastructure, people and social media, images and geolocation. Includes updated Google Dorks for 2026 and a step-by-step investigation methodology."
pubDate: 2026-06-11
tags: ["OSINT", "Recon", "GoogleDorks", "Ciberseguridad", "Pentesting", "ZeroTrust", "Infraestructura", "SOCMINT"]
author: "Jafet Brito"
heroImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&q=80"
draft: false
---
 
<div class="lang-es">
## 🕵️ Arsenal OSINT 2026: Herramientas, Dorks y Técnicas para Investigadores
 
**Por Jafet Brito** · Security Researcher · *Publicado el 11 de junio de 2026*
 
---
 
> ⚠️ **Aviso legal y ético:** Toda la información en este artículo es para uso **exclusivamente defensivo, educativo y de investigación autorizada**. El uso de estas herramientas sobre sistemas o personas sin autorización explícita puede constituir un delito en tu jurisdicción. Bajo una filosofía **Zero Trust**: verifica siempre el alcance legal antes de ejecutar cualquier técnica de reconocimiento. **Never trust, always verify — starting with your own permissions.**
 
---
 
### 🗺️ ¿Qué encontrarás en esta guía?
 
* 🌐 **Herramientas OSINT de dominios, IPs e infraestructura** — con casos de uso y tips
* 👤 **Herramientas OSINT de personas y redes sociales** — SOCMINT aplicado
* 📸 **Herramientas de imágenes y geolocalización** — Visual OSINT
* 💡 **Metodología de investigación** — cómo encadenar herramientas de forma efectiva
* 🔎 **Google Dorks 2026** — operadores actualizados con ejemplos reales
* 🛡️ **Contramedidas** — cómo proteger tu huella digital
---
 
## 🌐 Parte 1: Dominios, IPs e Infraestructura
 
> 💡 **Principio clave:** La infraestructura digital de cualquier organización es su columna vertebral pública. Cada dominio, subdominio, certificado TLS, y banner de servicio es un dato OSINT legítimo indexado o accesible sin autenticación. El recon de infraestructura mapea la **superficie de ataque externa** antes de cualquier test.
 
---
 
### 🔵 Shodan — El Motor de Búsqueda del Internet de las Cosas
 
**🔗 [https://www.shodan.io](https://www.shodan.io)**
 
Shodan indexa **banners de servicios** de dispositivos conectados a internet: routers, cámaras IP, servidores industriales (ICS/OT), bases de datos expuestas, paneles de administración sin autenticación, y más. No indexa páginas web — indexa **lo que escuchan los puertos**.
 
* 📌 **Caso de uso:** Identificar servidores de una organización con versiones vulnerables de software, puertos abiertos innecesariamente, o servicios expuestos sin credenciales.
* 💡 **Tip:** Usa los operadores `org:`, `country:`, `port:`, `product:` y `vuln:` para queries quirúrgicas. Por ejemplo: `org:"Nombre Empresa" port:3389` revela escritorios remotos expuestos.
* ⚠️ **Límite:** La cuenta gratuita tiene queries limitadas. El plan pagado desbloquea exportaciones y monitoreo.
---
 
### 🟣 Censys — Infraestructura y Certificados TLS
 
**🔗 [https://search.censys.io](https://search.censys.io)**
 
Similar a Shodan pero con **mayor énfasis en certificados TLS y escaneo continuo de toda la red IPv4/IPv6**. Censys es especialmente poderoso para descubrir "shadow IT" — servidores desplegados por empleados que no están bajo gestión oficial de TI.
 
* 📌 **Caso de uso:** Descubrir subdominios y hosts de una organización a través de sus certificados TLS (que frecuentemente revelan nombres internos).
* 💡 **Tip:** Busca por `parsed.subject.organization: "Empresa"` para encontrar todos los certificados emitidos a nombre de una organización. Los certificados wildcard revelan la estructura de subdominios.
* ⚠️ **Límite:** El tier gratuito tiene límites de consultas diarias. Para investigaciones amplias, considera el plan researcher.
---
 
### 🟢 DNSDumpster — Mapeo de DNS Pasivo
 
**🔗 [https://dnsdumpster.com](https://dnsdumpster.com)**
 
Herramienta web gratuita que realiza **reconocimiento DNS pasivo** sin enviar queries directas al objetivo. Genera un mapa visual de subdominios, registros MX, TXT, y relaciones de infraestructura.
 
* 📌 **Caso de uso:** Obtener una vista panorámica de los subdominios de un dominio objetivo, identificar proveedores de email, servicios de terceros y posibles puntos de entrada.
* 💡 **Tip:** Combínalo con Shodan: los subdominios descubiertos en DNSDumpster pueden buscarse en Shodan para ver qué servicios tienen expuestos.
* ✅ **Ventaja:** Completamente gratuito, sin registro, sin instalar nada.
---
 
### 🟡 VirusTotal — Inteligencia de Dominios, IPs y Archivos
 
**🔗 [https://www.virustotal.com](https://www.virustotal.com)**
 
Aunque conocido por análisis de malware, VirusTotal es una **mina de oro OSINT** para infraestructura. Su sección de graph y relaciones permite ver con qué IPs, dominios y archivos se ha asociado un indicador.
 
* 📌 **Caso de uso:** Investigar si un dominio o IP tiene historial malicioso, con qué otras infraestructuras se ha comunicado, y qué archivos han sido enviados desde esa IP.
* 💡 **Tip:** Usa la pestaña "Relations" y "Graph" en cualquier dominio o IP para descubrir infraestructura relacionada que no aparece en DNS.
* ✅ **Ventaja:** Gratuito para uso básico. La API tiene tier libre con 500 requests/día.
---
 
### 🔴 SecurityTrails — Historial DNS e Infraestructura
 
**🔗 [https://securitytrails.com](https://securitytrails.com)**
 
Proporciona **historial completo de registros DNS** de cualquier dominio: qué IPs ha tenido, con qué servidores de nombres estuvo configurado, cambios de MX, y más. Invaluable para rastrear movimientos de infraestructura en el tiempo.
 
* 📌 **Caso de uso:** Un dominio que cambió de IP puede revelar el hosting anterior (y sus datos de WHOIS históricos). Útil para atribuir infraestructura maliciosa.
* 💡 **Tip:** Busca el historial de una IP para ver todos los dominios que han apuntado a ella — posible infraestructura compartida de un actor de amenaza.
* ⚠️ **Límite:** Tier gratuito con 50 queries/mes. Para investigaciones activas, el plan básico pagado es necesario.
---
 
### ⚫ crt.sh — Transparencia de Certificados
 
**🔗 [https://crt.sh](https://crt.sh)**
 
Registro público de **todos los certificados TLS emitidos** para un dominio. Los certificados son públicos por ley (Certificate Transparency), lo que los convierte en una fuente OSINT insospechada.
 
* 📌 **Caso de uso:** Descubrir subdominios que no aparecen en DNS público. Muchas organizaciones emiten certificados para subdominios de staging, dev, interno o VPN que no están en DNS público pero sí en CT logs.
* 💡 **Tip:** Query: `%.ejemplo.com` en crt.sh para obtener todos los subdominios con certificados emitidos. Esto frecuentemente revela `vpn.ejemplo.com`, `dev.ejemplo.com`, `staging.ejemplo.com`.
* ✅ **Ventaja:** Completamente gratuito, sin registro.
---
 
### 🌐 Wayback Machine / Archive.org — El Internet del Pasado
 
**🔗 [https://web.archive.org](https://web.archive.org)**
 
El archivo de páginas web más grande del mundo. Permite ver **versiones históricas de cualquier sitio web**, incluyendo páginas eliminadas, configuraciones antiguas, y código fuente expuesto en el pasado.
 
* 📌 **Caso de uso:** Encontrar páginas de login, documentos o datos que fueron públicos brevemente y luego eliminados. También útil para comparar cambios en políticas de privacidad o configuraciones.
* 💡 **Tip:** Combina con dorks de Google usando `cache:` para acceder a versiones en caché de páginas recientemente modificadas.
* ✅ **Ventaja:** Completamente gratuito.
---
 
### 🔍 Shodan Favicon Hash — Reconocimiento por Ícono
 
Una técnica menos conocida pero muy efectiva: los favicons (iconos de pestañas del navegador) tienen un **hash calculable** que Shodan indexa. Esto permite encontrar **todas las instancias de una aplicación específica** en internet.
 
* 📌 **Caso de uso:** Si sabes el favicon de un panel de administración específico (pfSense, Grafana, Kibana), puedes buscar en Shodan `http.favicon.hash:HASH` para encontrar todas las instancias expuestas globalmente.
* 💡 **Herramienta de apoyo:** [**Favicon Hash Calculator**](https://favicon-hash.kmsec.uk/) — calcula el hash de cualquier favicon para uso en Shodan.
---
 
## 👤 Parte 2: Personas y Redes Sociales (SOCMINT)
 
> 💡 **Principio clave:** Las personas dejan rastros digitales involuntarios en múltiples plataformas. El SOCMINT (Social Media Intelligence) no se trata de espiar — se trata de analizar información **voluntariamente pública** para construir un perfil de actividad digital. La ética aquí es crítica: la legalidad de recopilar datos públicos varía por jurisdicción.
 
---
 
### 🔵 Sherlock — Búsqueda de Username Multiplataforma
 
**🔗 [https://github.com/sherlock-project/sherlock](https://github.com/sherlock-project/sherlock)** *(open source, CLI)*
**🔗 [https://sherlockosint.com](https://sherlockosint.com)** *(versión web)*
 
Sherlock busca un username en **más de 400 plataformas simultáneamente**, identificando en cuáles existe una cuenta con ese nombre. Es la herramienta estándar de reconocimiento de identidad digital por username.
 
* 📌 **Caso de uso:** Un actor de amenaza usa el mismo alias en múltiples foros. Con Sherlock puedes pivotar desde un username de un foro oscuro hacia su cuenta de GitHub, Twitter, o Reddit pública.
* 💡 **Tip:** Ejecuta también variaciones del username (con números, guiones bajos, puntos). Las personas frecuentemente usan `username`, `username_`, `username01`.
* ✅ **Ventaja:** Open source, gratuito, activamente mantenido.
---
 
### 🟣 Maigret — El Hermano Mayor de Sherlock
 
**🔗 [https://github.com/soxoj/maigret](https://github.com/soxoj/maigret)** *(open source, CLI)*
 
Fork avanzado de Sherlock que busca usernames en **más de 3,000 sitios** y genera reportes detallados con información adicional extraída de los perfiles encontrados (bio, foto, enlaces, IDs).
 
* 📌 **Caso de uso:** Cuando Sherlock da un resultado inicial, Maigret profundiza en las cuentas encontradas para extraer más pivotes de información.
* 💡 **Tip:** El flag `--report` genera un informe HTML visual con todos los perfiles encontrados y la información extraída. Ideal para documentación de investigación.
---
 
### 🟢 SpiderFoot — Reconocimiento OSINT Automatizado
 
**🔗 [https://www.spiderfoot.net](https://www.spiderfoot.net)**
**🔗 [https://github.com/smicallef/spiderfoot](https://github.com/smicallef/spiderfoot)** *(open source)*
 
SpiderFoot es un motor de reconocimiento OSINT que acepta un **seed** (dominio, IP, email, nombre de persona) y automáticamente consulta **más de 200 fuentes de datos públicas** para construir un perfil completo de inteligencia.
 
* 📌 **Caso de uso:** Investigación de un actor de amenaza. Das su email como seed y SpiderFoot busca automáticamente brechas asociadas, dominios registrados con ese email, cuentas sociales, IPs, y más.
* 💡 **Tip:** La versión HX (hosted) tiene una interfaz web elegante. La versión open source requiere setup pero da control total sobre los módulos.
* ⚠️ **Límite:** Algunas integraciones requieren API keys de servicios externos (Shodan, Hunter, etc.).
---
 
### 🟡 Hunter.io — Búsqueda de Emails Corporativos
 
**🔗 [https://hunter.io](https://hunter.io)**
 
Permite encontrar **todos los emails asociados a un dominio corporativo** y verifica su validez. Muy usado en investigaciones corporativas y en pentesting de phishing para construir listas de objetivos.
 
* 📌 **Caso de uso:** Identificar el patrón de emails de una empresa (`nombre.apellido@empresa.com`) y encontrar emails de empleados específicos de LinkedIn.
* 💡 **Tip:** Combina Hunter con LinkedIn para construir una lista completa de empleados + sus emails probables. Útil para evaluaciones de conciencia de phishing.
* ✅ **Ventaja:** Plan gratuito con 25 búsquedas/mes.
---
 
### 🔴 Maltego — Análisis Visual de Relaciones
 
**🔗 [https://www.maltego.com](https://www.maltego.com)**
 
Plataforma de análisis OSINT que crea **grafos visuales de relaciones** entre personas, organizaciones, dominios, IPs, y otras entidades. Utiliza "transforms" (consultas automatizadas) para expandir nodos del grafo.
 
* 📌 **Caso de uso:** Mapear la red de relaciones de un grupo de actores de amenaza: quién se comunica con quién, qué infraestructura comparten, qué organización está detrás.
* 💡 **Tip:** La versión Community es gratuita con transforms limitados. Para OSINT serio, considera la versión Pro con acceso a más de 50 data sources integradas.
---
 
### ⚫ Social-Searcher — Monitoreo de Redes Sociales en Tiempo Real
 
**🔗 [https://www.social-searcher.com](https://www.social-searcher.com)**
 
Motor de búsqueda de **publicaciones públicas en redes sociales** en tiempo real. Permite rastrear menciones de nombres, alias, organizaciones o términos clave en múltiples plataformas simultáneamente.
 
* 📌 **Caso de uso:** Monitorear en tiempo real si un nombre de dominio, una marca o una persona está siendo mencionada en redes sociales — útil para respuesta a incidentes y threat intelligence.
* 💡 **Tip:** Configura alertas automáticas para términos específicos. Ideal para detectar campañas de phishing emergentes que mencionan tu marca.
---
 
### 🌐 OSINT Framework — El Mapa de Todo
 
**🔗 [https://osintframework.com](https://osintframework.com)**
 
No es una herramienta de búsqueda — es un **directorio interactivo visual** de cientos de herramientas OSINT categorizadas por tipo de dato: username, email, IP, imagen, geolocalización, dark web, y más. El punto de partida obligatorio para cualquier investigador.
 
* 📌 **Caso de uso:** Cuando estás en un dead-end en una investigación, el OSINT Framework te sugiere el siguiente paso lógico. Es el "Google Maps" del mundo OSINT.
* 💡 **Tip:** Úsalo como checklist al inicio de cada investigación para asegurarte de no omitir categorías de datos relevantes.
---
 
## 📸 Parte 3: Imágenes y Geolocalización (Visual OSINT)
 
> 💡 **Principio clave:** Una imagen vale más que mil palabras — y en OSINT, también vale más que mil queries. Las imágenes contienen tres capas de inteligencia: **metadatos EXIF** (coordenadas GPS, cámara, fecha), **contenido visual** (landmarks, texto, uniformes, vehículos), y **huella digital** (en qué otras plataformas aparece esa imagen).
 
---
 
### 🔵 Google Lens — Geolocalización Visual de Referencia
 
**🔗 [https://lens.google.com](https://lens.google.com)**
 
La herramienta de búsqueda visual de Google. En 2026, sigue siendo el **estándar de oro para inteligencia ambiental**: identificar landmarks, edificios, paisajes y objetos en imágenes.
 
* 📌 **Caso de uso:** Una imagen de protesta o incidente muestra un edificio de fondo. Google Lens puede identificar la ciudad, el barrio, o incluso el nombre del edificio.
* 💡 **Tip:** Si el resultado es ambiguo, toma un recorte del elemento más distintivo de la imagen (un letrero, un edificio particular) y búscalo por separado. La especificidad mejora los resultados.
---
 
### 🟣 PimEyes — Búsqueda de Rostros en la Web
 
**🔗 [https://pimeyes.com](https://pimeyes.com)**
 
Motor de búsqueda de rostros que indexa millones de imágenes de la web pública y encuentra **dónde más aparece una cara**. Es una de las herramientas más poderosas y controversiales del Visual OSINT.
 
* 📌 **Caso de uso:** Dada una foto de perfil de un actor de amenaza en un foro, PimEyes puede encontrar otras imágenes de esa persona en otras plataformas, ayudando a construir un perfil de identidad real.
* 💡 **Tip:** Combina PimEyes con Sherlock: si PimEyes encuentra un perfil de Instagram, usa el username encontrado en Sherlock para continuar el pivot.
* ⚠️ **Consideración ética y legal:** En muchas jurisdicciones, los datos biométricos (incluyendo el reconocimiento facial) están protegidos por regulaciones como el GDPR. Usa esta herramienta únicamente en investigaciones autorizadas.
---
 
### 🟢 FaceCheck.ID — Alternativa a PimEyes
 
**🔗 [https://facecheck.id](https://facecheck.id)**
 
Alternativa gratuita a PimEyes para búsqueda de rostros en internet. Menos comprensiva pero accesible sin suscripción, útil para verificaciones iniciales.
 
* 📌 **Caso de uso:** Primera verificación rápida antes de invertir en una búsqueda más profunda con PimEyes.
* 💡 **Tip:** Úsalo como screening inicial — si FaceCheck ya encuentra resultados relevantes, ahorraste el costo de PimEyes.
---
 
### 🟡 ExifTool — Extracción de Metadatos
 
**🔗 [https://exiftool.org](https://exiftool.org)** *(open source, CLI)*
**🔗 [https://exif.tools](https://exif.tools)** *(versión web)*
 
ExifTool extrae todos los **metadatos EXIF** de imágenes y otros archivos: coordenadas GPS, fecha y hora exactas, modelo de cámara/teléfono, software usado, y más. Muchas fotos comparten más de lo que sus autores imaginan.
 
* 📌 **Caso de uso:** Una foto publicada en redes sociales sin editar puede contener coordenadas GPS exactas del lugar donde fue tomada, revelar el modelo de teléfono, o confirmar una marca de tiempo.
* 💡 **Tip:** Las plataformas como Instagram, Facebook y Twitter **eliminan metadatos EXIF** al subir fotos. Sin embargo, imágenes compartidas directamente por email, Telegram, o servicios de almacenamiento sin procesamiento a menudo los conservan.
* ✅ **Ventaja:** Open source, completamente gratuito.
---
 
### 🔴 GeoSpy — Geolocalización con IA
 
**🔗 [https://geospy.ai](https://geospy.ai)**
 
Herramienta emergente que usa **IA para estimar la geolocalización de una imagen** a partir de su contenido visual: vegetación, arquitectura, señalización, calidad de luz, y más. No requiere metadatos EXIF.
 
* 📌 **Caso de uso:** Una imagen sin metadatos de un campamento o instalación puede ser geolocualizada a través del análisis visual de la topografía, la vegetación y las estructuras visibles.
* 💡 **Tip:** Combina GeoSpy con Google Earth y Mapillary para verificar y refinar la geolocalización propuesta. La IA da una estimación — la verificación manual la confirma.
---
 
### ⚫ Google Earth Pro — Verificación Geoespacial
 
**🔗 [https://earth.google.com](https://earth.google.com)**
 
El estándar para verificación geoespacial en OSINT. Permite comparar imágenes de satélite históricas para confirmar o refutar geolocalizaciones, identificar cambios en instalaciones, y correlacionar ubicaciones con eventos.
 
* 📌 **Caso de uso:** Verificar si una imagen supuestamente tomada en un lugar específico corresponde realmente con la topografía, estructuras, y vegetación de ese lugar en la fecha indicada.
* 💡 **Tip:** Activa la capa de imágenes históricas (ícono de reloj) para comparar cómo era un lugar en diferentes fechas. Invaluable para investigaciones de conflictos o seguimiento de infraestructura.
* ✅ **Ventaja:** Gratuito para uso personal.
---
 
### 🌐 Mapillary — Street View de Código Abierto
 
**🔗 [https://www.mapillary.com](https://www.mapillary.com)**
 
Base de datos de imágenes a nivel de calle contribuidas por la comunidad, propiedad de Meta. Cubre zonas que Google Street View no tiene — especialmente útil para verificar geolocalizaciones en regiones menos desarrolladas o conflictos.
 
* 📌 **Caso de uso:** Verificar la fachada de un edificio o una calle específica en una ciudad donde Google Street View no tiene cobertura.
---
 
## 💡 Parte 4: Metodología — Cómo Encadenar Herramientas de Forma Efectiva
 
> La diferencia entre un investigador OSINT principiante y uno experto no es el número de herramientas que conoce — es **cómo las encadena**. Las herramientas son puntos de pivote; los pivotes son los que construyen inteligencia real.
 
### 🔗 Flujo de Trabajo de Investigación de Infraestructura
 
```
DOMINIO OBJETIVO
      ↓
  DNSDumpster → Mapa de subdominios y registros DNS
      ↓
  crt.sh → Subdominios adicionales vía CT logs
      ↓
  Shodan / Censys → Servicios expuestos por IP
      ↓
  VirusTotal → Historial de reputación y relaciones
      ↓
  SecurityTrails → Historial DNS (IPs previas)
      ↓
  Wayback Machine → Contenido histórico del sitio
```
 
### 🔗 Flujo de Trabajo de Investigación de Personas
 
```
USERNAME / EMAIL / NOMBRE
      ↓
  Sherlock / Maigret → Perfiles en múltiples plataformas
      ↓
  Hunter.io → Emails corporativos asociados
      ↓
  SpiderFoot → Reconocimiento automatizado amplio
      ↓
  Maltego → Grafo de relaciones
      ↓
  Social-Searcher → Actividad pública en tiempo real
```
 
### 🔗 Flujo de Trabajo de Visual OSINT
 
```
IMAGEN DESCONOCIDA
      ↓
  ExifTool → ¿Tiene metadatos GPS? → Si sí: Google Earth Pro
      ↓
  Google Lens → Identificación de landmarks y entorno
      ↓
  GeoSpy → Estimación de geolocalización con IA
      ↓
  PimEyes / FaceCheck.ID → ¿Hay un rostro? → Búsqueda facial
      ↓
  Sherlock → Username del perfil encontrado → Más pivotes
```
 
---
 
## 🔎 Parte 5: Google Dorks 2026 — Operadores Avanzados con Ejemplos Reales
 
> ⚠️ **Uso ético obligatorio:** Los dorks solo deben aplicarse sobre infraestructura que tienes autorización de analizar, en el contexto de bug bounty programs, pentesting contratado, o investigación de tu propia organización. El acceso no autorizado a sistemas informáticos es un delito.
 
### 📖 Operadores Fundamentales
 
| Operador | Función | Ejemplo |
|---|---|---|
| `site:` | Restringe resultados a un dominio | `site:empresa.com` |
| `filetype:` | Filtra por extensión de archivo | `filetype:pdf` |
| `inurl:` | Busca texto en la URL | `inurl:admin` |
| `intitle:` | Busca en el título de la página | `intitle:"index of"` |
| `intext:` | Busca en el cuerpo del texto | `intext:"contraseña"` |
| `cache:` | Versión en caché de Google | `cache:ejemplo.com` |
| `-` | Excluye resultados | `site:ejemplo.com -www` |
| `OR` | Condición alternativa | `filetype:pdf OR filetype:doc` |
 
---
 
### 🔍 Dorks por Categoría — 2026
 
#### 🏗️ Reconocimiento de Infraestructura
 
```
# Descubrir todos los subdominios de un dominio
site:*.objetivo.com -www.objetivo.com
 
# Encontrar páginas de login y paneles de administración
site:objetivo.com inurl:login OR inurl:admin OR inurl:panel OR inurl:dashboard
 
# Directorios abiertos (open directory listing)
intitle:"index of" site:objetivo.com
 
# Archivos de configuración expuestos
site:objetivo.com filetype:env OR filetype:cfg OR filetype:conf OR filetype:ini
 
# Archivos de backup expuestos
site:objetivo.com filetype:bak OR filetype:old OR filetype:backup OR filetype:sql
```
 
#### 📄 Documentos y Datos Sensibles
 
```
# Documentos internos con información sensible
site:objetivo.com filetype:pdf "confidencial" OR "interno" OR "no distribuir"
 
# Hojas de cálculo con posible información de empleados o finanzas
site:objetivo.com filetype:xlsx OR filetype:csv "empleados" OR "nómina" OR "salarios"
 
# Presentaciones corporativas
site:objetivo.com filetype:pptx OR filetype:ppt "estrategia" OR "roadmap" OR "Q1" OR "Q2"
 
# Archivos de log expuestos
site:objetivo.com filetype:log OR filetype:txt inurl:log
```
 
#### 🔑 Reconocimiento de Credenciales y Secrets
 
```
# API keys expuestas en GitHub (Google Dorking de GitHub)
site:github.com "objetivo.com" "api_key" OR "secret_key" OR "password"
 
# Archivos .env en repositorios públicos
site:github.com filename:.env "DB_PASSWORD" OR "API_KEY"
 
# Credenciales en código fuente público
site:github.com "objetivo.com" intext:"password" filetype:py OR filetype:js OR filetype:php
 
# Tokens de acceso expuestos
site:github.com "objetivo.com" "access_token" OR "auth_token" OR "bearer"
```
 
#### 📷 Cámaras y Dispositivos Expuestos (Shodan Dorks)
 
```
# En Shodan — cámaras IP sin autenticación
title:"webcam" country:"MX" has_screenshot:true
 
# Paneles de administración de routers
http.title:"router" OR http.title:"admin" port:80,443 country:"MX"
 
# Bases de datos MongoDB expuestas
product:"MongoDB" port:27017 -authentication
 
# Elasticsearch sin autenticación
product:"Elastic" port:9200 http.title:"Kibana"
```
 
#### 🧑‍💼 OSINT de Personas e Identidad
 
```
# Currículums y perfiles profesionales
"Nombre Apellido" filetype:pdf OR filetype:doc "curriculum" OR "resume" OR "CV"
 
# Perfiles en directorios profesionales
site:linkedin.com "nombre apellido" "empresa"
 
# Cuentas en foros técnicos
site:github.com OR site:stackoverflow.com "nombre apellido" OR "username"
 
# Menciones en medios y documentos públicos
"Nombre Apellido" site:gov.mx OR site:gob.mx filetype:pdf
```
 
#### 🔎 OSINT Avanzado con Operadores Combinados
 
```
# Encontrar instancias de Grafana expuestas (plataforma de monitoreo)
intitle:"Grafana" inurl:"/login" -"grafana.com"
 
# Instancias de Kibana sin autenticación
intitle:"Kibana" inurl:":5601"
 
# Paneles de Jenkins expuestos
intitle:"Dashboard [Jenkins]" -site:jenkins.io
 
# Instancias de Jupyter Notebook sin contraseña
intitle:"Jupyter Notebook" inurl:"/tree" -"jupyter.org"
 
# Archivos robots.txt que revelan rutas sensibles
site:objetivo.com filetype:txt inurl:robots "Disallow"
```
 
---
 
### 🛠️ Recursos Complementarios para Dorks
 
* 🗃️ [**Google Hacking Database (GHDB) — Exploit-DB**](https://www.exploit-db.com/google-hacking-database) — La base de datos más completa de dorks categorizados por tipo: files, devices, error messages, advisories. Mantenida activamente.
* 🤖 [**Google Dork Generator — The OSINT Vault**](https://theosintvault.io/google-dork-generator) — Generador de dorks basado en objetivos específicos. Ideal para construir queries complejas sin memorizar operadores.
* 🔧 [**Dork Assistant — ShadowDragon**](https://shadowdragon.io/free-osint-tools/dork-assistant/) — Asistente de IA que convierte objetivos en lenguaje natural en dorks precisos.
* 📚 [**Bing Dorks**](https://www.bing.com/search?q=site%3A*.ejemplo.com) — Bing acepta operadores similares a Google y frecuentemente indexa contenido que Google no tiene, especialmente dominios de menor autoridad.
---
 
## 🛡️ Parte 6: Contramedidas — Protege tu Huella Digital
 
El conocimiento OSINT tiene un segundo propósito crítico: **entender cómo te ven los atacantes** para reducir tu superficie de exposición.
 
### 🔒 Para organizaciones:
 
* ✅ **Auditoría regular de subdominios** con crt.sh y DNSDumpster. Elimina subdominios obsoletos.
* ✅ **Monitorea tus certificados TLS** — no emitas wildcards innecesarios que revelan estructura interna.
* ✅ **Configura robots.txt** pero sin listar rutas sensibles — security through obscurity no es seguridad, pero innecesariamente listar rutas en robots.txt es regalar información.
* ✅ **Google Search Console** — úsalo para remover páginas indexadas accidentalmente.
* ✅ **Política de metadatos en archivos** — implementa procesos que eliminen metadatos de documentos antes de publicarlos.
* ✅ **Monitoreo de GitHub** — configura alertas para detectar si código de tu organización es publicado accidentalmente en repositorios públicos.
### 🔒 Para individuos:
 
* ✅ **Elimina metadatos EXIF** de fotos antes de publicarlas (herramienta: [**ExifEraser**](https://github.com/Tommy-Geenexus/exif-eraser))
* ✅ **Audita tus usernames** — usa Sherlock en ti mismo para ver qué perfiles tienes activos
* ✅ **Revisión periódica en HaveIBeenPwned** — [**https://haveibeenpwned.com**](https://haveibeenpwned.com)
* ✅ **Minimiza la información pública en LinkedIn** — es la fuente OSINT corporativa más rica para atacantes
---
 
## 🏁 Conclusión: El OSINT es un Superpoder — Úsalo con Criterio
 
Las herramientas en esta guía son **neutrales**: las mismas que usa un investigador de ciberseguridad para proteger una organización son las que usa un atacante para encontrar vulnerabilidades, o un periodista para investigar corrupción. La diferencia no está en la herramienta — está en el **propósito, la autorización, y la ética** del operador.
 
El OSINT efectivo no es sobre la herramienta más poderosa. Es sobre **la metodología más disciplinada**: saber qué dato buscar, cómo pivotear de una fuente a otra, y cuándo detenerse porque cruzaste una línea legal o ética.
 
> **"La inteligencia de fuentes abiertas no consiste en saber buscar. Consiste en saber qué hacer con lo que encuentras — y qué no hacer."**
 
Aprende, practica en entornos autorizados, contribuye a la comunidad, y siempre opera dentro de los límites legales de tu jurisdicción. 🔐
 
---
 
*Escrito por **Jafet Brito** · Security Researcher · Zero Trust Mindset*
*Todas las herramientas listadas son de uso legal para reconocimiento pasivo y/o requieren autorización explícita para reconocimiento activo.*
 
</div>
---
---
 
<div class="lang-en">
## 🕵️ OSINT Arsenal 2026: Tools, Dorks & Techniques for Investigators
 
**By Jafet Brito** · Security Researcher · *Published June 11, 2026*
 
---
 
> ⚠️ **Legal and ethical disclaimer:** All information in this article is for **exclusively defensive, educational, and authorized research** purposes. Using these tools on systems or individuals without explicit authorization may constitute a crime in your jurisdiction. Under a **Zero Trust philosophy**: always verify the legal scope before executing any reconnaissance technique. **Never trust, always verify — starting with your own permissions.**
 
---
 
### 🗺️ What You'll Find in This Guide
 
* 🌐 **Domain, IP & infrastructure OSINT tools** — with use cases and tips
* 👤 **People & social media OSINT tools** — applied SOCMINT
* 📸 **Image & geolocation tools** — Visual OSINT
* 💡 **Investigation methodology** — how to chain tools effectively
* 🔎 **Google Dorks 2026** — updated operators with real examples
* 🛡️ **Countermeasures** — how to protect your digital footprint
---
 
## 🌐 Part 1: Domains, IPs & Infrastructure
 
> 💡 **Core principle:** Any organization's digital infrastructure is its public backbone. Every domain, subdomain, TLS certificate, and service banner is legitimate OSINT data — indexed or accessible without authentication. Infrastructure recon maps the **external attack surface** before any test.
 
---
 
### 🔵 Shodan — The Search Engine for the Internet of Things
 
**🔗 [https://www.shodan.io](https://www.shodan.io)**
 
Shodan indexes **service banners** from internet-connected devices: routers, IP cameras, industrial servers (ICS/OT), exposed databases, unauthenticated admin panels, and more. It doesn't index web pages — it indexes **what ports are listening**.
 
* 📌 **Use case:** Identify an organization's servers running vulnerable software versions, unnecessarily open ports, or services exposed without credentials.
* 💡 **Tip:** Use operators `org:`, `country:`, `port:`, `product:` and `vuln:` for surgical queries. For example: `org:"Company Name" port:3389` reveals exposed remote desktops.
* ⚠️ **Limit:** Free account has limited queries. Paid plan unlocks exports and monitoring.
---
 
### 🟣 Censys — Infrastructure & TLS Certificates
 
**🔗 [https://search.censys.io](https://search.censys.io)**
 
Similar to Shodan but with **greater focus on TLS certificates and continuous full IPv4/IPv6 scanning**. Censys is especially powerful for discovering "shadow IT" — servers deployed by employees not under official IT management.
 
* 📌 **Use case:** Discover an organization's subdomains and hosts through their TLS certificates (which frequently reveal internal names).
* 💡 **Tip:** Search `parsed.subject.organization: "Company"` to find all certificates issued to an organization's name. Wildcard certificates reveal subdomain structure.
* ⚠️ **Limit:** Free tier has daily query limits. For broader investigations, consider the researcher plan.
---
 
### 🟢 DNSDumpster — Passive DNS Mapping
 
**🔗 [https://dnsdumpster.com](https://dnsdumpster.com)**
 
Free web tool that performs **passive DNS reconnaissance** without sending direct queries to the target. Generates a visual map of subdomains, MX records, TXT records, and infrastructure relationships.
 
* 📌 **Use case:** Get a panoramic view of a target domain's subdomains, identify email providers, third-party services, and potential entry points.
* 💡 **Tip:** Combine with Shodan: subdomains discovered in DNSDumpster can be searched in Shodan to see what services they expose.
* ✅ **Advantage:** Completely free, no registration, nothing to install.
---
 
### 🟡 VirusTotal — Domain, IP & File Intelligence
 
**🔗 [https://www.virustotal.com](https://www.virustotal.com)**
 
Though known for malware analysis, VirusTotal is an **OSINT gold mine** for infrastructure. Its graph and relations section lets you see what IPs, domains, and files an indicator has been associated with.
 
* 📌 **Use case:** Investigate whether a domain or IP has a malicious history, what other infrastructure it's communicated with, and what files have been submitted from that IP.
* 💡 **Tip:** Use the "Relations" and "Graph" tabs on any domain or IP to discover related infrastructure that doesn't appear in DNS.
* ✅ **Advantage:** Free for basic use. API has a free tier with 500 requests/day.
---
 
### 🔴 SecurityTrails — DNS History & Infrastructure
 
**🔗 [https://securitytrails.com](https://securitytrails.com)**
 
Provides **complete DNS record history** for any domain: what IPs it has had, what nameservers it used, MX changes, and more. Invaluable for tracking infrastructure movements over time.
 
* 📌 **Use case:** A domain that changed its IP may reveal previous hosting (and its historical WHOIS data). Useful for attributing malicious infrastructure.
* 💡 **Tip:** Search an IP's history to see all domains that have pointed to it — possible shared infrastructure for a threat actor.
* ⚠️ **Limit:** Free tier with 50 queries/month. For active investigations, the basic paid plan is necessary.
---
 
### ⚫ crt.sh — Certificate Transparency
 
**🔗 [https://crt.sh](https://crt.sh)**
 
Public registry of **all TLS certificates issued** for a domain. Certificates are public by law (Certificate Transparency), making them an unsuspected OSINT source.
 
* 📌 **Use case:** Discover subdomains that don't appear in public DNS. Many organizations issue certificates for staging, dev, internal, or VPN subdomains not in public DNS but visible in CT logs.
* 💡 **Tip:** Query `%.ejemplo.com` in crt.sh to get all subdomains with issued certificates. This frequently reveals `vpn.ejemplo.com`, `dev.ejemplo.com`, `staging.ejemplo.com`.
* ✅ **Advantage:** Completely free, no registration.
---
 
### 🌐 Wayback Machine / Archive.org — The Internet's Past
 
**🔗 [https://web.archive.org](https://web.archive.org)**
 
The world's largest web page archive. Lets you see **historical versions of any website**, including deleted pages, old configurations, and source code previously exposed to the public.
 
* 📌 **Use case:** Find login pages, documents, or data that were briefly public then removed. Also useful for comparing changes in privacy policies or configurations.
* 💡 **Tip:** Combine with Google's `cache:` operator to access cached versions of recently modified pages.
* ✅ **Advantage:** Completely free.
---
 
### 🔍 Shodan Favicon Hash — Reconnaissance by Icon
 
A lesser-known but highly effective technique: favicons (browser tab icons) have a **calculable hash** that Shodan indexes. This allows finding **all instances of a specific application** across the internet.
 
* 📌 **Use case:** If you know the favicon of a specific admin panel (pfSense, Grafana, Kibana), search Shodan with `http.favicon.hash:HASH` to find all globally exposed instances.
* 💡 **Support tool:** [**Favicon Hash Calculator**](https://favicon-hash.kmsec.uk/) — calculates the hash of any favicon for use in Shodan.
---
 
## 👤 Part 2: People & Social Media (SOCMINT)
 
> 💡 **Core principle:** People leave involuntary digital traces across multiple platforms. SOCMINT (Social Media Intelligence) is not about spying — it's about analyzing **voluntarily public information** to build a digital activity profile. Ethics are critical here: the legality of collecting public data varies by jurisdiction.
 
---
 
### 🔵 Sherlock — Cross-Platform Username Search
 
**🔗 [https://github.com/sherlock-project/sherlock](https://github.com/sherlock-project/sherlock)** *(open source, CLI)*
**🔗 [https://sherlockosint.com](https://sherlockosint.com)** *(web version)*
 
Sherlock searches a username across **more than 400 platforms simultaneously**, identifying which ones have an account with that name. It's the standard tool for digital identity reconnaissance by username.
 
* 📌 **Use case:** A threat actor uses the same alias on multiple forums. With Sherlock you can pivot from a dark forum username to their public GitHub, Twitter, or Reddit account.
* 💡 **Tip:** Also run variations of the username (with numbers, underscores, dots). People frequently use `username`, `username_`, `username01`.
* ✅ **Advantage:** Open source, free, actively maintained.
---
 
### 🟣 Maigret — Sherlock's More Powerful Sibling
 
**🔗 [https://github.com/soxoj/maigret](https://github.com/soxoj/maigret)** *(open source, CLI)*
 
Advanced fork of Sherlock that searches usernames across **more than 3,000 sites** and generates detailed reports with additional information extracted from found profiles (bio, photo, links, IDs).
 
* 📌 **Use case:** When Sherlock gives an initial result, Maigret deepens into found accounts to extract more information pivots.
* 💡 **Tip:** The `--report` flag generates a visual HTML report with all found profiles and extracted information. Ideal for investigation documentation.
---
 
### 🟢 SpiderFoot — Automated OSINT Reconnaissance
 
**🔗 [https://www.spiderfoot.net](https://www.spiderfoot.net)**
**🔗 [https://github.com/smicallef/spiderfoot](https://github.com/smicallef/spiderfoot)** *(open source)*
 
SpiderFoot is an OSINT reconnaissance engine that accepts a **seed** (domain, IP, email, person's name) and automatically queries **more than 200 public data sources** to build a comprehensive intelligence profile.
 
* 📌 **Use case:** Threat actor investigation. You provide their email as a seed and SpiderFoot automatically searches for associated breaches, domains registered with that email, social accounts, IPs, and more.
* 💡 **Tip:** The HX (hosted) version has an elegant web interface. The open source version requires setup but gives full control over modules.
* ⚠️ **Limit:** Some integrations require API keys from external services (Shodan, Hunter, etc.).
---
 
### 🟡 Hunter.io — Corporate Email Discovery
 
**🔗 [https://hunter.io](https://hunter.io)**
 
Allows finding **all emails associated with a corporate domain** and verifying their validity. Widely used in corporate investigations and phishing pentesting to build target lists.
 
* 📌 **Use case:** Identify a company's email pattern (`firstname.lastname@company.com`) and find specific employee emails from LinkedIn.
* 💡 **Tip:** Combine Hunter with LinkedIn to build a complete list of employees + their probable emails. Useful for phishing awareness assessments.
* ✅ **Advantage:** Free plan with 25 searches/month.
---
 
### 🔴 Maltego — Visual Relationship Analysis
 
**🔗 [https://www.maltego.com](https://www.maltego.com)**
 
OSINT analysis platform that creates **visual relationship graphs** between people, organizations, domains, IPs, and other entities. Uses "transforms" (automated queries) to expand graph nodes.
 
* 📌 **Use case:** Map the relationship network of a threat actor group: who communicates with whom, what infrastructure they share, what organization is behind them.
* 💡 **Tip:** The Community version is free with limited transforms. For serious OSINT, consider the Pro version with access to 50+ integrated data sources.
---
 
### ⚫ Social-Searcher — Real-Time Social Media Monitoring
 
**🔗 [https://www.social-searcher.com](https://www.social-searcher.com)**
 
Search engine for **public social media posts** in real time. Allows tracking mentions of names, aliases, organizations, or keywords across multiple platforms simultaneously.
 
* 📌 **Use case:** Monitor in real time if a domain name, brand, or person is being mentioned on social networks — useful for incident response and threat intelligence.
* 💡 **Tip:** Set up automatic alerts for specific terms. Ideal for detecting emerging phishing campaigns mentioning your brand.
---
 
### 🌐 OSINT Framework — The Map of Everything
 
**🔗 [https://osintframework.com](https://osintframework.com)**
 
Not a search tool — it's an **interactive visual directory** of hundreds of OSINT tools categorized by data type: username, email, IP, image, geolocation, dark web, and more. The mandatory starting point for any investigator.
 
* 📌 **Use case:** When you hit a dead end in an investigation, the OSINT Framework suggests the next logical step. It's the "Google Maps" of the OSINT world.
* 💡 **Tip:** Use it as a checklist at the start of each investigation to ensure you don't miss relevant data categories.
---
 
## 📸 Part 3: Images & Geolocation (Visual OSINT)
 
> 💡 **Core principle:** A picture is worth a thousand words — and in OSINT, also more than a thousand queries. Images contain three layers of intelligence: **EXIF metadata** (GPS coordinates, camera, date), **visual content** (landmarks, text, uniforms, vehicles), and **digital footprint** (on which other platforms does that image appear).
 
---
 
### 🔵 Google Lens — The Reference Visual Geolocation Tool
 
**🔗 [https://lens.google.com](https://lens.google.com)**
 
Google's visual search tool. In 2026, it remains the **gold standard for environmental intelligence**: identifying landmarks, buildings, landscapes, and objects in images.
 
* 📌 **Use case:** A protest or incident photo shows a building in the background. Google Lens can identify the city, neighborhood, or even the building's name.
* 💡 **Tip:** If results are ambiguous, crop the most distinctive element of the image (a sign, a particular building) and search it separately. Specificity improves results.
---
 
### 🟣 PimEyes — Facial Search Across the Web
 
**🔗 [https://pimeyes.com](https://pimeyes.com)**
 
Facial search engine that indexes millions of images from the public web and finds **where else a face appears**. One of the most powerful and controversial tools in Visual OSINT.
 
* 📌 **Use case:** Given a profile photo of a threat actor on a forum, PimEyes can find other images of that person on other platforms, helping build a real identity profile.
* 💡 **Tip:** Combine PimEyes with Sherlock: if PimEyes finds an Instagram profile, use the found username in Sherlock to continue the pivot.
* ⚠️ **Ethical and legal consideration:** In many jurisdictions, biometric data (including facial recognition) is protected by regulations like GDPR. Use this tool only in authorized investigations.
---
 
### 🟢 FaceCheck.ID — PimEyes Alternative
 
**🔗 [https://facecheck.id](https://facecheck.id)**
 
Free alternative to PimEyes for facial search on the internet. Less comprehensive but accessible without subscription, useful for initial verifications.
 
* 📌 **Use case:** Quick initial check before investing in a deeper search with PimEyes.
* 💡 **Tip:** Use it as an initial screening — if FaceCheck already finds relevant results, you saved the cost of PimEyes.
---
 
### 🟡 ExifTool — Metadata Extraction
 
**🔗 [https://exiftool.org](https://exiftool.org)** *(open source, CLI)*
**🔗 [https://exif.tools](https://exif.tools)** *(web version)*
 
ExifTool extracts all **EXIF metadata** from images and other files: GPS coordinates, exact date and time, camera/phone model, software used, and more. Many photos share more than their authors imagine.
 
* 📌 **Use case:** An unedited photo posted on social media may contain exact GPS coordinates of where it was taken, reveal the phone model, or confirm a timestamp.
* 💡 **Tip:** Platforms like Instagram, Facebook, and Twitter **strip EXIF metadata** when photos are uploaded. However, images shared directly via email, Telegram, or unprocessed storage services often retain them.
* ✅ **Advantage:** Open source, completely free.
---
 
### 🔴 GeoSpy — AI-Powered Geolocation
 
**🔗 [https://geospy.ai](https://geospy.ai)**
 
Emerging tool that uses **AI to estimate an image's geolocation** from its visual content: vegetation, architecture, signage, light quality, and more. Doesn't require EXIF metadata.
 
* 📌 **Use case:** A metadata-free image of a camp or facility can be geolocated through visual analysis of the topography, vegetation, and visible structures.
* 💡 **Tip:** Combine GeoSpy with Google Earth and Mapillary to verify and refine the proposed geolocation. AI provides an estimate — manual verification confirms it.
---
 
### ⚫ Google Earth Pro — Geospatial Verification
 
**🔗 [https://earth.google.com](https://earth.google.com)**
 
The standard for geospatial verification in OSINT. Allows comparing historical satellite images to confirm or refute geolocations, identify changes in facilities, and correlate locations with events.
 
* 📌 **Use case:** Verify whether an image supposedly taken at a specific location actually matches the topography, structures, and vegetation of that place on the indicated date.
* 💡 **Tip:** Activate the historical imagery layer (clock icon) to compare what a place looked like at different dates. Invaluable for conflict investigations or infrastructure tracking.
* ✅ **Advantage:** Free for personal use.
---
 
### 🌐 Mapillary — Open Source Street View
 
**🔗 [https://www.mapillary.com](https://www.mapillary.com)**
 
Community-contributed street-level image database, owned by Meta. Covers areas Google Street View doesn't — especially useful for verifying geolocations in less-developed regions or conflict zones.
 
* 📌 **Use case:** Verify a building's facade or a specific street in a city where Google Street View has no coverage.
---
 
## 💡 Part 4: Methodology — How to Chain Tools Effectively
 
> The difference between a beginner and expert OSINT investigator isn't the number of tools they know — it's **how they chain them**. Tools are pivot points; pivots are what build real intelligence.
 
### 🔗 Infrastructure Investigation Workflow
 
```
TARGET DOMAIN
      ↓
  DNSDumpster → Subdomain map and DNS records
      ↓
  crt.sh → Additional subdomains via CT logs
      ↓
  Shodan / Censys → Exposed services by IP
      ↓
  VirusTotal → Reputation history and relations
      ↓
  SecurityTrails → DNS history (previous IPs)
      ↓
  Wayback Machine → Historical site content
```
 
### 🔗 Person Investigation Workflow
 
```
USERNAME / EMAIL / NAME
      ↓
  Sherlock / Maigret → Profiles on multiple platforms
      ↓
  Hunter.io → Associated corporate emails
      ↓
  SpiderFoot → Broad automated reconnaissance
      ↓
  Maltego → Relationship graph
      ↓
  Social-Searcher → Real-time public activity
```
 
### 🔗 Visual OSINT Workflow
 
```
UNKNOWN IMAGE
      ↓
  ExifTool → Does it have GPS metadata? → If yes: Google Earth Pro
      ↓
  Google Lens → Landmark and environment identification
      ↓
  GeoSpy → AI-powered geolocation estimate
      ↓
  PimEyes / FaceCheck.ID → Is there a face? → Facial search
      ↓
  Sherlock → Username from found profile → More pivots
```
 
---
 
## 🔎 Part 5: Google Dorks 2026 — Advanced Operators with Real Examples
 
> ⚠️ **Mandatory ethical use:** Dorks should only be applied to infrastructure you have authorization to analyze — in the context of bug bounty programs, contracted pentesting, or your own organization's research. Unauthorized access to computer systems is a crime.
 
### 📖 Core Operators
 
| Operator | Function | Example |
|---|---|---|
| `site:` | Restricts results to a domain | `site:company.com` |
| `filetype:` | Filters by file extension | `filetype:pdf` |
| `inurl:` | Searches text in the URL | `inurl:admin` |
| `intitle:` | Searches in the page title | `intitle:"index of"` |
| `intext:` | Searches in body text | `intext:"password"` |
| `cache:` | Google's cached version | `cache:example.com` |
| `-` | Excludes results | `site:example.com -www` |
| `OR` | Alternative condition | `filetype:pdf OR filetype:doc` |
 
---
 
### 🔍 Dorks by Category — 2026
 
#### 🏗️ Infrastructure Reconnaissance
 
```
# Discover all subdomains of a domain
site:*.target.com -www.target.com
 
# Find login pages and admin panels
site:target.com inurl:login OR inurl:admin OR inurl:panel OR inurl:dashboard
 
# Open directory listings
intitle:"index of" site:target.com
 
# Exposed configuration files
site:target.com filetype:env OR filetype:cfg OR filetype:conf OR filetype:ini
 
# Exposed backup files
site:target.com filetype:bak OR filetype:old OR filetype:backup OR filetype:sql
```
 
#### 📄 Documents & Sensitive Data
 
```
# Internal documents with sensitive information
site:target.com filetype:pdf "confidential" OR "internal" OR "do not distribute"
 
# Spreadsheets with possible employee or financial data
site:target.com filetype:xlsx OR filetype:csv "employees" OR "payroll" OR "salaries"
 
# Corporate presentations
site:target.com filetype:pptx OR filetype:ppt "strategy" OR "roadmap" OR "Q1" OR "Q2"
 
# Exposed log files
site:target.com filetype:log OR filetype:txt inurl:log
```
 
#### 🔑 Credential & Secrets Reconnaissance
 
```
# API keys exposed on GitHub
site:github.com "target.com" "api_key" OR "secret_key" OR "password"
 
# .env files in public repositories
site:github.com filename:.env "DB_PASSWORD" OR "API_KEY"
 
# Credentials in public source code
site:github.com "target.com" intext:"password" filetype:py OR filetype:js OR filetype:php
 
# Exposed access tokens
site:github.com "target.com" "access_token" OR "auth_token" OR "bearer"
```
 
#### 📷 Exposed Cameras & Devices (Shodan Dorks)
 
```
# Shodan — IP cameras without authentication
title:"webcam" country:"US" has_screenshot:true
 
# Router admin panels
http.title:"router" OR http.title:"admin" port:80,443 country:"US"
 
# Exposed MongoDB databases
product:"MongoDB" port:27017 -authentication
 
# Elasticsearch without authentication
product:"Elastic" port:9200 http.title:"Kibana"
```
 
#### 🧑‍💼 People & Identity OSINT
 
```
# Resumes and professional profiles
"First Last" filetype:pdf OR filetype:doc "curriculum" OR "resume" OR "CV"
 
# Profiles in professional directories
site:linkedin.com "first last" "company"
 
# Accounts on technical forums
site:github.com OR site:stackoverflow.com "first last" OR "username"
 
# Mentions in media and public documents
"First Last" site:gov.com filetype:pdf
```
 
#### 🔎 Advanced OSINT with Combined Operators
 
```
# Find exposed Grafana instances (monitoring platform)
intitle:"Grafana" inurl:"/login" -"grafana.com"
 
# Kibana instances without authentication
intitle:"Kibana" inurl:":5601"
 
# Exposed Jenkins dashboards
intitle:"Dashboard [Jenkins]" -site:jenkins.io
 
# Jupyter Notebooks without password
intitle:"Jupyter Notebook" inurl:"/tree" -"jupyter.org"
 
# robots.txt files revealing sensitive paths
site:target.com filetype:txt inurl:robots "Disallow"
```
 
---
 
### 🛠️ Complementary Dork Resources
 
* 🗃️ [**Google Hacking Database (GHDB) — Exploit-DB**](https://www.exploit-db.com/google-hacking-database) — The most complete database of categorized dorks by type: files, devices, error messages, advisories. Actively maintained.
* 🤖 [**Google Dork Generator — The OSINT Vault**](https://theosintvault.io/google-dork-generator) — Dork generator based on specific targets. Ideal for building complex queries without memorizing operators.
* 🔧 [**Dork Assistant — ShadowDragon**](https://shadowdragon.io/free-osint-tools/dork-assistant/) — AI assistant that converts natural language objectives into precise dorks.
* 📚 [**Bing Dorks**](https://www.bing.com/search?q=site%3A*.example.com) — Bing accepts similar operators to Google and frequently indexes content Google doesn't have, especially lower-authority domains.
---
 
## 🛡️ Part 6: Countermeasures — Protect Your Digital Footprint
 
OSINT knowledge has a second critical purpose: **understanding how attackers see you** to reduce your exposure surface.
 
### 🔒 For organizations:
 
* ✅ **Regular subdomain audits** with crt.sh and DNSDumpster. Remove obsolete subdomains.
* ✅ **Monitor your TLS certificates** — don't issue unnecessary wildcards that reveal internal structure.
* ✅ **Configure robots.txt** but without listing sensitive paths — security through obscurity is not security, but unnecessarily listing paths in robots.txt is giving information away.
* ✅ **Google Search Console** — use it to remove accidentally indexed pages.
* ✅ **File metadata policy** — implement processes that strip metadata from documents before publishing.
* ✅ **GitHub monitoring** — set up alerts to detect if your organization's code is accidentally published in public repositories.
### 🔒 For individuals:
 
* ✅ **Remove EXIF metadata** from photos before posting (tool: [**ExifEraser**](https://github.com/Tommy-Geenexus/exif-eraser))
* ✅ **Audit your usernames** — run Sherlock on yourself to see what active profiles you have
* ✅ **Regular HaveIBeenPwned checks** — [**https://haveibeenpwned.com**](https://haveibeenpwned.com)
* ✅ **Minimize public information on LinkedIn** — it's the richest corporate OSINT source for attackers
---
 
## 🏁 Conclusion: OSINT Is a Superpower — Use It With Judgment
 
The tools in this guide are **neutral**: the same ones a cybersecurity investigator uses to protect an organization are the ones an attacker uses to find vulnerabilities, or a journalist uses to investigate corruption. The difference is not in the tool — it's in the **purpose, authorization, and ethics** of the operator.
 
Effective OSINT is not about the most powerful tool. It's about **the most disciplined methodology**: knowing what data to look for, how to pivot from one source to another, and when to stop because you've crossed a legal or ethical line.
 
> **"Open source intelligence is not about knowing how to search. It's about knowing what to do with what you find — and what not to do."**
 
Learn, practice in authorized environments, contribute to the community, and always operate within the legal limits of your jurisdiction. 🔐
 
---
 
*Written by **Jafet Brito** · Security Researcher · Zero Trust Mindset*
*All tools listed are for legal use in passive reconnaissance and/or require explicit authorization for active reconnaissance.*
 
</div>
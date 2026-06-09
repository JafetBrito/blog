---
title: "Bienvenido a mi blog de ciberseguridad"
description: "Por qué empecé este blog y qué tipo de contenido vas a encontrar aquí."
pubDate: 2024-01-15
tags: ["linux", "ctf"]
author: "Jafet Brito"
heroImage: "https://picsum.photos/seed/bienvenido-cyber/1200/630"
lang: "es"
draft: false
---

## Por qué este blog

Llevo años aprendiendo ciberseguridad de forma autodidacta. Foros, libros, CTFs, máquinas de HackTheBox a las 2 AM. En algún punto me di cuenta de que escribir sobre lo que aprendo me ayuda a entenderlo mejor.

Este blog es eso: mi cuaderno de notas público.

## Qué vas a encontrar aquí

No intento cubrir todo. Me enfoco en lo que me apasiona:

- **Writeups de CTF** — Soluciones paso a paso de competiciones internacionales
- **Técnicas de pentesting web** — XSS, SQLi, SSRF, RCE y más
- **Reversing** — Ingeniería inversa de binarios, análisis de malware
- **Linux** — Privilege escalation, scripting, configuración segura
- **OSINT** — Reconocimiento e inteligencia de fuentes abiertas

## Herramientas que uso

```bash
# Mi stack básico en Kali Linux
sudo apt install -y \
  nmap masscan gobuster ffuf \
  burpsuite wireshark tcpdump \
  gdb pwndbg ghidra \
  python3-pwntools impacket-scripts

# Verificar identidad
id && uname -a
```

## La regla de oro

Todo lo que publico aquí es con fines **educativos y de investigación**. Nunca apliques estas técnicas en sistemas sin autorización explícita. La ciberseguridad existe para proteger, no para atacar.

---

Suscríbete por [Telegram](https://t.me/jafetbrito) o escríbeme por [email](mailto:hola@jafetbrito.com) si quieres que cubra algún tema específico.

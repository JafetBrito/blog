---
title: "Welcome to my cybersecurity blog"
description: "Why I started this blog and what kind of content you will find here."
pubDate: 2024-01-15
tags: ["linux", "ctf"]
author: "Jafet Brito"
heroImage: "https://picsum.photos/seed/bienvenido-cyber/1200/630"
lang: "en"
translationOf: "bienvenido"
draft: false
---

## Why this blog

I have spent years learning cybersecurity on my own. Forums, books, CTFs, HackTheBox machines at 2 AM. At some point, I realized that writing about what I learn helps me understand it better.

This blog is just that: my public notebook.

## What you will find here

I don't try to cover everything. I focus on what I am passionate about:

- **CTF Writeups** — Step-by-step solutions for international competitions
- **Web Pentesting Techniques** — XSS, SQLi, SSRF, RCE, and more
- **Reversing** — Binary reverse engineering, malware analysis
- **Linux** — Privilege escalation, scripting, secure configuration
- **OSINT** — Open-source intelligence and reconnaissance

## Tools I use

```bash
# My basic stack on Kali Linux
sudo apt install -y \
  nmap masscan gobuster ffuf \
  burpsuite wireshark tcpdump \
  gdb pwndbg ghidra \
  python3-pwntools impacket-scripts

# Verify identity
id && uname -a
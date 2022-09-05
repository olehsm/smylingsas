---
title: Redeploy av bygg med nye variabler i Octopus deploy
description: ""
date: 2022-09-05T06:42:09.460Z
preview: ""
draft: ""
tags:
  - octopus
categories: ""
author: ""
pageresources: {}
comments: 2022-09-05T06:42:09.460Z
lastmod: 2022-09-05T07:19:02.492Z
type: ""
slug: redeploy-av-bygg-med-nye-variabler-octopus-deploy
---

TIL: Unngå å lage ny release når du har endret på prosjektvarialer

<!--more-->
Om du legger til ny variabel eller endrer på eksisterende variabelverdi og forsøker å redeploye en eksisterende release vil du få en advarel om at denne releasen vil være uendret. Det vil si benytte seg av de prosjektevariablene (og verdier) som var lagret på det tidspunktet den orginale releasen ble laget. 



![Advarsel om at variabler er endret etter siste deploy](/img/update-variabel1.png)

Dette kan løses på to måter:
- Manuelt lage en ny release og sette et hardkodet versjonsnummer
- Trykke på knappen "Update variables" plassert under seksjonen "Variable Snapshot"

![Godta at nye variabler overskriver gamle variabelverdier på siste deploy](/img/update-variabel2.png)
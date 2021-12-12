---
author: "Ole Halvor Smylingsås"
description: ""
pageresources: []
categories: []
tags: []     
slug: ""
title: "Del 6 - Dedikert domene"
date: 2021-02-03T21:58:19+01:00
draft: false
comments: false
---

Ble lei av testadressen Amplify hadde sjenket meg, ønsket meg et enklere subdomene
<!--more-->
Hoveddomenet smylingsas.net som denne nettsiden benytter er allerede koblet opp til Amazon sin service Route53

Siden jeg ikke hadde særlig lyst til å kjøpe et dedikert domene til et lite sideprosjekt som minesweeper ville jeg heller legge det som et subdomene på smylingsas.net, altså minesweeper.smylingsas.net

Under App settings velg Domain management og deretter Add domain

![Skjema for å koble til domene til amplify applikasjon](/img/amp-add-domain.PNG)

I feltet Domain skrev jeg inn minesweeper.smylingsas.net og trykket på Configure domain. Jeg valgte å fjerne www-alternativet, jeg fjernet også avkrysningsboksen som lager en redirect da jeg ikke ønsket dette. Trykket så på Save.

Og resten gikk av seg selv. 
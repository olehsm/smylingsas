---
title: Introduksjon til Docker og kontainere
description: ""
date: 2022-09-26T16:43:21.351Z
preview: ""
draft: true
tags:
  - docker
author: Ole Halvor Smylingsås
lastmod: 2023-11-09T09:05:46.656Z
slug: introduksjon-til-docker-og-kontainere
---

<!--more-->
## Hva er en kontainer?
Walton(Kode24-klubben): Container-teknologi, også kjent osm bare container, er en metode for å pakke et program slik at den kjøres isolert fra andre prosesser. De store Cloud Computing-leverandørene, som Amazon, Microsoft og Google, har omfavnet contianerteknologi, men programvare som Docker og Kubernetes.

Containerteknologi har fått sitt navn fra skipsfartindustrien. I stedet for å finne en unik måte å sende hvert produkt på, blir varer plassert i stålbeholdere/kontainere, designet for å bli hentet av kranen på kaien, og plassert i skipet, som er designet for å imøtekomme kontainerens standardstørrelse. Ved å standardisere prosessen og holde varene sammen, kan containteren flyttes som en enhet, det koster mindre å gjøre det på denne måten.

### Kontainer vs virtuell maskin
Containere er en lettveksts-variant av tradisjonell virtualisering. Her container tror selv at den er en fullverdig server eller operativsystem. I realiteten bruker containere det underliggende operativsystemet. Dette sørge for at den vil fungere til akkurat det en utvikler ønsker at den skal fungere til. Vanligvis kjøres det kun én tjeneste per container.

## Fordeler?
En av fordelene med containere erman oppnår full isolasjon av installert programvare. Eldre systemer kan være designet slik at de ønsker seg en server alene, med kontainerteknologi kan dette enkelt løses ved å putte dette systemet inn i en container og dermed kan det leve på en server sammen med andre uten at det går i beina på de andre systemene på serveren.


## Oppsett av Docker

## Docker extension til VS vode  ønsker å installere Docker desktop det fungerer ikke da Dcker desktop versjonen som blir isntallert muligens er noe gmmmel og tror at min windowsversjon er for gammel. Ønsker så installere WSL?

Løser dette ved å avinstallere både Docker desktop og Dockerutvidelsen til VS Code for så å laste ned og installere Docker desktop direkte fra Docker sin hjemmeside. Da det var gjort og Docker desktop var oppe og kjøre kunne jeg igjen installere Docker utvidelsen som denne gangen detekterte Docker desktop og fungerte ut av boksen.
---
title: Konverter til Jenkinsfile og Multibranch pipeline
description: ""
date: 2022-12-19T08:06:58.266Z
preview: ""
draft: true
tags: ""
author: Ole Halvor Smylingsås
pageresources: {}
lastmod: 2023-01-05T20:13:22.584Z
slug: konverter-til-jenkinsfile-og-multibranch-pipeline
---

En prøve- og feileguide for å konverte fra et jenkinsprosjekt til å benytte en Jenkinsfile
<!--more-->

Utgangspunktet for denne guiden var et allerede eksisterende projekt i Jenkins. Fra nå heter det Portal. Portal var av typen "Freestyle project" og et delmål var å legge en Jenkinsfil til i prosjektet og flytte eksisterende byggekonfigurasjon til denne filen. En Jenkinsfil ligger på roten av prosjektet ditt og inneholder altså konfigurasjon for å bygge dette prosjektet. Ser det som enklere å kunne ha denne filen som del av kildekontrollen enn å benytte Jenkins sin egen konfigurasjonsystem.

Startet med å trykke på "Convert This Job To Pipeline". Får da opp en dialog som ber meg gi inn et navn om jeg ønsker. Jeg velger å kalle det "Portal-pipeline" og jeg krysser av for jeg vil legge til en Jenkinsfil i repo med en automatisk commit beskjed. Det som da skjer er at jeg får et nytt prosjekt på linje med Portal og jeg sitter nå med to prosjekter: "Portal" og "Portal-pipeline". Det første er vanlig prosjekt og det andre er en pipeline, men begge peker til det samme repo.

Jeg sjekker at Jenkinsfilen er lagt til på roten av prosjektet. Ser at Jenkins har forsøkt å generere konfigurasjonen til prosjektet inn i filen, med litt ukjent syntaks. Forsøker så å bygge prosjeket i Jenking (Dette prosjektet er ikke satt opp med å automastisk trigge et bygg ved en git push - event). Bygget feilet, ville ikke starte, syntaksfeil

> Lærdom 1: Når man klikker på "Convert This Job To Pipeline" så trudde jeg de kunne være lurt å ikke gi den nye prosjektet et navn slik at det kun er den inneværende prosjektet som blir et pipelineprosjekt. Dette var ikke riktig - Jenkins vil alltid navn nytt pipeline prosjekt "*-pipeline". 
> Lærdom 2: Et pipeline prosjekt er ikke det samme som et multibranch prosjekt. Pipelineprosjektet gir meg en Jenkinsfil med byggestep og mulighet for Blue Ocean til å visualisere byggeprogresjonen i nettleseren. Noe som for Portalprosjektet var tilstrekkelig.




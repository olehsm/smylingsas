---
title: Endre build settings i AWS Amplify
description: ""
date: 2022-09-05T08:03:41.038Z
preview: /preview-images/aws-logo.jpg
draft: ""
tags:
  - amplify
  - hugo
author: Ole Halvor Smylingsås
lastmod: 2024-03-09T16:04:40.242Z
slug: endre-build-settings-aws-amplify
---

<!--more-->

## Velg "Build settings"

![Amazon Web Services Amplify project overview](/img/aws-buildsettings-1.png)

Amplify henter et valgt repository fra GitHub og kjører opp en intern Dockerkontainer som bygger koden. Dette kan styres Via amplify.yml og "Build image settings"

## "Build settings"

![Amazon Web Services Amplify build settings](/img/aws-buildsettings-2.png)

Amplify.yml kan enten endres rett i nettleseren eller man kan laste den ned og legge den på rota i GitHub-prosjektet. Nedenfor ser man hele amplify.yml som jeg bruker i dette bloggprosjektet. Det er kommandoen "hugo" som skal kjøres filene havner da i mappen "/public". Disse filene ruller så Amplify automatisk ut på serveren som er tilgjenglig for domenenavnet (Dersom bygget ikke feiler).
{{<highlight yml>}}
version: 0.1
frontend:
  phases:
    build:
      commands: ["hugo"]
  artifacts:
    baseDirectory: public
    files:
      - '**/*'
  cache:
    paths: []
{{</highlight>}}

For at man skal kunne kjøre kommandoen "hugo" må Amplify vite om at det er kontainer med Hugo den skal sette opp. Det kan man sette under seksjonen "Build image settings". Der velger man at det er Hugo skal bygges og hvilken versjon av Hugo som skal brukes for å bygge koden. Dette må man gjøre fra nettleseren, men det er mulig å konfigurere om Amplify til å ta i mot en Dockerfil du allerede har lagt til i GitHub-prosjektet.

> I dialogen som dukker opp kan man sette en spesifikk versjon av Hugo som skal brukes til å bygge koden eller man kan sette "Latest"
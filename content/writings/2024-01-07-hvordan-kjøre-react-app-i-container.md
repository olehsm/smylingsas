---
title: Hvordan kjøre React app i container?
description: ""
date: 2024-01-07T11:31:57.545Z
preview: /preview-images/docker-logo.svg
draft: true
tags:
    - docker
    - react
author: Ole Halvor Smylingsås
pageresources: {}
lastmod: 2024-03-09T15:32:44.953Z
slug: hvordan-kjore-react-app-container
---

<!--more-->

Docker Desktop og kommandolinje

dockerfile benyttes kun for en docker build kommand

Dockerfile
    WORKDIR hva er pathen til working dir inne i containeren
    vi må sette opp docker slik at den kopierer de nødvendige filen fra lokal maskin til kontaineren.
    Om en av kommandoene i dockerfilen feiler så feiler hele docker build - kommandoen og vi får ikke opprettet et nytt image
    entry point vs cmd ??
    
docker images: gir deg oversikt over tilgjengelige images

Docker build (lager image) det kan være lurt å benytte -image som suffix
Docker run (lager en container basert på et image) det kan være lurt å bruke -container som suffix
docker run --name minesweeper-container -p 3000:3000 -d minesweeper-image start (lag container basert på image,kjør på port, kjør i bakgrunnen og eksekver kommando "start")
In powershell you should use ${pwd} instead of $(pwd)
https://stackoverflow.com/questions/45682010/docker-invalid-reference-format


dockerfile vs docker compose


fra image til container


Jeg får ikke hot reload til å kjøre fordi jeg ikke får docker volumes til å fungere. Ser ut til å være et npm problem og ikke et dockerproblem foreløpig: sh: react-scripts: command not found
https://stackoverflow.com/questions/40546231/sh-react-scripts-command-not-found-after-running-npm-start

en løsning kan være å lage et eget volum for node_modules:
-- This is necessary because we want to actively develop our application while running the environment using docker. If we do not map node_modules from the container to the host then we will have to generate another node_modules locally so that our IDEs -- can work properly.



docker desktop dev enviroment
Gi inn et navn på miljøet du vil opprette og en gitadresse. Docker desktop gjør resten for deg. Det vil den oppretter et image, kontainer og volum, samt en ny instans av visual studio code, men heller ikke denne metoden klarer å starte min applikasjon.




https://www.freecodecamp.org/news/how-to-dockerize-a-react-application/


https://stackoverflow.com/questions/69693907/error-err-package-path-not-exported-package-subpath-lib-tokenize-is-not-d


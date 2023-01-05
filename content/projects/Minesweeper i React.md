---
author: Ole Halvor Smylingsås
description: ""
pageresources: []
tags:
  - react
  - git
  - amplify
  - html
slug: minesweeper-react
title: Minesweeper i React
date: 2020-11-09T21:18:55.000Z
draft: false
preview: /preview-images/minesweeper-project.png
lastmod: 2023-01-05T20:09:44.283Z
---

<!--more-->

## Oppsett av git repo og React
https://chocolatey.org/packages/nodejs#install

https://reactjs.org/docs/create-a-new-react-app.html

![Setup git repo](/img/setup-minesweeper-react-git-repo.PNG)

## Legge til støtte for typescript på lokal maskin 
https://create-react-app.dev/docs/adding-typescript/
https://stackoverflow.com/questions/56577201/why-is-isolatedmodules-error-fixed-by-any-import/56577324

## Opprette datamodel
https://www.typescriptlang.org/docs/handbook/classes.html

TileModel og TileType

## Legge til støtte for Typescript på serveren
Det siste bygget feilet i Amplify. I og med at jeg hadde lagt til støtte for TypeScript lokalt måtte jeg også legge til dette i Amplify.yml som beskriver byggoppsettet i Amplify.

{{<highlight yml>}}
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm install
        - npm install typescript
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: build
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
{{</highlight>}}

## Oversikt over komponenter
<App>
    <Board>
        <Tile>

## Utvide spillmodellen for å håndtere brukerklikk
{{<highlight js>}}
const handleClick = () => {
    if(state === TileState.bomb) {
        //console.log("Game over")
        setGameOver(true)
    } else {
        let total = parseInt(content, 10)
        if(total !==0) {
            setTileContent(content)
            if(!tileChecked) setTileChecked(true)
        }  
        if(!tileChecked) setTileChecked(true)
    }
}
{{</highlight>}}

## Dedikert domene
Hoveddomenet smylingsas.net som denne nettsiden benytter er allerede koblet opp til Amazon sin service Route53

Siden jeg ikke hadde særlig lyst til å kjøpe et dedikert domene til et lite sideprosjekt som minesweeper ville jeg heller legge det som et subdomene på smylingsas.net, altså minesweeper.smylingsas.net

Under App settings velg Domain management og deretter Add domain

![Skjema for å koble til domene til amplify applikasjon](/img/amp-add-domain.PNG)

I feltet Domain skrev jeg inn minesweeper.smylingsas.net og trykket på Configure domain. Jeg valgte å fjerne www-alternativet, jeg fjernet også avkrysningsboksen som lager en redirect da jeg ikke ønsket dette. Trykket så på Save.

Og resten gikk av seg selv. 


---
author: Ole Halvor Smylingsås
description: ''
pageresources: []
categories: []
tags:
  - amplify
slug: del-3-byggefeil-amplify
title: Del 3 - Byggefeil i Amplify
date: 2020-12-01T20:48:13.000Z
draft: false
comments: false
preview: /preview-images/minesweeper-project.png
lastmod: '2022-01-27T19:13:15.916Z'
---

<!--more-->
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
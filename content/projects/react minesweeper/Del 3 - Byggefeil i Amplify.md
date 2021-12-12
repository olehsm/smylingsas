---
author: "Ole Halvor Smylingsås"
description: ""
pageresources: []
categories: []
tags: ["amplify"]     
slug: ""
title: "Del 3 - Byggefeil i Amplify"
date: 2020-12-01T21:48:13+01:00
draft: false
comments: false
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
---
author: Ole Halvor Smylingsås
description: ""
pageresources:
  - https://gomakethings.com/converting-strings-to-numbers-with-vanilla-javascript/
categories: []
tags:
  - javascript
slug: hvordan-konvertere-strenger-til-nummer-javascript
title: Konvertere strenger til nummer i Javascript
date: 2020-04-30T18:13:48.000Z
draft: false
comments: false
lastmod: 2022-04-24T16:19:30.172Z
preview: /javascript.jpg
---

TIL: Hvordan bruke parseInt for å konvertere strenger til nummer i Javascript
<!--more-->

{{<highlight js>}}
const str = "100m"
const length = parseInt(str, 10)
// 100  
{{</highlight>}}

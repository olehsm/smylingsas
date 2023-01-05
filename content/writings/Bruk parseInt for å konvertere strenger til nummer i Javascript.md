---
author: Ole Halvor Smylingsås
description: ""
pageresources:
  - https://gomakethings.com/converting-strings-to-numbers-with-vanilla-javascript/
tags:
  - javascript
slug: hvordan-konvertere-strenger-til-nummer-javascript
title: Konvertere strenger til nummer i Javascript
date: 2020-04-30T18:13:48.000Z
draft: false
lastmod: 2023-01-05T20:13:56.345Z
preview: /preview-images/javascript.jpg
---

TIL: Hvordan bruke parseInt for å konvertere strenger til nummer i Javascript
<!--more-->

{{<highlight js>}}
const str = "100m"
const length = parseInt(str, 10)
// 100  
{{</highlight>}}

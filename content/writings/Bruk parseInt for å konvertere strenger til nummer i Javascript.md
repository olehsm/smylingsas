---
author: Ole Halvor Smylingsås
description: ""
pageresources:
  - pageresourceUrl: https://gomakethings.com/converting-strings-to-numbers-with-vanilla-javascript/
    pageresourceTitle: noe greier
    pageresourceText: Microsoft Docs
tags:
  - javascript
slug: hvordan-konvertere-strenger-til-nummer-javascript
title: Konvertere strenger til nummer i Javascript
date: 2020-04-30T18:13:48.000Z
draft: false
lastmod: 2023-11-08T06:41:47.521Z
preview: /preview-images/javascript.jpg
---

TIL: Hvordan bruke parseInt for å konvertere strenger til nummer i Javascript
<!--more-->

{{<highlight js>}}
const str = "100m"
const length = parseInt(str, 10)
// 100  
{{</highlight>}}

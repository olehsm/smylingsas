---
author: Ole Halvor Smylingsås
description: ''
pageresources:
    - 'https://gomakethings.com/converting-strings-to-numbers-with-vanilla-javascript/'
categories: []
tags:
    - js
slug: ''
title: Hvordan konvertere strenger til nummer i Javascript
date: 2020-04-30T18:13:48.000Z
draft: false
comments: false
lastmod: '2021-12-16T20:30:33.888Z'
---

TIL: Hvordan bruke parseInt for å konvertere strenger til nummer i Javascript
<!--more-->

{{<highlight js>}}
const str = "100m"
const length = parseInt(str, 10)
// 100  
{{</highlight>}}

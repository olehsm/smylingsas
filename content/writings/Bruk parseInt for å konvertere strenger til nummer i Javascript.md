---
author: "Ole Halvor Smylingsås"
description: ""
pageresources: ["https://gomakethings.com/converting-strings-to-numbers-with-vanilla-javascript/"]
categories: []
tags: ["js"]     
slug: ""
title: "Bruk parseInt for å konvertere strenger til nummer i Javascript"
date: 2020-04-30T20:13:48+02:00
draft: false
featuretext: ""
featureimg: ""
comments: false
---

TIL: Hvordan bruke parseInt for å konvertere strenger til nummer i Javascript
<!--more-->

{{<highlight js>}}
const str = "100m"
const length = parseInt(str, 10)
// 100  
{{</highlight>}}
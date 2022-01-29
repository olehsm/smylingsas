---
author: Ole Halvor Smylingsås
description: ''
pageresources:
    - 'https://stackoverflow.com/questions/42515588/how-to-set-time-with-date-in-momentjs'
categories: []
tags:
    - javascript
    - momentjs
slug: sett-ny-tid-med-momentjs
title: Sett ny tid med MomentJS
date: 2021-10-10T11:12:18.000Z
draft: false
comments: false
preview: /preview-images/clock.jpg
lastmod: '2022-01-27T19:08:37.760Z'
---

TIL: Hvordan sette ny tid / oppdatere tidspunkt med Moment JS
<!--more-->
const hours: 15;
const minutes: 32;
var date: moment("1946-05-21").set("hour", hours).set("minute", minutes);
or as a combined function

var date: moment("1946-05-21").set({"hour": 15, "minute": 32});
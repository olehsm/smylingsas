---
author: Ole Halvor Smylingsås
description: ""
pageresources:
  - pageresourceUrl: https://stackoverflow.com/questions/42515588/how-to-set-time-with-date-in-momentjs
    pageresourceTitle: Gå til Stack Overflow (Ekstern lenke)
    pageresourceText: Stack Overflow - How to set time and date in MomentJS
tags:
  - javascript
slug: sett-ny-tid-med-momentjs
title: Sett ny tid med MomentJS
date: 2021-10-10T11:12:18.000Z
draft: false
preview: /preview-images/clock.jpg
lastmod: 2023-11-08T06:51:13.541Z
---

TIL: Hvordan sette ny tid / oppdatere tidspunkt med Moment JS
<!--more-->

```js 
const hours: 15;
const minutes: 32;
var date: moment("1946-05-21")
            .set("hour", hours)
            .set("minute", minutes)
```
> Ved å bruke flere en set-metode for minutt og en for sekund

```js
var date: moment("1946-05-21")
            .set({"hour": 15, "minute": 32})
```
> En set-metode som tar et kombinert minutt og sekund - objekt
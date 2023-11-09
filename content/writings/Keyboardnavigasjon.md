---
author: Ole Halvor Smylingsås
description: ""
tags:
    - hugo
    - javascript
slug: tastaturnavigasjon-mellom-artikler
title: Tastaturnavigasjon mellom artikler
date: 2020-07-12T11:38:11.000Z
draft: false
lastmod: 2023-11-09T09:03:29.736Z
preview: /preview-images/javascript.jpg
---

<!--more-->
Ved å bruke Hugo sin innebyggede seksjonnavigasjon, javascript sin querySelector og DOM - eventet 'onkeydown' har jeg nå lagt til muligheten for å kunne bla frem og tilbake mellom artiklene på denne siden med piltastene på tastaturet.


{{<highlight js>}}
document.onkeydown = function(e) {
    switch (e.keyCode) {
    case 37:
        //left key
        document.querySelector(".page-main__previous-link").click();
        break;
    case 39:
        //right key
        document.querySelector(".page-main__next-link").click();
        break;
    }
};
{{</highlight>}}


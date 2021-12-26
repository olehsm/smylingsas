---
author: Ole Halvor Smylingsås
description: ''
pageresources: []
categories: []
tags:
    - navigation
    - hugo
slug: tastaturnavigasjon-mellom-artikler
title: Tastaturnavigasjon mellom artikler
date: 2020-07-12T11:38:11.000Z
draft: false
comments: false
lastmod: '2021-12-26T22:07:47.001Z'
preview: /javascript.jpg
---

Ved å bruke Hugo sin innebyggede seksjonnavigasjon, javascript sin querySelector og DOM - eventet 'onkeydown' har jeg nå lagt til muligheten for å kunne bla frem og tilbake mellom artiklene på denne siden med piltastene på tastaturet.

<!--more-->

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


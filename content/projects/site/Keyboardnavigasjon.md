+++
author = "Ole Halvor Smylingsås"
description = ""
pageresources = []
categories = []
tags = ["navigation", "hugo"]     
slug = ""
title = "Tastaturnavigasjon mellom artikler"
date = 2020-07-12T13:38:11+02:00
draft = "false"
featuretext = ""
featureimg = ""
comments = "false"
+++

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


---
author: Ole Halvor Smylingsås
description: ""
pageresources:
  - pageresourceUrl: https://stackoverflow.com/questions/16192464/window-onerror-not-working-in-chrome
    pageresourceTitle: noe greier
    pageresourceText: Microsoft Docs
tags:
  - javascript
slug: window-onerror-chrome
title: Window.onerror i chrome
date: 2020-04-24T20:06:31.000Z
draft: false
lastmod: 2023-11-08T06:55:18.617Z
preview: /preview-images/angularjs.jpg
---

TIL: window.onerror virker i Google Chrome, men ikke ikke consolet
<!--more-->

{{<highlight js>}}
window.onerror: function() {
    alert("error");
}

hello123world();
{{</highlight>}}

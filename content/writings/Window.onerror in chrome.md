---
author: Ole Halvor Smylingsås
description: ""
pageresources:
  - https://stackoverflow.com/questions/16192464/window-onerror-not-working-in-chrome
tags:
  - javascript
slug: window-onerror-chrome
title: Window.onerror i chrome
date: 2020-04-24T20:06:31.000Z
draft: false
lastmod: 2023-01-05T20:18:08.621Z
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

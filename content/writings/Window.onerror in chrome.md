---
author: Ole Halvor Smylingsås
description: ''
pageresources:
    - 'https://stackoverflow.com/questions/16192464/window-onerror-not-working-in-chrome'
categories: []
tags:
    - js
    - dom
    - chrome
slug: window-onerror-chrome
title: Window.onerror i chrome
date: 2020-04-24T20:06:31.000Z
draft: false
comments: false
lastmod: '2021-12-26T20:04:03.496Z'
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

---
author: Ole Halvor Smylingsås
description: ''
pageresources: []
categories: []
tags:
    - html
    - angularjs
slug: avslutte-en-textarea-tagg
title: Avslutte en textarea tagg
date: 2020-12-16T20:48:34.000Z
draft: false
comments: false
lastmod: '2021-12-28T16:27:25.988Z'
preview: /preview-images/html.jpg
---

<!--more-->

HTML taggen ``` <textarea> ``` må avsluttes med ``` </textarea> ``` siden den kan inneholde data. Derfor fungerer det heller ikke med en self-closing tagg. 
{{<highlight html>}}
<textarea></texarea>
{{</highlight>}}

AngularJS vil stoppe opptegning av html-template dersom en ``` <textarea> ``` er avsluttet galt.

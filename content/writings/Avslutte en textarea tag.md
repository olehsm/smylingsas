---
author: "Ole Halvor Smylingsås"
description: ""
pageresources: []
categories: []
tags: ["html", "angularjs"]     
slug: ""
title: "Avslutte en textarea tagg"
date: 2020-12-16T21:48:34+01:00
draft: false
comments: false
---

<!--more-->

HTML taggen ``` <textarea> ``` må avsluttes med ``` </textarea> ``` siden den kan inneholde data. Derfor fungerer det heller ikke med en self-closing tagg. 
{{<highlight html>}}
<textarea></texarea>
{{</highlight>}}

AngularJS vil stoppe opptegning av html-template dersom en ``` <textarea> ``` er avsluttet galt.
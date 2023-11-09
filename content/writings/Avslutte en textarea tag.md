---
author: Ole Halvor Smylingsås
description: ""
tags:
  - html
  - angularjs
slug: avslutte-en-textarea-tagg
title: Avslutte en textarea tagg
date: 2020-12-16T20:48:34.000Z
draft: false
lastmod: 2023-11-09T09:05:01.668Z
preview: /preview-images/html.jpg
---

<!--more-->

HTML taggen ``` <textarea> ``` må avsluttes med ``` </textarea> ``` siden den kan inneholde data. Derfor fungerer det heller ikke med en self-closing tagg. 

```html
<textarea></textarea>

```

AngularJS vil stoppe opptegning av html-template dersom en ``` <textarea> ``` er avsluttet galt.

---
title: Slå av before / after
description: ""
date: 2022-09-05T07:27:40.309Z
preview: /preview-images/css.jpg
draft: false
tags:
  - css
author: Ole Halvor Smylingsås
pageresources:
  - https://stackoverflow.com/questions/3012716/css-how-to-remove-pseudo-elements-after-before
lastmod: 2023-01-05T20:20:09.544Z
slug: sla-av
---

TIL: Disable :before og :after
<!--more-->
```css
p:after {
   content: none;
}
```

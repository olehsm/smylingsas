---
title: Slå av before / after
description: ""
date: 2022-09-05T07:27:40.309Z
preview: /preview-images/css.jpg
draft: ""
tags:
  - css
categories: []
author: Ole Halvor Smylingsås
pageresources:
  - https://stackoverflow.com/questions/3012716/css-how-to-remove-pseudo-elements-after-before
comments: 2022-09-05T07:27:40.309Z
lastmod: 2022-09-05T07:31:04.952Z
type: ""
slug: sla-av
---

TIL: Disable :before og :after
<!--more-->
```css
p:after {
   content: none;
}
```

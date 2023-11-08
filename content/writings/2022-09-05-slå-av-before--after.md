---
title: Slå av before og after
description: ""
date: 2022-09-05T07:27:40.309Z
preview: /preview-images/css.jpg
draft: false
tags:
  - css
author: Ole Halvor Smylingsås
pageresources:
  - pageresourceUrl: https://stackoverflow.com/questions/3012716/css-how-to-remove-pseudo-elements-after-before
    pageresourceTitle: Gå til Stack overflow (Ekstern lenke)
    pageresourceText: Stack overflow (Remove pseudo elements)
lastmod: 2023-11-08T09:13:36.217Z
slug: sla-av
---

TIL: Disable :before og :after
<!--more-->

```css
p:after {
   content: none;
}
```

---
title: Em versus Rem
description: ""
date: 2022-09-07T09:47:28.077Z
preview: /preview-images/css.jpg
draft: false
tags:
  - css
author: Ole Halvor Smylingsås
pageresources:
  - pageresourceUrl: https://www.freecodecamp.org/news/learn-css-units-em-rem-vh-vw-with-code-examples/
    pageresourceTitle: Gå til FreeCodeCamp (Ekstern lenke)
    pageresourceText: FreeCodeCamp (CSS units)
lastmod: 2023-11-08T10:04:49.002Z
slug: em-rem
---

TIL: EM vs REM
<!--more-->

REM avhenger av hva som er satt på root elementet (HTML)

Standard skriftstørrelse er implisitt satt i nettleseren til å være 16px. Denne størrelsen kan overskrives i HTML - elementet, som vist under

```css
html {
  font-size: 10px
}
```
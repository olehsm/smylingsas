---
title: Em versus Rem
description: ""
date: 2022-09-07T09:47:28.077Z
preview: /preview-images/css.jpg
draft: false
tags:
  - css
categories: []
author: Ole Halvor Smylingsås
pageresources:
  - https://www.freecodecamp.org/news/learn-css-units-em-rem-vh-vw-with-code-examples/
lastmod: 2022-12-30T23:48:17.218Z
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
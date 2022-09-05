---
title: SCSS feil ved bruk av verdier med ulike benevninger
description: ""
date: 2022-09-05T07:46:20.308Z
preview: /preview-images/css.jpg
draft: ""
tags:
  - css
categories: ""
author: Ole Halvor Smylingsås
pageresources: {}
comments: 2022-09-05T07:46:20.308Z
lastmod: 2022-09-05T07:52:30.192Z
type: ""
slug: scss-feil-ved-bruk-av-verdier-med-ulike-benevninger
---

TIL: Ulike CSS-benevninger i SCSS feiler
<!--more-->

Dersom du ønsker å gjøre følgende i CSS. Så vil dette feile SCSS - kompilatoren da den ikke støtter at verdiene har ulik benevning. 

```css
grid-template-columns: 
    1fr 
    min(65ch, calc(100% - 30px)) 
    1fr;
```
> En løsning er gjøre om hele utrykket til strenger!
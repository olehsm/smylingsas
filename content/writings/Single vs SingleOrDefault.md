---
author: Ole Halvor Smylingsås
description: ""
pageresources:
  - https://stackoverflow.com/questions/5619283/should-i-use-single-or-singleordefault-if-there-is-a-chance-that-the-element
tags:
  - csharp
slug: single-singleordefault
title: Single vs SingleOrDefault
date: 2021-02-08T20:19:45.000Z
draft: false
lastmod: 2023-01-05T20:16:52.420Z
preview: /preview-images/dotnet.jpg
---

TIL: Forskjellen på Single() og SingleOrDefault() og når man skal benytte de.
<!--more-->
```c
// if 0 eller 1 elementer er forventet
Bruk SingleOrDefault() 
```
```c
// if 1, ikke 0 eller 2 osv, elementer er forventet
Bruk Single() 
```
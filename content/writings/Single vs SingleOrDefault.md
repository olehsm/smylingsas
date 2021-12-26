---
author: Ole Halvor Smylingsås
description: ''
pageresources:
    - 'https://stackoverflow.com/questions/5619283/should-i-use-single-or-singleordefault-if-there-is-a-chance-that-the-element'
categories: []
tags:
    - csharp
    - linq
slug: single-singleordefault
title: Single vs SingleOrDefault
date: 2021-02-08T20:19:45.000Z
draft: false
comments: false
lastmod: '2021-12-26T20:27:45.047Z'
preview: /preview-images/dotnet.jpg
---

TIL: Forskjellen på Single() og SingleOrDefault() og når man skal benytte de.
<!--more-->
{{<highlight c>}}
    Bruk SingleOrDefault() // if 0 eller 1 elementer er forventet
{{</highlight>}}

{{<highlight c>}}
    Bruk Single() // if 1, ikke 0 eller 2 osv, elementer er forventet
{{</highlight>}}

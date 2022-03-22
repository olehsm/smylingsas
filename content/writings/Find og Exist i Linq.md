---
author: Ole Halvor Smylingsås
description: ''
pageresources:
    - 'https://www.dotnetperls.com/list-find'
categories: []
tags:
    - csharp
    - linq
slug: find-og-exist-linq
title: Find Og Exist I Linq
date: 2021-02-08T20:52:49.000Z
draft: false
comments: false
lastmod: '2021-12-26T20:29:30.627Z'
preview: /preview-images/dotnet.jpg
---

TIL: Exist i Linq
<!--more-->
Find() fungerer på samme måte som find() gjør i Javascript, den returner det første elementet som oppfyller kravet i testen

{{<highlight c>}}
int result = list.Find(item => item > 20);
{{</highlight>}}

Exist() gjør det samme som Find(), men returner i stedet true eller false
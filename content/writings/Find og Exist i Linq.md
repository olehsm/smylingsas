---
author: "Ole Halvor Smylingsås"
description: ""
pageresources: ["https://www.dotnetperls.com/list-find"]
categories: []
tags: ["csharp", "linq"]     
slug: ""
title: "Find Og Exist I Linq"
date: 2021-02-08T21:52:49+01:00
draft: false
comments: false
---

TIL: Exist i Linq
<!--more-->
Find() fungerer på samme måte som find() gjør i Javascript, den returner det første elementet som oppfyller kravet i testen

{{<highlight c>}}
int result = list.Find(item => item > 20);
{{</highlight>}}

Exist() gjør det samme som Find(), men returner i stedet true eller false
---
author: "Ole Halvor Smylingsås"
description: ""
pageresources: []
categories: []
tags: ["csharp", "linq"]     
slug: ""
title: "Linq .Include"
date: 2020-01-28T22:42:09+01:00
draft: false
comments: false
---

TIL: For å bruke Include() i en Linq-spørring...
<!--more-->

{{<highlight c>}}
var matchList = context.Matches
                    .include(s => s.Team);
{{</highlight>}}

må alltid dette namespacet være inkludert. (Visual Studio vil ikke alltid forstå at det er denne som mangler)

{{<highlight c>}}
using System.Data.Entity;
{{</highlight>}}
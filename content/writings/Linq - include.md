---
author: Ole Halvor Smylingsås
description: ""
pageresources: []
categories: []
tags:
  - csharp
slug: linq-include
title: Linq .Include
date: 2020-01-28T21:42:09.000Z
draft: false
comments: false
lastmod: 2021-12-26T20:25:39.899Z
preview: /preview-images/dotnet.jpg
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

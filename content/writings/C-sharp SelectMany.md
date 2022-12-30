---
author: Ole Halvor Smylingsås
description: ""
categories: []
tags:
  - csharp
slug: selectmany
title: C# SelectMany
date: 2019-09-09T14:58:09.000Z
draft: false
comments: false
lastmod: 2022-12-30T23:35:26.623Z
preview: /preview-images/dotnet.jpg
---

TIL: Flat ut et multidimensjonalt array i C# med .SelectMany() og .Select().
<!--more-->

{{<highlight c>}}
var matchList = allTeams
        .SelectMany(team => team.Players
            .Select(player => new Match {
                Hometeam = team.Name,
                Awayteam = team.Name,,
                Goalscorer = player.LastName,
            })).ToList();
{{</highlight>}}



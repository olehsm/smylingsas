---
author: Ole Halvor Smylingsås
description: ""
tags:
  - csharp
slug: selectmany
title: C# SelectMany
date: 2019-09-09T14:58:09.000Z
draft: false
lastmod: 2023-01-05T20:14:26.258Z
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



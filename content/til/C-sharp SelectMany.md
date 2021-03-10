+++
author = "Ole Halvor Smylingsås"
description = ""
resources = []
categories = []
tags = ["csharp", "linq"]  
slug = ""
title = "C# SelectMany"
date = 2019-09-09T16:58:09+02:00
draft = "false"
featuretext = ""
featureimg = ""
comments = "false"
+++
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



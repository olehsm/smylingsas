+++
author = "Ole Halvor Smylingsås"
description = ""
resources = []
categories = []
tags = ["csharp", "linq"]  
slug = ""
title = "SelectMany"
date = 2019-09-09T16:58:09+02:00
draft = "false"
featuretext = ""
featureimg = ""
comments = "false"
+++


{{<highlight c>}}
var matchList = allTeams
        .SelectMany(team => team.Players
            .Select(player => new Match {
                Hometeam = team.Name,
                Awayteam = team.Name,,
                Goalscorer = player.LastName,
            })).ToList();
{{</highlight>}}


Flatten a C# multi dimensional array using SelectMany and Select
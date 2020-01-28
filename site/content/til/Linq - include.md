+++
author = "Ole Halvor Smylingsås"
description = ""
pageresources = []
categories = []
tags = ["C Sharp", "LINQ"]     
slug = ""
title = "Linq   Include"
date = 2020-01-28T22:42:09+01:00
draft = "false"
featuretext = ""
featureimg = ""
comments = "false"
+++

In order to use the Include() in a Linq statement...

{{<highlight c>}}
var matchList = context.Matches
                    .include(s => s.Team);
{{</highlight>}}

always put

{{<highlight c>}}
using System.Data.Entity;
{{</highlight>}}
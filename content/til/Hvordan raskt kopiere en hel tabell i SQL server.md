---
author: "Ole Halvor Smylingsås"
description: ""
pageresources: []
categories: []
tags: ["sql"]     
slug: ""
title: "Hvordan raskt kopiere en hel tabell i SQL Server"
date: 2021-05-25T21:23:43+02:00
draft: false
featuretext: ""
featureimg: ""
comments: false
---

TIL: Temporær kopi av tabell i SQL Server

<!--more-->
{{<highlight sql>}}
SELECT * INTO olebak
FROM Animals;
{{</highlight>}}

### Syntax
{{<highlight sql>}}
SELECT *
INTO newtable
FROM oldtable
WHERE condition;
{{</highlight>}}
---
author: "Ole Halvor Smylingsås"
description: ""
pageresources: []
categories: []
tags: ["sql", "tsql", "dapper"]     
slug: ""
title: "Legg til kun rad om den ikke finnes"
date: 2021-05-25T21:38:10+02:00
draft: false
featuretext: ""
featureimg: ""
comments: false
---

TIL: Hindre duplikate Guids i samme tabell med asynkron løsning
<!--more-->
{{<highlight sql>}}
BEGIN
   IF NOT EXISTS (SELECT * FROM Hyllevarer 
                   WHERE Id: @Id)
   BEGIN
       INSERT INTO Hyllevarer (Id, Varenavn)
       VALUES (@Id, @Varenavn,)
   END
END
{{</highlight>}}
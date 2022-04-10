---
author: Ole Halvor Smylingsås
description: ""
pageresources: []
categories: []
tags:
  - sql
slug: legg-til-kun-en-rad-om-den-ikke-finnes
title: Legg til kun en rad om den ikke finnes
date: 2021-05-25T19:38:10.000Z
draft: false
comments: false
lastmod: 2022-04-10T16:19:36.080Z
preview: /preview-images/microsoft-sql-server4529.jpg
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

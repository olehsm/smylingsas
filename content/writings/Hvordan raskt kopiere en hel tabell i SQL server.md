---
author: Ole Halvor Smylingsås
description: ""
tags:
  - sql
slug: hvordan-raskt-kopiere-en-hel-tabell-sql-server
title: Hvordan raskt kopiere en hel tabell i SQL Server
date: 2021-05-25T19:23:43.000Z
draft: false
lastmod: 2023-11-09T09:04:06.552Z
preview: /preview-images/microsoft-sql-server4529.jpg
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

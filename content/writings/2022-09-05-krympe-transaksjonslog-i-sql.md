---
title: Krympe transaksjonslog i SQL
description: ""
date: 2022-09-05T06:06:37.229Z
preview: /preview-images/microsoft-sql-server4529.jpg
draft: ""
tags:
  - sql
categories: ""
author: Ole Halvor Smylingsås
pageresources:
  - https://docs.microsoft.com/en-us/sql/t-sql/database-console-commands/dbcc-shrinkfile-transact-sql?view=sql-server-ver16
comments: 2022-09-05T06:06:37.229Z
lastmod: 2022-09-05T06:25:08.912Z
slug: krympe-transaksjonslog-sql
---

TIL: Database shrinkfile
<!--more-->
Følgende kommando krymper logfilen til den databasen du er er i akkurat nå (Om du har rettigheter til kjøre kommandoen). 
```
DBCC SHRINKFILE ('logname_log').
```

### Hvorfor må man kjøre en slik kommando?
Dersom det gjøres tester på store dataset. Det spiller ingen rolle om det er INSERT, UPDATE eller DELETE, transaksjonsloggen vil alltid utvide seg, slik at det er mulig å rulle tilbake. Transaksjonsloggen vil dog til slutt bli full og da er det ikke lenger mulig å kjøre SQL - kommandoer andre enn SELECT.
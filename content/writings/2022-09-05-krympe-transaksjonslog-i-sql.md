---
title: Krympe transaksjonslog i SQL
description: ""
date: 2022-09-05T06:06:37.229Z
preview: /preview-images/microsoft-sql-server4529.jpg
draft: false
tags:
  - sql
author: Ole Halvor Smylingsås
pageresources:
  - pageresourceUrl: https://docs.microsoft.com/en-us/sql/t-sql/database-console-commands/dbcc-shrinkfile-transact-sql?view=sql-server-ver16
    pageresourceTitle: Gå til Microsoft (Ekstern lenke)
    pageresourceText: Microsoft Docs (Database console commands)
lastmod: 2024-07-14T11:23:05.905Z
slug: krympe-transaksjonslog-sql
---

TIL: Database shrinkfile
<!--more-->
Følgende kommando krymper logfilen til den databasen du er er i akkurat nå (Om du har rettigheter til kjøre kommandoen). 

```sql
DBCC SHRINKFILE ('logname_log').
```


### Hvorfor må man kjøre en slik kommando?
Dersom det gjøres tester på store dataset. Det spiller ingen rolle om det er INSERT, UPDATE eller DELETE, transaksjonsloggen vil alltid utvide seg, slik at det er mulig å rulle tilbake. Transaksjonsloggen vil dog til slutt bli full og da er det ikke lenger mulig å kjøre SQL - kommandoer andre enn SELECT.
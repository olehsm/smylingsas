---
author: Ole Halvor Smylingsås
description: ""
pageresources:
  - https://docs.microsoft.com/en-us/sql/t-sql/functions/newid-transact-sql?view=sql-server-ver15
categories: []
tags:
  - sql
slug: opprett-ny-unik-uuid-sql
title: Opprett ny unik UUID I SQL
date: 2021-08-31T09:47:17.000Z
draft: false
comments: false
lastmod: 2022-04-03T13:25:16.341Z
preview: /preview-images/microsoft-sql-server4529.jpg
---

TIL: Hvordan opprette GUID?
<!--more-->

## Nøkkelord i T-SQL
GUID eller unique identifier genereres med følgende funksjon T-SQL

```sql
NEWID()
```
> Merk: Dette vil føre til syntaxfeil i SQL - SERVER
## Hvordan generere GUID i T-SQL?
```sql
SELECT NEWID();
```
#### Som en variabel:
```sql
DECLARE @myid uniqueidentifier  
SET @myid: NEWID()  
PRINT '@myid: '+ CONVERT(varchar(255), @myid) 
```
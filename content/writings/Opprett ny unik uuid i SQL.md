---
author: Ole Halvor Smylingsås
description: ""
pageresources:
  - pageresourceUrl: https://docs.microsoft.com/en-us/sql/t-sql/functions/newid-transact-sql?view=sql-server-ver15
    pageresourceTitle: Gå til Microsoft docs
    pageresourceText: Microsoft Docs - newid()
tags:
  - sql
slug: opprett-ny-unik-uuid-sql
title: Opprett ny unik UUID I SQL
date: 2021-08-31T09:47:17.000Z
draft: false
lastmod: 2023-11-08T06:48:21.620Z
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
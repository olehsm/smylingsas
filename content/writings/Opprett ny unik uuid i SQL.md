---
author: Ole Halvor Smylingsås
description: ''
pageresources:
    - 'https://docs.microsoft.com/en-us/sql/t-sql/functions/newid-transact-sql?view=sql-server-ver15'
categories: []
tags:
    - sql
slug: opprett-ny-unik-uuid-sql
title: Opprett ny unik UUID I SQL
date: 2021-08-31T09:47:17.000Z
draft: false
comments: false
lastmod: '2021-12-28T15:54:13.969Z'
preview: /preview-images/microsoft-sql-server4529.jpg
---

TIL: Hvordan opprette GUID?
<!--more-->

## Nøkkelord i T-SQL
GUID eller unique identifier genereres med følgende funksjon T-SQL
{{<highlight sql>}}
NEWID()
{{</highlight>}}
#### Merk: Dette vil føre til syntaxfeil i SQL - SERVER

## Hvordan generere GUID i T-SQL?
{{<highlight sql>}}
SELECT NEWID();
{{</highlight>}}

<br />
#### Som en variabel:
{{<highlight sql>}}
DECLARE @myid uniqueidentifier  
SET @myid: NEWID()  
PRINT '@myid: '+ CONVERT(varchar(255), @myid) 
{{</highlight>}}





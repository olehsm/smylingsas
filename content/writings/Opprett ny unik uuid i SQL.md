---
author: "Ole Halvor Smylingsås"
description: ""
pageresources: ["https://docs.microsoft.com/en-us/sql/t-sql/functions/newid-transact-sql?view=sql-server-ver15"]
categories: []
tags: ["sql"]     
slug: ""
title: "Opprett ny unik UUID I SQL"
date: 2021-08-31T11:47:17+02:00
draft: false
featuretext: ""
featureimg: ""
comments: false
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






---
author: Ole Halvor Smylingsås
description: ""
pageresources:
  - pageresourceUrl: https://docs.microsoft.com/en-us/sql/t-sql/functions/json-query-transact-sql?view=sql-server-ver15
    pageresourceTitle: noe greier
    pageresourceText: Microsoft Docs
tags:
  - sql
slug: hvordan-bruke-json-query-sql
title: Hvordan bruke JSON_QUERY i T-SQL
date: 2019-10-19T19:59:42.000Z
draft: false
lastmod: 2023-11-08T06:46:24.365Z
preview: /preview-images/microsoft-sql-server4529.jpg
---


<!--more-->

## JSON_QUERY()

```sql
SELECT
  *
FROM t_Table1
WHERE JSON_QUERY([data], '$.username') = 'user1' 
```




---
author: Ole Halvor Smylingsås
description: ""
pageresources:
  - https://docs.microsoft.com/en-us/sql/t-sql/functions/json-query-transact-sql?view=sql-server-ver15
tags:
  - sql
slug: hvordan-bruke-json-query-sql
title: Hvordan bruke JSON_QUERY i T-SQL
date: 2019-10-19T19:59:42.000Z
draft: false
lastmod: 2023-09-15T08:45:22.320Z
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




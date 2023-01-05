---
author: Ole Halvor Smylingsås
description: ""
pageresources:
  - https://stackoverflow.com/questions/2003505/how-do-i-delete-a-git-branch-locally-and-remotely
tags:
  - git
slug: slette-brancher-git
title: Slette brancher i git
date: 2019-10-19T19:51:36.000Z
draft: false
lastmod: 2023-01-05T20:15:38.649Z
preview: /preview-images/git.jpg
---

Hvordan slette remote og local branch i git
<!--more-->

Lokalt
{{<highlight bash>}}
$ git branch -d < branch_name >
{{</highlight>}}

På server
{{<highlight bash>}}
$ git push -d < remote_name > < branch_name >
{{</highlight>}}

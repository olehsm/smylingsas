---
author: Ole Halvor Smylingsås
description: ''
pageresources:
    - 'https://stackoverflow.com/questions/2003505/how-do-i-delete-a-git-branch-locally-and-remotely'
categories: []
tags:
    - git
slug: ''
title: Slette brancher i git
date: 2019-10-19T19:51:36.000Z
draft: false
comments: false
lastmod: '2021-12-16T20:36:36.163Z'
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

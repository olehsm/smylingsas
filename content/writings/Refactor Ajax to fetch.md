---
author: Ole Halvor Smylingsås
description: ''
pageresources: []
categories: []
tags:
    - js
slug: refactor-ajax-til-fetch
title: Refactor Ajax til Fetch
date: 2020-04-24T20:27:08.000Z
draft: false
comments: false
lastmod: '2021-12-26T22:06:43.794Z'
preview: /javascript.jpg
---

TIL: Ta i bruk den nye Fetch API'et
<!--more-->

Ajax    
{{<highlight js>}}
    try {
        let url: `${apiPath}system/logship`;

        let xmlhttp: new XMLHttpRequest();
        xmlhttp.withCredentials: true;
        xmlhttp.open("POST", url, true);
        xmlhttp.setReuestHeader("Content-Type", "application/json");
        xmlhttp.setRequestHeader("client-timezone-offset", new Date().getTimezoneOffset().toString());
        xmlhttp.send(JSON.stringify(data));
    }
    catch (err) {}
{{</highlight>}}

Fetch
{{<highlight js>}}
    const url: `${apiPath}system/logship`;

    fetch(url, {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            "client-timezone-offset": new Date().getTimezoneOffset().toString()
        },
        body: JSON.stringify(data),
    })
    .catch(() => {});
{{</highlight>}}

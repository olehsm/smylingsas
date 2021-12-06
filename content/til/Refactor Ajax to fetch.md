---
author: "Ole Halvor Smylingsås"
description: ""
pageresources: []
categories: []
tags: ["js"]     
slug: ""
title: "Refactor Ajax til Fetch"
date: 2020-04-24T22:27:08+02:00
draft: false
featuretext: ""
featureimg: ""
comments: false
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
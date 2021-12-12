---
author: Ole Halvor Smylingsås
description: ''
pageresources: []
categories: []
tags:
    - js
    - react
    - typescript
    - stacktracejs
slug: logging-av-feil-klient-nettleser-del-2-react
title: Logging av feil i klient/nettleser. Del 2 - React
date: 2020-04-24T20:30:53.000Z
draft: false
comments: false
lastmod: '2021-12-12T14:20:39.490Z'
---

Følgende kodesnutt viser logging av feil i nettleser med React og Stacktrace.js
<!--more-->

{{<highlight js>}}
import { getPath } from "src/infrastructure/pathProvider"
import StackTrace from "stacktrace-js"

export const enableLogShipping = () => {

    window.onerror = (message, source, lineno, colno, error) => {
        StackTrace.fromError(error!)
                .then(stackFrames => {
                    const stringifiedStack = stackFrames.map(stackFrame => stackFrame.toString()).join('\n')
                    shipToServer({ 
                        message: message, 
                        source: stackFrames[0].fileName, 
                        lineno: stackFrames[0].lineNumber, 
                        colno: stackFrames[0].columnNumber, 
                        stack:stringifiedStack, 
                        url: document.location.href 
                    }); 
                })
                .catch(() => {})
        return false;
    }
}

const shipToServer = (data: any) => {
    let apiPath = getPath("/api/")
    let url = `${apiPath}system/logship`;
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
    .catch(() => {})
}
{{</highlight>}}

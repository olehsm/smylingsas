---
author: Ole Halvor Smylingsås
description: ""
pageresources: []
tags:
  - javascript
  - react
  - angularjs
slug: logging-av-feil-klient-nettleser
title: Logging av feil i klient/nettleser.
date: 2020-04-24T20:30:53.000Z
draft: false
lastmod: 2023-01-05T20:09:32.948Z
preview: /preview-images/logging.jpg
---

Følgende kodesnutter viser logging av feil i nettleser med React/AngularJS og Stacktrace.js
<!--more-->

## React
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

## AngularJS
{{<highlight js>}}
import angular from "angular";
import StackTrace from "stacktrace-js"


const shipToServer = (data, apiPath) => {
    const url = `${apiPath}system/logship`;

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
}


angular.module(require("./"))
    .factory('$exceptionHandler', ['pathProvider', function(pathProvider) {
        return function myExceptionHandler(exception, cause) {
            const apiPath = pathProvider.getPath("/api/");
            if (apiPath == undefined) {
                return;
            }
            
            StackTrace.fromError(exception)
                .then(stackFrames => {
                    const stringifiedStack = stackFrames.map(stackFrame => stackFrame.toString()).join('\n')
                    shipToServer({ 
                        message: exception.message, 
                        source: stackFrames[0].fileName, 
                        lineno: stackFrames[0].lineNumber, 
                        colno: stackFrames[0].columnNumber, 
                        stack:stringifiedStack, 
                        url: document.location.href 
                    }, apiPath); 
                })
                .catch(() => {})

            return false;
        };
    }]);

{{</highlight>}}

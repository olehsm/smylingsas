---
author: "Ole Halvor Smylingsås"
description: ""
pageresources: []
categories: []
tags: ["js", "angularjs", "stacktracejs"]     
slug: ""
title: "Logging av feil i klient/nettleser. Del 1 - AngularJS"
date: 2020-04-24T22:30:34+02:00
draft: false
featuretext: ""
featureimg: ""
comments: false
---

Følgende kodesnutt viser logging av feil i nettleser med AngularJS og Stacktrace.js
<!--more-->

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
---
author: Ole Halvor Smylingsås
description: ''
pageresources:
    - 'https://stackoverflow.com/questions/16192464/window-onerror-not-working-in-chrome/32595040#32595040'
    - 'https://docs.angularjs.org/api/ng/service/$exceptionHandler'
categories: []
tags:
    - js
    - dom
    - angularjs
slug: ''
title: Window.onerror virker ikke i AngularJS
date: 2020-04-24T20:17:45.000Z
draft: false
comments: false
lastmod: '2021-12-16T20:43:25.029Z'
preview: /preview-images/angularjs.jpg
---

TIL: Om man kjører AngularJS, vil ikke klientfeil dukke opp i window.onerror.
<!--more-->

Klientfeil blir slukt av AngularJS. Bruk i steden denne "factory" -metoden

{{<highlight js>}}
angular
    .module('exceptionOverwrite', [])
    .factory('$exceptionHandler', 
                ['$log', 'logErrorsToBackend', 
                function($log, logErrorsToBackend) {
                    return function myExceptionHandler(exception, cause) {
                    logErrorsToBackend(exception, cause);
                    $log.warn(exception, cause);
                };
            }]);
{{</highlight>}}

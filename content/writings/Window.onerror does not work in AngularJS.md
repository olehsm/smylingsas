---
author: Ole Halvor Smylingsås
description: ""
pageresources:
  - pageresourceUrl: https://stackoverflow.com/questions/16192464/window-onerror-not-working-in-chrome/32595040#32595040
    pageresourceTitle: noe greier
    pageresourceText: Microsoft Docs
  - pageresourceUrl: https://docs.angularjs.org/api/ng/service/$exceptionHandler
    pageresourceTitle: noe greier
    pageresourceText: Microsoft Docs
tags:
  - javascript
  - angularjs
slug: ""
title: Window.onerror virker ikke i AngularJS
date: 2020-04-24T20:17:45.000Z
draft: false
lastmod: 2023-11-08T06:54:49.965Z
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

+++
author = "Ole Halvor Smylingsås"
description = ""
pageresources = ["https://stackoverflow.com/questions/16192464/window-onerror-not-working-in-chrome/32595040#32595040", "https://docs.angularjs.org/api/ng/service/$exceptionHandler"]
categories = []
tags = ["js", "dom", "angularjs"]     
slug = ""
title = "Window.onerror does not work in AngularJS"
date = 2020-04-24T22:17:45+02:00
draft = "false"
featuretext = ""
featureimg = ""
comments = "false"
+++

TIL: Using Angular, errors wont pass through window.onerror. Handle them using "factory"
<!--more-->

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
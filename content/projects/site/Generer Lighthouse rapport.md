+++
author = "Ole Halvor Smylingsås"
description = ""
pageresources = ["https://developers.google.com/web/tools/lighthouse/"]
categories = []
tags = ["lighthouse"]     
slug = ""
title = "Generer Lighthouse rapport 07-06-2020"
date = 2020-06-07T11:51:07+02:00
draft = "false"
featuretext = ""
featureimg = ""
comments = "false"
+++
Hva er Lighthouse?
Lighthouse is an open-source, automated tool for improving the quality of web pages. 
<!--more-->

You can run it against any web page, public or requiring authentication. It has audits for performance, accessibility, progressive web apps, SEO and more.


How to generate a Lighthouse report
Full guide: [Developers.google.com](https://developers.google.com/web/tools/lighthouse/#devtools)
Run Lighthouse in Chrome DevTools
Lighthouse powers the Lighthouse panel of Chrome DevTools. To run a report:

1. Download Google Chrome for Desktop.
1. In Google Chrome, go to the URL you want to audit. You can audit any URL on the web.
1. Open Chrome DevTools.
1. Click the Lighthouse tab.

Results for current page
Lighthouse can test and generate reports for several types of pages. I have chosen to run it on the homepage, a list page and and article page

The homepage
![Lighthouse report homepage](/img/lighthouse-homepage.PNG)

Full report
[Full Lighthouse for Homepage](/smylingsas.net-20200607T114017.html)

The list page
![Lighthouse report list page](/img/lighthouse-list.PNG)

The article page
![Lighthouse report article page](/img/lighthouse-article.PNG)

Goals
The main goal is of course to get as close to a score of 100 in all categories. The side goal is to get all categories above the score of 89




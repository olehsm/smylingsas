---
author: Ole Halvor Smylingsås
description: ''
pageresources:
    - 'https://www.eonesolutions.com/help-article/this-implementation-is-not-part-of-the-windows-platform-fips-validated-cryptographic-algorithms/'
    - 'https://www.howtogeek.com/245859/why-you-shouldnt-enable-fips-compliant-encryption-on-windows/'
    - 'https://en.wikipedia.org/wiki/Federal_Information_Processing_Standards'
categories: []
tags: []
slug: windows-platform-fips
title: Windows Platform FIPS
date: 2021-08-31T10:08:25.000Z
draft: false
comments: false
preview: /keylock.jpg
lastmod: '2021-12-12T11:52:02.124Z'
---



Windows har en innstilling som hindrer applikasjoner på din maskin å benytte krypteringsløsninger som ikke er i samsvar med ``Federal Information Processing Standards(FIPS)``
<!--more-->

## Hva er FIPS?
``The United States' Federal Information Processing Standards (FIPS) are publicly announced standards developed by the National Institute of Standards and Technology for use in computer systems by non-military American government agencies and government contractors``

For en tid tilbake dukket følgende feilmelding opp i applikasjonen jeg jobber på: <br/>
``This implementation is not part of the Windows Platform FIPS validated cryptographic algorithms``
<br/><br/> 


## Hva gjør FIPS - mode
``Enabling FIPS mode makes Windows and its subsystems use only FIPS-validated cryptographic algorithms. An example is Schannel, which is the system component that provides SSL and TLS to applications. When FIPS mode is enabled, Schannel disallows SSL 2.0 and 3.0, protocols that fall short of the FIPS standards. Applications such as web browsers that use Schannel then cannot connect to HTTPS web sites that don’t use at least TLS 1.0. (Note that the same results can be achieved without FIPS mode by configuring Schannel according to KB 245030 and this blog post .) Enabling FIPS mode also causes the .NET Framework to disallow the use of non-validated algorithms.``

## Hvordan slå på (eller slå av) FIPS-mode i Windows
...

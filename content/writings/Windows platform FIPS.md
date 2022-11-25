---
author: Ole Halvor Smylingsås
description: ""
pageresources:
  - https://www.eonesolutions.com/help-article/this-implementation-is-not-part-of-the-windows-platform-fips-validated-cryptographic-algorithms/
  - https://www.howtogeek.com/245859/why-you-shouldnt-enable-fips-compliant-encryption-on-windows/
  - https://en.wikipedia.org/wiki/Federal_Information_Processing_Standards
  - https://docs.microsoft.com/en-us/windows/security/threat-protection/security-policy-settings/system-cryptography-use-fips-compliant-algorithms-for-encryption-hashing-and-signing
  - https://csrc.nist.gov/publications/detail/fips/140/2/final
categories: []
tags:
  - misc
slug: windows-platform-fips
title: Windows Platform FIPS
date: 2021-08-31T10:08:25.000Z
draft: false
comments: false
preview: /preview-images/keylock.jpg
lastmod: 2022-11-25T22:11:16.619Z
---



Federal Information Processing Standards(FIPS)
<!--more-->

Windows har en innstilling som hindrer applikasjoner på din maskin å benytte krypteringsløsninger som ikke er i samsvar med ``Federal Information Processing Standards(FIPS)``

## Hva er FIPS?
``The United States' Federal Information Processing Standards (FIPS) are publicly announced standards developed by the National Institute of Standards and Technology for use in computer systems by non-military American government agencies and government contractors``

For en tid tilbake dukket følgende feilmelding opp i applikasjonen jeg jobber på: <br/>
``This implementation is not part of the Windows Platform FIPS validated cryptographic algorithms``
<br/><br/> 


## Hva gjør FIPS - mode
``Enabling FIPS mode makes Windows and its subsystems use only FIPS-validated cryptographic algorithms. An example is Schannel, which is the system component that provides SSL and TLS to applications. When FIPS mode is enabled, Schannel disallows SSL 2.0 and 3.0, protocols that fall short of the FIPS standards. Applications such as web browsers that use Schannel then cannot connect to HTTPS web sites that don’t use at least TLS 1.0. (Note that the same results can be achieved without FIPS mode by configuring Schannel according to KB 245030 and this blog post .) Enabling FIPS mode also causes the .NET Framework to disallow the use of non-validated algorithms.``

## Hvordan slå på (eller slå av) FIPS-mode i Windows
> Har man Home - edition av Windows 10/11 vil ikke denne metoden fungere ut av boksen. Secpol.msc må manuelt lastes ned før man kan bruke Local Security Policy

Det er flere måter å slå av eller på FIPS mode i Windows
 - Windows Powershell kommando
 - Fra start meny
 - +++

![Start Local Security Policy fra Powershell](/img/powershell-fips.png)

Det går også fint å søke opp Local Security Policy fra Start - menyen.

![Local Security Policy overview](/img/Local-Security-Policy.png)
> Åpne *Local Policies* og deretter *Security Options*

![Slå av fips 1](/img/fips1.PNG)

![Slå av fips 2](/img/fips2.PNG)

![Slå av fips 3](/img/fips3.PNG)
> I listen over *Policies* velger du *Systemkryptografi: Bruk FIPS-kompatible algoritmer til kryptering, hash-kodisk og sign..*


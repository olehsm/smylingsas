---
author: Ole Halvor Smylingsås
description: ""
pageresources:
  - pageresourceUrl: https://www.eonesolutions.com/help-article/this-implementation-is-not-part-of-the-windows-platform-fips-validated-cryptographic-algorithms/
    pageresourceTitle: Gå til Eone Solutions (Ektern lenke)
    pageresourceText: This implementation is not part of the windows platform fips validated cryptographic algorithms
  - pageresourceUrl: https://www.howtogeek.com/245859/why-you-shouldnt-enable-fips-compliant-encryption-on-windows/
    pageresourceTitle: Gå til How to Geek (Ekstern lenke)
    pageresourceText: Why you shouldnt enable fips compliant encryption on windows
  - pageresourceUrl: https://en.wikipedia.org/wiki/Federal_Information_Processing_Standards
    pageresourceTitle: Gå til Wikipedia EN (Ekstern lenke)
    pageresourceText: Wikipedia (Federal information Processing Standards)
  - pageresourceUrl: https://docs.microsoft.com/en-us/windows/security/threat-protection/security-policy-settings/system-cryptography-use-fips-compliant-algorithms-for-encryption-hashing-and-signing
    pageresourceTitle: Gå til Microsoft Docs (Ekstern lenke)
    pageresourceText: Microsoft Docs
  - pageresourceUrl: https://csrc.nist.gov/publications/detail/fips/140/2/final
    pageresourceTitle: Gå til National Institute of Standards and Technology (Ektern lenke)
    pageresourceText: Security Requirements for Cryptographic Modules
tags:
  - misc
slug: windows-platform-fips
title: Windows Platform FIPS
date: 2021-08-31T10:08:25.000Z
draft: false
preview: /preview-images/keylock.jpg
lastmod: 2023-11-08T06:56:41.334Z
resources:
  - name: mainimage
    src: images/keylock.jpg
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

![Slå av fips 1](images/fips1.PNG)

![Slå av fips 2](images/fips2.PNG)

![Slå av fips 3](images/fips3.PNG)
> I listen over *Policies* velger du *Systemkryptografi: Bruk FIPS-kompatible algoritmer til kryptering, hash-kodisk og sign..*


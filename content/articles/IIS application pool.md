+++
author = "Ole Halvor Smylingsås"
description = ""
pageresources = []
categories = []
tags = ["iis"]
slug = ""
title = "IIS Application Pool - liten oversikt"
date = 2021-02-18T22:22:00+01:00
draft = "false"
featuretext = ""
featureimg = ""
comments = "false"
+++

En Application pool er en mekanisme i IIS for å isolere webapplikasjoner fra hverandra. Slik at det er mulig å ha unike konfikurasjoner for hver applikasjon (ressurser, sikkert e.l.) og ikke minst hindrer at feil i en applikasjon ikke påvirker andre applikasjoner som kjører på samme server.

<!--more-->

## Hva er Internet Information Service?
Internet Information Service (fra nå IIS) er webserverprogramvare fra Microsoft som kjører på Windows

Hver application pool har sin egen arbeidsprosess, denne arbeidsprossesen er en windowsprosess kjent som w3wp.exe. Denne prosessen håndterer forespørsler sendt til webserveren.

## Hva "application pool recycling" i IIS?
Med recycling menes det at arbeidsprosessen (w3wp.exe) blir terminert og erstattet med en ny. Recycle blir gjort for å hindre kræsj i en applikasjon, heng eller minnelekkasje.

## Antall applikasjoner i en application pool - best praksis
Hver eneste application pool er en instans av w3wp.exe. En arbeidsprosess for en eller flere websider/ webapplikasjoner. Ved å plassere hver webapplikasjon i sin egen dedikerte application pool sikrer man seg mot at potensielle problemer som kan oppstå i denne applikasjon ikke ødelegger for andre applikasjoner som kjører på serveren. En slik arkitektur kommer ikke uten bakside, blant annet i forhold til ressursbruk.

## Fordeler og ulemper ved å slå av "overlapped recycle"
En ulempe ved å slå av denne instilligen er et at applikasjonen(e) som tilhører denne application poolen vil stoppe opp og bli utilgjengelig for omverdnen i tidsrommet fra den nåværende w3wp.exe - prossesen blir terminert til en ny blir startet. Velger man å kjøre med "overlappet recycle" vil den nye w3wp.exe - prossesen ta over jobben til den forrige på en sømløs måte og man slipper unna kortere nedetid.

http://msdn.microsoft.com/en-us/library/ms525803(v=vs.90).aspx
> When applications are recycled, it is possible for session state to be lost. During an overlapped recycle, the  occurrence of multi-instancing is also a possibility.
Loss of session state: Many IIS applications depend on the ability to store state. IIS 6.0 can cause state to  > be lost if it automatically shuts down a worker process that has timed out due to idle processing, or if it  restarts a worker process during recycling.
Occurrence of multi-instancing: In multi-instancing, two or more instances of a process run simultaneously. Depending on how the application pool is configured, it is possible for multiple instances of a worker process to run, each possibly loading and running the same application code. The occurrence of an overlapped recycle is an example of multi-instancing, as is a Web garden in which two or more processes serve the application pool regardless of the recycling settings.
If your application cannot run in a multi-instance environment, you must configure only one worker process for an application pool (which is the default value), and disable the overlapped recycling feature if application pool recycling is being used.

| Attribute | Description |
| ----------- | ----------- |
| disallowOverlappingRotation | Optional Boolean attribute. Specifies whether the WWW Service should start another worker process to replace the existing worker process while that process is shutting down. The value of this property should be set to true if the worker process loads any application code that does not support multiple worker processes. The default value is false |




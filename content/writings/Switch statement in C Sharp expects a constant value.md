---
author: Ole Halvor Smylingsås
description: ""
pageresources:
  - https://stackoverflow.com/questions/7593377/switch-case-in-c-sharp-a-constant-value-is-expected
tags:
  - csharp
slug: switch-utrykk-krever-en-konstant-verdi
title: Switch-utrykk i C# krever en konstant verdi
date: 2020-02-23T17:54:41.000Z
draft: false
lastmod: 2023-01-05T20:16:37.028Z
preview: /preview-images/dotnet.jpg
---

TIL: Et Switch-uttrykk i C# kan ikke inneholve evaluerte uttrykk i case. De må være statisk evaluert.
<!--more-->

Koden nedenfor vil forårsake kompileringsfeil:

{{<highlight c>}}
switch(query.OrderType) {
    case EstimatedToolOrderType.ServiceOrder:
        return ToolRequirements(query.OrderNumber, ToolsRequirementPlanningOrderType.ServiceOrder);

    case EstimatedToolOrderType.SFCProductionOrder:
       return ToolRequirements(query.OrderNumber, ToolsRequirementPlanningOrderType.SFCProductionOrder);

    case EstimatedToolOrderType.MaintenanceWorkOrder:
       return ToolRequirements(query.OrderNumber, ToolsRequirementPlanningOrderType.MaintenanceWorkOrder);

    case EstimatedToolOrderType.ProductionSchedule:
       return ToolRequirements(query.OrderNumber, ToolsRequirementPlanningOrderType.ProductionSchedule);
}
{{</highlight>}}

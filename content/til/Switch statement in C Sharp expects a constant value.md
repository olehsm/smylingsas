+++
author = "Ole Halvor Smylingsås"
description = ""
pageresources = ["https://stackoverflow.com/questions/7593377/switch-case-in-c-sharp-a-constant-value-is-expected"]
categories = []
tags = ["csharp", "switch"]     
slug = ""
title = "Switch-utrykk i C# krever en konstant verdi"
date = 2020-02-23T18:54:41+01:00
draft = "false"
featuretext = ""
featureimg = ""
comments = "false"
+++
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

---
author: Ole Halvor Smylingsås
description: ""
pageresources:
  - pageresourceUrl: https://docs.microsoft.com/en-us/dotnet/csharp/pattern-matching
    pageresourceTitle: Gå til Microsoft docs (Ekstern lenke)
    pageresourceText: Microsoft Docs - Pattern matching
tags:
  - csharp
slug: pattern-matching-
title: Pattern matching i C#
date: 2020-02-23T17:48:05.000Z
draft: false
lastmod: 2023-11-08T06:49:02.029Z
preview: /preview-images/dotnet.jpg
---

<!--more-->
{{<highlight c>}}
public EstimatedToolRequirement[] Handle(EstimatedToolRequirementsQuery query)
{
    switch(query.OrderType)
    {
        case string s when s == EstimatedToolOrderType.ServiceOrder:
            return ToolRequirements(query.OrderNumber, ToolsRequirementPlanningOrderType.ServiceOrder);
        case string s when s == EstimatedToolOrderType.SFCProductionOrder:
            return ToolRequirements(query.OrderNumber, ToolsRequirementPlanningOrderType.SFCProductionOrder);
        case string s when s == EstimatedToolOrderType.MaintenanceWorkOrder:
            return ToolRequirements(query.OrderNumber, ToolsRequirementPlanningOrderType.MaintenanceWorkOrder);
        case string s when s == EstimatedToolOrderType.ProductionSchedule:
            return ToolRequirements(query.OrderNumber, ToolsRequirementPlanningOrderType.ProductionSchedule);
        default:
            return new EstimatedToolRequirement[0];
    }
     
    if(query.OrderType == EstimatedToolOrderType.ServiceOrder)
        return ToolRequirements(query.OrderNumber, ToolsRequirementPlanningOrderType.ServiceOrder);

    if (query.OrderType == EstimatedToolOrderType.SFCProductionOrder)
        return ToolRequirements(query.OrderNumber, ToolsRequirementPlanningOrderType.SFCProductionOrder);

    if (query.OrderType == EstimatedToolOrderType.MaintenanceWorkOrder)
        return ToolRequirements(query.OrderNumber, ToolsRequirementPlanningOrderType.MaintenanceWorkOrder);

    if (query.OrderType == EstimatedToolOrderType.ProductionSchedule)
        return ToolRequirements(query.OrderNumber, ToolsRequirementPlanningOrderType.ProductionSchedule);

    return new EstimatedToolRequirement[0];
}
{{</highlight>}}

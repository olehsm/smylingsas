+++
author = "Ole Halvor Smylingsås"
description = ""
pageresources = ["https://stackoverflow.com/questions/7593377/switch-case-in-c-sharp-a-constant-value-is-expected"]
categories = []
tags = ["C sharp", "Switch"]     
slug = ""
title = "Switch Statement in C# expects a constant value"
date = 2020-02-23T18:54:41+01:00
draft = "false"
featuretext = ""
featureimg = ""
comments = "false"
+++

Basically Switch staments cannot have evaluated statements in the case statement. They must be statically evaluated.

The code below will cause an error:

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

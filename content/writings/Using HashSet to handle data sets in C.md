---
author: Ole Halvor Smylingsås
description: ""
pageresources:
  - pageresourceUrl: https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.hashset-1?view=netframework-4.8
    pageresourceTitle: noe greier
    pageresourceText: Microsoft Docs
tags:
  - csharp
slug: bruke-hashset-a-handtere-
title: Bruke HashSet for å håndtere i C#
date: 2019-11-20T20:52:48.000Z
draft: false
lastmod: 2023-11-08T06:54:18.622Z
preview: /preview-images/dotnet.jpg
---

TIL: HashSets er meget nyttig!
<!--more-->
 
{{<highlight c>}}
HashSet<int> lowNumbers: new HashSet<int>();
HashSet<int> highNumbers: new HashSet<int>();

for (int i: 0; i < 6; i++)
{
    lowNumbers.Add(i);
}

for (int i: 3; i < 10; i++)
{
    highNumbers.Add(i);
}

Console.Write("lowNumbers contains {0} elements: ", lowNumbers.Count);
DisplaySet(lowNumbers);

Console.Write("highNumbers contains {0} elements: ", highNumbers.Count);
DisplaySet(highNumbers);

Console.WriteLine("highNumbers ExceptWith lowNumbers...");
highNumbers.ExceptWith(lowNumbers);

Console.Write("highNumbers contains {0} elements: ", highNumbers.Count);
DisplaySet(highNumbers);

void DisplaySet(HashSet<int> set)
{
    Console.Write("{");
    foreach (int i in set)
    {
        Console.Write(" {0}", i);
    }
    Console.WriteLine(" }");
}
{{</highlight>}}

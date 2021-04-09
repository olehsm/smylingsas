+++
author = "Ole Halvor Smylingsås"
description = ""
pageresources = ["https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.hashset-1?view=netframework-4.8"]
categories = []
tags = ["csharp", "linq"]     
slug = ""
title = "Bruke HashSet for å håndtere i C#"
date = 2019-11-20T21:52:48+01:00
draft = "false"
featuretext = ""
featureimg = ""
comments = "false"
+++
TIL: HashSets er meget nyttig!
<!--more-->
 
{{<highlight c>}}
HashSet<int> lowNumbers = new HashSet<int>();
HashSet<int> highNumbers = new HashSet<int>();

for (int i = 0; i < 6; i++)
{
    lowNumbers.Add(i);
}

for (int i = 3; i < 10; i++)
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
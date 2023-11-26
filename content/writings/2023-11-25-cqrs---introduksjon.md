---
title: CQRS - Introduksjon
description: En kort introduksjon til programmerings patternet CQRS
date: 2023-11-25T17:30:32.351Z
preview: /preview-images/dotnet.jpg
draft: false
tags:
    - csharp
author: Ole Halvor Smylingsås
pageresources:
    - pageresourceUrl: https://event-driven.io/en/cqrs_facts_and_myths_explained/
      pageresourceTitle: Gå til Oskar Dudycz (ektern lenke)
      pageresourceText: CQRS facts and myths explained (Oskar Dudycz)
    - pageresourceUrl: https://event-driven.io/en/cqrs_is_simpler_than_you_think_with_net6/
      pageresourceTitle: Gå til Oskar Dudycz (ektern lenke)
      pageresourceText: CQRS is simpler than you think with .NET 6 and C# 10 (Oskar Dudycz)
    - pageresourceUrl: https://learn.microsoft.com/en-us/azure/architecture/patterns/cqrs
      pageresourceTitle: Gå til Microsoft Learn (ektern lenke)
      pageresourceText: CQRS pattern
    - pageresourceUrl: https://martinfowler.com/bliki/CQRS.html
      pageresourceTitle: Gå til Martin Fowlers (ektern lenke)
      pageresourceText: CQRS
lastmod: 2023-11-26T11:55:37.190Z
---

<!--more-->

**CQS** står for **C**ommand **Q**uery **S**eparation.

**CQRS** står for **C**ommand **Q**uery **R**esponsibility **S**egregation.

Både **CQS** and **CQRS** har *Command* og *Query* i navnet sitt. *Command* en forespørsel/request for å endre noe (for eksempel data). *Query* er en forespørsel for returnere data.

CQS pattern blei oppfunnet av [Bertrand Meyer](https://en.wikipedia.org/wiki/Bertrand_Meyer) mens han jobbet med programmeringsspråket [Eiffel](https://en.wikipedia.org/wiki/Eiffel_(programming_language)). Han kom opp med følgende 2 læresetninger:

> “Asking a question should not change the answer”

og

> “A command (procedure) does something but does not return a result. A query (function or attribute) returns a result but does not change the state.”

Med en slik split blir prosessering enkelt å forutsi resultatet på; En *query* vil ikke skape noen ukjente sideeffekter og en *command* vil aldri blir benyttet for å hente data (for eksempel fra en database).

CQRS er en utvidelse av CQS. Greg Young sa det på følgende vis:

> “Command and Query Responsibility Segregation uses the same definition of Commands and Queries that Meyer used and maintains the viewpoint that they should be pure. The fundamental difference is that in CQRS objects are split into two objects, one containing the Commands one containing the Queries.”

CQRS er et parttern hvor vi segregerer oppførelsene til applikasjonen. Vi splitter den inn i 2 hoveddeler: kommandoer og spørringer. Kommandoer skal gjøre noe, queries skal hente noe. Litt som at et spørsmål ikke skal kunne endre et svar


```c
namespace ReadModel
{
  public interface ProductsDao
  {
    ProductDisplay FindById(int productId);
    ICollection<ProductDisplay> FindByName(string name);
    ICollection<ProductInventory> FindOutOfStockProducts();
    ICollection<ProductDisplay> FindRelatedProducts(int productId);
  }

  public class ProductDisplay
  {
    public int Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public decimal UnitPrice { get; set; }
    public bool IsOutOfStock { get; set; }
    public double UserRating { get; set; }
  }

  public class ProductInventory
  {
    public int Id { get; set; }
    public string Name { get; set; }
    public int CurrentStock { get; set; }
  }
}
```

```c
public interface ICommand
{
  Guid Id { get; }
}

public class RateProduct : ICommand
{
  public RateProduct()
  {
    this.Id = Guid.NewGuid();
  }
  public Guid Id { get; set; }
  public int ProductId { get; set; }
  public int Rating { get; set; }
  public int UserId {get; set; }
}
```

```c
public class ProductsCommandHandler :
    ICommandHandler<AddNewProduct>,
    ICommandHandler<RateProduct>,
    ICommandHandler<AddToInventory>,
    ICommandHandler<ConfirmItemShipped>,
    ICommandHandler<UpdateStockFromInventoryRecount>
{
  private readonly IRepository<Product> repository;

  public ProductsCommandHandler (IRepository<Product> repository)
  {
    this.repository = repository;
  }

  void Handle (AddNewProduct command)
  {
    ...
  }

  void Handle (RateProduct command)
  {
    var product = repository.Find(command.ProductId);
    if (product != null)
    {
      product.RateProduct(command.UserId, command.Rating);
      repository.Save(product);
    }
  }

  void Handle (AddToInventory command)
  {
    ...
  }

  void Handle (ConfirmItemsShipped command)
  {
    ...
  }

  void Handle (UpdateStockFromInventoryRecount command)
  {
    ...
  }
}
```




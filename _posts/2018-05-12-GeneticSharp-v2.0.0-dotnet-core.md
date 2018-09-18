---
published: true
layout: post
title: GeneticSharp v2.0.0 - .NET Core  
image: http://diegogiacomelli.com.br/images/GeneticSharp-logo.png
---
The **[GeneticSharp v2.0.0](https://github.com/giacomelli/GeneticSharp/releases/tag/v2.0.0)** is out with support to .NET Standard 2.0 and .NET Framework 4.6.2.
 
## Introduction

<center>
<img src="../images/netcore.svg" width="128">
</center>

In march GenetichSharp start to support .NET Standard 2.0 in the 2.0.0-rc version. Two months have pass and in the meanwhile the community have time to test that release candidate version and now Unity3D has an official .NET Standard 2.0 profile.

So, it's time to release the GeneticSharp v2.0.0.

## Installing
Only GeneticSharp:

```shell
install-package GeneticSharp
```

GeneticSharp and extensions (TSP, AutoConfig, Bitmap equality, Equality equation, Equation solver, Function builder, etc):

```shell
install-package GeneticSharp.Extensions
```

If you're still in a .NET Framework version lower than 4.6.2 project use the [1.2.0 version](https://www.nuget.org/packages/GeneticSharp/1.2.0).

```shell
install-package GeneticSharp -Version 1.2.0
```

## Breaking changes
<center>
<img src="../images/breaking-changes.png" >
</center>

> I've already talk about these breaking changes on the post about the release candidate version, but I guess is good to point them again:

* The GeneticSharp NuGet package was split into two packages:
    * GeneticSharp: only GeneticSharp.Domain.dll and GeneticSharp.Infrastructure.Framework.dll
    * GeneticSharp.Extensions: depends on GenetiSharp.Package and add the GeneticSharp.Extensions.dll.
* SmartThreadPoolTaskExecutor does not exists anymore. You should use ParallelTaskExecutor class (not disposable).
* The projects are not signed anymore:
    * [Error signing output with public key from file 'x.snk' -- Assembly signing not supported](https://github.com/dotnet/cli/issues/6911#issuecomment-309647478)
* In the ConsoleApp the EquationSolverSampleController was removed until the [Jace](https://github.com/pieterderycke/Jace) library suportt .NET Core.

Let's evolve!

<div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
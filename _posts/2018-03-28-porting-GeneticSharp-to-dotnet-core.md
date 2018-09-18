---
published: true
layout: post
title: Porting GeneticSharp to .NET Core  
image: hhttp://diegogiacomelli.com.br/images/GeneticSharp-logo.png
---
The **[GeneticSharp v2.0.0-rc1](https://github.com/giacomelli/GeneticSharp/releases/tag/v2.0.0-rc1)** is out.

In this version GeneticSharp starts to support .NET Standard 2.0 and .NET Framework 4.6.2.
 
<center>
Porting <img src="../images/GeneticSharp-logo.png">
to <img src="../images/netcore.svg" width="128">
</center>


## Introduction

[Sometime ago I started to porting GeneticSharp to .NET Core](
https://twitter.com/ogiacomelli/status/958114986601172992) and today, after more than 40 hours of work, I finally finish it. 

Although GeneticSharp born as a multi-platform library that ran in any OS supported by .NET Framework and Mono, convert it to .NET Core was a desired thing, because .NET Core is where .NET ecosystem is targeting.

## Release candidate
This 2.0.0-rc1 was already published to nuget.org, but it's marked as a pre-realease package. I will kept it as a RC until get sure that there is no issue with the porting and until the Unity3d remove the "experimental" status to its support to .NET Standard 2.0.

If you are in .NET Core or in .NET Framework 4.6.2+ project, please try the the [2.0.0-rc1](https://www.nuget.org/packages/GeneticSharp/2.0.0-rc1) version. 

Only GeneticSharp:

```shell
install-package GeneticSharp -Version 2.0.0-rc1
```

GeneticSharp and extensions (TSP, AutoConfig, Bitmap equality, Equality equation, Equation solver, Function builder, etc):

```shell
install-package GeneticSharp.Extensions -Version 2.0.0-rc1
```

If you're still in a .NET Framework version lower than 4.6.2 project use the [1.2.0 version](https://www.nuget.org/packages/GeneticSharp/1.2.0).

```shell
install-package GeneticSharp -Version 1.2.0
```

## Porting
<center>
<img src="../images/porting.png">
</center>

### Warmup

To start the porting I followed the good pratices describe on links below:

* [Porting to .NET Core - Libraries](https://docs.microsoft.com/en-us/dotnet/core/porting/libraries)
* [Porting to .NET Core from .NET Framework](https://docs.microsoft.com/en-us/dotnet/core/porting/index)

Based on those reads, I decided to support the .NET Standard 2.0 (netstandard2.0) and the .NET Framework 4.6.2 (net462). This meaning that GeneticSharp can be used in .NET Standard and .NET Framework projects, with no differences.

Another thing that I considered was the Unity3d support, so based on this post [Unity 2018.1 - .NET Standard 2.0 and .NET 4.6 support](https://blogs.unity3d.com/pt/2018/01/10/get-early-access-to-unity-2018-1-the-beta-is-out/) Unity is already using a experimental support to netstandard2.0 and net462 libraries.

### Domain
The domain part of the library, the GeneticSharp.Domain library was the easy part to port, if I cleary remember there was no change it all, besides the changes on .csproj.

### Extensions
The extensions from GeneticSharp.Extensions project needed some more work, because the System.Drawing do not exists directly in .NET Standard 2.0. That was resolved using the [System.Drawing.Common](https://www.nuget.org/packages/System.Drawing.Common/) NuGet package. 

The NCalc library used on FunctionBuilderFitness was updated to use the [NCalc.NetCore](https://www.nuget.org/packages/NCalc.NetCore/) version.

### Threading
One of the most tricky porting was the GeneticSharp.Infrastructure.Threading, because it used the external library [SmartThreadPool](https://github.com/amibar/SmartThreadPool) and that one was not supporting .NET Core at that time. I decided to implement the parallel task executor using the .NET built-in ThreadPool class, this implementation was done on [ParallelTaskExecutor](https://github.com/giacomelli/GeneticSharp/blob/master/src/GeneticSharp.Infrastructure.Framework/Threading/ParallelTaskExecutor.cs) and its use can be tested on  [ParallelTaskExecutorTest](https://github.com/giacomelli/GeneticSharp/blob/master/src/GeneticSharp.Infrastructure.Framework.UnitTests/Threading/ParallelTaskExecutorTest.cs).

### GtkApp
GeneticSharp sample app (GeneticSharp.Runner.GtkApp) was built using Gtk# 2, but only version 3 was ported to .NET Core, and there are huge breaking changes between these two Gtk# versions, so for a while I'll keeping the sample app still running only on .NET Framework/Mono.

I hope in a near future we can built a cross-platform sample app, maybe using Xamarin Forms for iOS, Android, macOS and UWP. This would be great, but perform this task during the to .NET Core supporting is far from the scope right now. 

The links below are some readings that I did while looking for some GTK# alternatives:

* [Building Xamarin.Forms Apps with .NET ](https://blog.xamarin.com/building-xamarin-forms-apps-net-standard/)
* [Preview: Bringing macOS to Xamarin.Forms](https://blog.xamarin.com/preview-bringing-macos-to-xamarin-forms/)
* [Xamarin.Mac - Hello, Mac](https://docs.microsoft.com/en-us/xamarin/mac/get-started/hello-mac)

### Unit tests
Unit tests projects were using the [Rhino Mocks](https://github.com/ayende/rhino-mocks) as the mocking library, but Rhino Mocks was not supporting (maybe never) .NET Core, so it was replaced by the amazing [NSubstitute](http://nsubstitute.github.io/).

#### Code Coverage
As the time I wrote this, there was no unanimity about what is the best cross-platform tool to collect code-coverage in .NET Core.
There are some tools, but each one has some pros and cons:

* VS 2017 Code Coverage
Can be easily used on Windows platform directly on VS 2017 or in command line:
```shell
dotnet test --collect:"Code Coverage"
```

* [altcover](https://github.com/SteveGilham/altcover)
Instrumenting coverage tool for .net/.net core and Mono, emitting NCover or OpenCover format output.

* [MiniCover](https://github.com/lucaslorentz/minicover)
Minimalist Code Coverage Tool for .NET Core.

* [coverlet](https://github.com/tonerdo/coverlet)
Cross platform code coverage library for .NET Core.


I guess the most promising tool is the coverlet, but I'll waiting until the end of GeneticSharp 2.0.0 release candidate period to choose one.


### Problems, readings, tricks and hacks
Of course that a porting always come with some problems that will you need to figure out by doing some research and solve them, most of time, using some trick and hacks. These one was some of I've done:

#### .NET SDK 2.0 projects targeting .NET 4.x on Mono
As GeneticSharp need to support .NET Framework 4.6.2, but the msbuild does not know where to looking for the framework assemblies in macOS and Linux, so I found thi .NET SDK issue comment [issue comment](https://github.com/dotnet/sdk/issues/335#issuecomment-368669050): 
>  When compiling .NET SDK 2.0 projects targeting .NET 4.x on Mono using 'dotnet build' you have to teach MSBuild where the Mono copy of the reference asssemblies is.

This msbuild file [GeneticSharp.dotnet-core.targets](src/msbuilds/GeneticSharp.dotnet-core.targets) was created and referenced in all .csproj.

#### dotnet test "Failed to initialize client proxy"
Sometimes dotnet test gives the error: 
```shell
Starting test execution, please wait...
Failed to initialize client proxy: could not connect to test process.

Test Run Aborted
```
Delete the "obj" and "bin" folders from unit test project will "fix" the problem.

## Breaking changes
<center>
<img src="../images/breaking-changes.png" >
</center>

* The GeneticSharp NuGet package was split into two packages:
    * GeneticSharp: only GeneticSharp.Domain.dll and GeneticSharp.Infrastructure.Framework.dll
    * GeneticSharp.Extensions: depends on GenetiSharp.Package and add the GeneticSharp.Extensions.dll.
* SmartThreadPoolTaskExecutor does not exists anymore. You should use ParallelTaskExecutor class (not disposable).
* The projects are not signed anymore:
    * [Error signing output with public key from file 'x.snk' -- Assembly signing not supported](https://github.com/dotnet/cli/issues/6911#issuecomment-309647478)
* In the ConsoleApp the EquationSolverSampleController was removed until the [Jace](https://github.com/pieterderycke/Jace) library suportt .NET Core.


## Reads during the porting
<center>
<img src="../images/conclusion.png">
</center>

Some readings I did during the whole process, maybe can be useful to someone porting a library to .NET Core too.

* [SmartThreadPool - Adding support to .NET Core 2.0](https://github.com/amibar/SmartThreadPool/pull/17)
* [How to set `OutputPath` attribute in Visual Studio 2017 project ( new .csproj file format ) without target framework cluttering the resolved path?](https://stackoverflow.com/a/43605256/956886)
* [How do you multi-target a .NET Core class library with csproj?](https://stackoverflow.com/a/42787747/956886)
* [Old csproj to new csproj: Visual Studio 2017 upgrade guide](https://www.natemcmaster.com/blog/2017/03/09/vs2015-to-vs2017-upgrade/)
* [A Guide to NSubstitute for Rhino.Mocks Users](https://wrightfully.com/guide-to-nsubstitute-for-rhino-mocks-users)
* [Duplicate 'System.Reflection.AssemblyCompanyAttribute' attribute](https://github.com/dotnet/cli/issues/4710)
* [NUnit - Support .NET Core 2.0](https://github.com/nunit/dotnet-test-nunit/issues/122)
* [Multi-Targeting and Porting a .NET Library to .NET Core 2.0](https://weblog.west-wind.com/posts/2017/Jun/22/MultiTargeting-and-Porting-a-NET-Library-to-NET-Core-20)
* [Organizing your project to support .NET Framework and .NET Core](https://docs.microsoft.com/en-us/dotnet/core/porting/project-structure)
* [System.Drawing.Bitmap class is claimed to be present in netcoreapp2.0](https://github.com/dotnet/standard/issues/443)
* [.NET Core Image Processing](https://blogs.msdn.microsoft.com/dotnet/2017/01/19/net-core-image-processing/)
* [Add support for dotnet test --collect:"Code Coverage"](https://github.com/Microsoft/vstest/issues/981)
* [Building pre-release packages](https://docs.microsoft.com/en-us/nuget/create-packages/prerelease-packages)
* [dotnet pack with nuspec file does not set PackageVersion from csproj](https://github.com/NuGet/Home/issues/6636)
* [Invalid warning "Assembly outside lib folder." in dotnet pack](https://github.com/NuGet/Home/issues/5655)
* [Feature : Allow project reference DLLs to be added to the parent nupkg for pack target like IncludeReferencedProjects in nuget.exe](https://github.com/NuGet/Home/issues/3891#issuecomment-375501212)
* [https://github.com/dotnet/cli/issues/5504](https://github.com/dotnet/cli/issues/5504)

![](../images/GeneticSharp-dotnet-build.png)

Now I'm planning to create a GeneticSharp's sample using Unity3d's new beta features, like the new ECS (Entity Component System), C# Job System and the Burst compiler. 


Let's evolve!

<div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
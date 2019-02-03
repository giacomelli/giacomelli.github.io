---
published: true
layout: post
title: dotnet new templates for GeneticSharp
image: http://diegogiacomelli.com.br/images/GeneticSharp-logo.png
---
Now GeneticSharp has a NuGet package called GeneticSharp.Templates, this package allows you to install GeneticSharp templates using the **dotnet new** command.

# Installing the GeneticSharp.Templates
Before you can use the `dotnet new` command to create the GeneticSharp projects from templates, you need to install it on your machine:
```shell
dotnet new -i GeneticSharp.Templates
```
After this, if you run the command:
```shell
dotnet new GeneticSharp --list  
```

The GeneticSharp templates will be listed:

![](../labs/dotnet-new-templates-for-GeneticSharp/dotnet-new-list-output.png)

# Creating a new GeneticSharp project from templates

## Console Application
Create a new console application template with GeneticSharp where you just need to implement the chromosome and fitness function.
```shell
dotnet new GeneticSharpConsoleApp -n MyNamespace -o MyOutoputFolder
```
![](../labs/dotnet-new-templates-for-GeneticSharp/consoleapp-project.png)


### TSP Console application
Create a new console application template with GeneticSharp ready to run a Travelling Salesman Problem (TSP).
```shell
dotnet new GeneticSharpTspConsoleApp -n MyNamespace -o MyOutoputFolder
```
![](../labs/dotnet-new-templates-for-GeneticSharp/tspconsoleapp-project.png)

### TSP Unity3D
Create an Unity3D template with GeneticSharp ready to run a Travelling Salesman Problem (TSP).
```shell
dotnet new GeneticSharpTspUnity3d -n MyNamespace -o MyOutoputFolder
```
![](../labs/dotnet-new-templates-for-GeneticSharp/tspunity3d-project.png)

Let's evolve!
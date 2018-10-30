---
published: true
layout: post
title: GeneticSharp v2.1.0
image: http://diegogiacomelli.com.br/images/GeneticSharp-logo.png
---
The **[GeneticSharp v2.1.0](https://github.com/giacomelli/GeneticSharp)** is out.

### Features

<center>
<img src="../images/GeneticSharp-logo.png">
</center>

* Add constructor with values to FloatingPointChromosome [#33](https://github.com/giacomelli/GeneticSharp/issues/33)

> As it is now whenever you create an instance of FloatingPointChromosome, it will randomly create gene values.
I have a case where I need to stop optimization at some time, save results to DB and resume it later. For this, I need to be able to give gene values to FloatingPointChromosome.

* New NuGet version [#44](https://github.com/giacomelli/GeneticSharp/issues/44)

### Bug fix
* Bug/Error when using ParallelTaskExecutor [#40](https://github.com/giacomelli/GeneticSharp/issues/40)

> I just discovered that when running the optimizer within a Task/Tread/TPL Dataflow block with TaskExecutor set to ParallelTaskExecutor when instantiating GeneticAlgorithm, it blocks all other outside operations during the lifetime of the optimizer run. This does not happen when not setting the TaskExecutor option.

### Thanks to

I would like to thanks to [@MattWolf74](https://github.com/MattWolf74)  and [@mersadk](https://github.com/mersadk) for contributing to the open issues and pull-request 

If you want to use this new version on your project, just get the 2.1.0 version from NuGet:

 ```shell
 update-package GeneticSharp
 ```

Let's evolve!

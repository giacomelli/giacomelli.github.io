---
published: true
layout: post
title: GeneticSharp v1.2.0 - Sequence mutations
image: http://diegogiacomelli.com.br/images/GeneticSharp-logo.png
---
The **[GeneticSharp v1.2.0](https://github.com/giacomelli/GeneticSharp)** is out.
 
The additions of this version are the new sequence mutation operators: Displacement, InsertionMutation and Partial Shuffle (PSM).

<center>
<img src="../images/GeneticSharp-logo.png">
</center>

**Displacement Mutation**: a substring is randomly selected from chromosome, is removed, then replaced at a randomly selected position.

**Insertion Mutation**: a gene is randomly selected from chromosome, is removed, then replaced at a randomly selected position.

**Partial Shuffle Mutation (PSM)**: we take a sequence S limited by two positions i and j randomly chosen. The gene order in this sequence will be shuffled. Sequence will be shuffled until it becomes different than the starting order.

I would like to thanks to Ahmet Can Saner ([@cansaner](https://github.com/cansaner)) for contribute with those great new mutations that him developed during his master degree.

If you want to use the new mutations in your project, just get the new GeneticSharp version from Nuget.

Let's evolve!


<div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

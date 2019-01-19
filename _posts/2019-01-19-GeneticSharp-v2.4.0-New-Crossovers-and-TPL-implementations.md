---
published: true
layout: post
title: GeneticSharp v2.4.0 - New crossovers and TPL implementations
image: http://diegogiacomelli.com.br/images/GeneticSharp-logo.png
---
The **[GeneticSharp v2.4.0](https://github.com/giacomelli/GeneticSharp)** is out.

The additions of this version are the two new crossovers implementations and a new option of ITaskExecutor that use TPL.

<center>
<img src="../images/GeneticSharp-logo.png">
</center>

# Crossovers
### Alternating-position (AP)
The alternating position crossover operator (Larrañaga et al. 1996a) simply creates an offspring by selecting alternately the next element of the first parent and the next element of the second parent, omitting the elements already present in the offspring.

### Voting Recombination Crossover (VR)
It can be seen as a P-sexual crossover operator, where p (parents number) is a natural number greater than, or equal to, 2.

It starts by defining a threshold, which is a natural number smaller than, or equal to p.

Next, for every; i E {l, 2, . . .N} the set of ith elements of all the parents is considered. If in this set an element occurs at least the threshold number of times, it is copied into the offspring. 

# TPL
Three new classes were implemented to run some key points of genetic algorithm using TPL.

Those new classes can be used alone, but normally you will use all them together. You can see a sample usage at unit test `Start_TplManyGenerations_Optimization`.


### TplTaskExecutor:
An ITaskExecutor's implementation that executes the tasks in a parallel fashion using Task Parallel Library (TPL).

### TplPopulation
Represents a population of candidate solutions (chromosomes) using TPL to create them.

### TplOperatorsStrategy
A new interface called IOperatorsStrategy was added to GeneticAlgorithm as an option. Two options of operators strategy were created, the default one, called DefaultOperatorsStrategy and the new one called TplOperatosStrategy.

<hr>

# Thanks to
I would like to thanks to [EMostafaAli](https://github.com/EMostafaAli) and [Alexey I.](https://github.com/InRedikaWB) for opened some issues and made small pull requests and [Dan](https://github.com/codingdna2) for contributing with the [TPL implementations](https://github.com/giacomelli/GeneticSharp/pull/56).

Let's evolve!
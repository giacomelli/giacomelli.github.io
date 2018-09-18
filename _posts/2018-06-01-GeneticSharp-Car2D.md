---
published: true
layout: post
title: GeneticSharp Car2D  
image: http://diegogiacomelli.com.br/images/GeneticSharp-logo.png
---

I made an Unity3D sample for [GeneticSharp](https://github.com/giacomelli/GeneticSharp) inspired by amazing [BoxCar2D](http://boxcar2d.com/about.html) where a genetic algorithm tries to design 2D cars to overcome roads challenges.

 
## Introduction

<center>
<img src="../labs/GeneticSharp-Car2D/car.png" width="256">
</center>

I was always amazed by the 2D cars designed by [BoxCar2D](http://boxcar2d.com/about.html)  and see how genetic algorithm make new and (probably) better cars each new generation and I always wanted make a sample inspired by it using GeneticSharp.
 

The sample that I will talk about is available on the GeneticSharp repository at GeneticSharp.Runner.UnityApp. You can fork GeneticSharp and open it on Unity3D editor, then run the MenuScene. 

> If you need some introduction to genetic algorithms or GeneticSharp:
> * Introduction to genetic algorithms: [Function optimization with GeneticSharp](http://diegogiacomelli.com.br/function-optimization-with-geneticsharp/).
> * Using GeneticSharp on Unity3D: [TSP with GeneticSharp and Unity3D](http://diegogiacomelli.com.br/tsp-with-GeneticSharp-and-Unity3d/).

## What is our 2D car?
In GeneticSharp Car2D, a car is composed of:
 
 * 8 vectors with 64 meters max size and an angle that will be calculate from the car center.
 * 0 to 8 wheels
    * Radius from 0 to 3
    * Vector index (a vector can have more than one wheel)

The vectors and wheels have mass, so bigger ones will made a slower car. 

## The chromosome
To represent the phenotype described above the car chromosome will be:

* A float to represent the vector size (7 bits)
* A float to represent the vector angle (9 bits)
* An integer to represent the wheel vector index (7 bits)
* A float to represent the wheel radius (4 bits)

This structure will take 27 bits, then we will repeat it 8 times, that is the number of the car vectors. This give us a chromosome with 216 bits.

The bit string chromosome will look like this:

```shell
001101110101110100001000010010100100111000100000010101010100000111100100001110010010010101010111100000000011011100000001110000001110010000110101011111100000100011011101101011101000001110000011011000110111000000000011
```

## The roads
The roads and cars can be configured using the scriptable object CarSampleConfig. The GeneticSharp Car2D allows create any number of different roads and car configs, but for this post, I will show 3 roads configurations with the same car configuration mentioned above.

> If you want to add new roads, just create a new CarSampleConfig in “Assets / Create / GeneticSharp / Car / CarSampleConfig”. The new road will automatically appear on Car2D menu when you run the sample.

A road is defined by its points quantity and distance, height, rotation, gaps, and obstacles. The gravity and everything about physics is automatically simulated by Unity3d itself.

## The fitness function
The fitness of each car (chromosome) to the road will be the **sum of the max distance** reach by it **plus the average velocity** at that moment.

<center>
<img src="../labs/GeneticSharp-Car2D/FitnessFunction.png">
</center>

## Genetic algorithm and the simulation
The genetic algorithm to evaluate the simulation is configured with this operators:

* Population: 16 chromosomes per generation
* Crossover: Uniform
* Mutation: Flip Bit
* Selection: Elite
* Termination: Time evolving

Besides that, the chromosomes are evaluated in parallel using the GeneticSharp's ParallelTaskExecutor and you can see all them in 4x4 grid:
<center>
<img src="../labs/GeneticSharp-Car2D/SimulationGrid.png">
</center>

> If you are running the sample inside Unity3D editor you can change the size of the simulation grid in the SampleController game object from CarScene.

## Designing the cars
Now that we have our Car2D and roads defining, we can put the genetic algorithm to run and see how it design the cars for each road.

Besides the roads that are different, the car setup is the same. This way we can compare how genetic algorithm will reach different car designs to different challenges (roads).

### Gap road
The first is a road with gaps that getting greater. 
The next video resumes how GeneticSharp designs the car for the gap road.

<center>
<iframe width="640" height="480" src="https://www.youtube.com/embed/hxt2E3QGZw4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</center>

> All videos are recording running the GeneticSharp Car2D on my Android. I used the [DU Recorder](https://play.google.com/store/apps/details?id=com.duapps.recorder&hl=en_US) to record them. Amazing app BTW.

About 100 generations, GeneticSharp generate a car that has a front wheel suspend in the air that allows it to reach the other side of the gap without fall on it.


### Hill road
This road has some hills that increase as the car travels.

<center>
<iframe width="640" height="480" src="https://www.youtube.com/embed/x0zCDyGc80s" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</center>

For hill road, the genetic algorithm creates a car with enough length to touch the two sides of the downhills at the same time, this allows the car to keep the velocity needed to overcome the hill part. The middle wheel is what allows the car to pass the hill part of the road.


### Obstacle road
Some fixed obstacles are placed on the road and force the cars to pass over them

<center>
<iframe width="640" height="480" src="https://www.youtube.com/embed/gJCz79xdCFY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</center>

This is probably the most curious design because the genetic algorithm found out that to overcome the obstacle, the car needed to reach it at high velocity and needs to have a back support to avoid car rollover.

## Conclusion
A think two things are quite clear after I build this sample:

### Incremental challenges
All the challenges in the roads are incremental, the gaps start small and get bigger by the extension of the road. The same was did to the hills and the obstacle.

**Why do the challenges need to be incremental?**

During first tests with the gap road I realized if I just put an 8 meters gap in front of first-generation cars, the genetic algorithm cannot choose better designs, because most of them just fall in the first gap. The challenge was too much for the initial generations, but if I just increased the size of the gaps from small size until it gets to 8 meters, the genetic algorithm could choose better and better designs each generation.

**It's how we learn**

The same happens on how we learn many things, like math: first basic operations, then simple equations and in some years we are calculating integrals (or trying at least).

It’s easy to spot this behavior on evolution itself, where the genetic algorithms are based. In the book “Guns, Germs and Steel” Jared Diamond says:

_"The near-simultaneous disappearance of so many large species raises an
obvious question: what caused it? An obvious possible answer is that they
were killed off or else eliminated indirectly by the first arriving humans.
Recall that Australian / New Guinean animals had evolved for millions of
years in the absence of human hunters. We know that Galapagos and Antarctic
birds and mammals, which similarly evolved in the absence of
humans and did not see humans until modern times, are still incurably
tame today."_

The Australian / New Guinean animals got a challenge that was too much to them in that time, different of the other animals from other continents that evolved together with humans (or proto-humans) and learn to survive this predator.


### Different design
Different challenges lead to different car designs. 
It’s quite clear that the best cars design to each of the 3 roads are different between them and only works in its specific road.

Now, it's up to you, fork [GeneticSharp](https://github.com/giacomelli/GeneticSharp/fork) and run the GeneticSharp Car2D on your Unity3D editor. [Let me know](http://twitter.com/ogiacomelli) what roads and results you created. 

Let's evolve!
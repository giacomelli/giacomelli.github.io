---
published: true
layout: post
title: GeneticSharp - Unity3d sample  
image: http://diegogiacomelli.com.br/images/GeneticSharp-logo.png
---
 
I just pushed to GeneticSharp master branch the [GeneticSharp.Runners.UnityApp](https://github.com/giacomelli/GeneticSharp/tree/master/src/GeneticSharp.Runner.UnityApp). 

<center>
<img src="../images/Unity3d.png" width="256">
</center>

In this Unity3d project there are 3 samples:

## Car2D
Based on famous BoxCar2D, this sample uses a genetic algorithm to create car designs to overcome road challenges, like gaps, hills, and obstacles.

A post explaining this sample in detail will be published tomorrow.

## TSP
The classic TSP sample, but in this, we can change the cities positions while the genetic algorithm is running and see how it finds the best route.

This sample inspired this post [TSP with GeneticSharp and Unity3D](http://localhost:4000/tsp-with-GeneticSharp-and-Unity3d/).

## Wall builder
This sample tries to build a higher wall using random initial bricks positions.

<center>
<iframe src="https://www.youtube.com/embed/xXqNcgeOU_g" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</center>


## Experimental components
In the folder _runner/Commons there are the BitStringChromosome class and some phenotype implementations. At the moment they are experimental, but I will wait for the community feedback to see if they can be promoted to GeneticSharp library code.

Let's evolve!


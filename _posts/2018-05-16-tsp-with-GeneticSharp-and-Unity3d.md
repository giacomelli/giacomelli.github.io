---
published: true
layout: post
title: TSP with GeneticSharp and Unity3D  
image: http://diegogiacomelli.com.br/images/city.png
---
<style>
div.gist-meta { display:none; }
</style>
In this post I will show how to use GeneticSharp and Unity3D to solve the TSP (Travelling salesman problem).
 
## Introduction

<center>
<img src="../images/city.png" width="128">
</center>

According to Wikipedia _**"The travelling salesman problem (TSP) asks the following question: "Given a list of cities and the distances between each pair of cities, what is the shortest possible route that visits each city and returns to the origin city?"**_

TSP is a classic sample to test some optimization techniques, as well it's fairly used to demonstrate how to implement a genetic algorithm. For these reasons I will use it to show you how to implement a basic genetic algorithm in Unity3D using GeneticSharp.

## Prerequisites
To better understand this tutorial, you need to have some experiences/knowledges in:

* Unity3D (beginner)
* Genetic algorithms (beginner). 

> If you need an introduction to genetic algorithms, take a look at this tutorial [Function optimization with GeneticSharp](http://diegogiacomelli.com.br/function-optimization-with-geneticsharp/).

## Creating the Unity3D project
Using Unity 2018.1+, create a new project called TspSample.

![](../labs/tsp-with-GeneticSharp-and-Unity3d/creating-project.png)

## Using .NET Standard 2.0
Go to "Player settings" / "Other settings" / "Configuration", select ".NET 4.x Equivalent" on "Scripting Runtime Version". Unity will ask to restart, you can confirm.

After restart, go back to "Player settings", select ".NET Standard 2.0" on "Api Compability Level".

![](../labs/tsp-with-GeneticSharp-and-Unity3d/player-settings.png)

## Installing GeneticSharp
Install GeneticSharp using the .unitypackage available on [GeneticSharp release page](https://github.com/giacomelli/GeneticSharp/releases).

## Defining the TSP chromosome
<center>
<img src="../images/route.png" width="128">
</center>

The chromosome represents a solution of the problem we are trying to solve. In our case the TSP chromosome should represent _**"the shortest possible route that visits each city and returns to the origin city"**_.

To represent the cities route each gene of our chromosome will represent an index of a city in the route.

Create a C# script called "TspChromosome.cs":
{% gist 94721a46d33c6bcb1f3ae11117b7f888 TspChromosome.cs %}

## Representing a city
The next step is define our genetic algorithm fitness function, but first we need to create a simple class to represent a city on a 2D space.

Create a C# script called "City.cs":
{% gist 94721a46d33c6bcb1f3ae11117b7f888 City.cs %}

## The fitness function
Now we need to evaluate the TspChromosome.

Our fitness function will evaluate the TspChromosome fitness based on the total distance to reach all cities in the route represented by the chromosome. The shorter the distance, the better the chromosome.

Create a C# script called "TspFitness.cs": {% gist 94721a46d33c6bcb1f3ae11117b7f888 TspFitness.cs %}

## Running the Genetic Algorithm
In this step we need to configure our genetic algorithm using the TspChromosome, TspFitness and some classic GA operators already built in GeneticSharp.

Create a C# script called "GAController.cs": {% gist 94721a46d33c6bcb1f3ae11117b7f888 GAController.v1.cs %}

Create a GameObject called "GAController" in the scene and add the GAController.cs to it. 

Save the scene.

Run the scene on editor and take a look on the console window, you will see the distance to reach all cities getting smaller as the generations ran.

![](../labs/tsp-with-GeneticSharp-and-Unity3d/console-window.png)


## Drawing the cities
Now our GA is running inside Unity3D, but it need to display the cities route better.
We need create a visual representation to the cities.

### City prefab
We will create a prefab based on a sprite of a pin. You can use an icon as this one from [www.flaticon.com](https://www.flaticon.com/free-icon/maps-and-flags_447031#term=pin&page=1&position=6).

Download it to inside your Unity3D project.
> Maybe you will need to change the 'Pixels Per Unit' to 1000 to get a good pin size on screen.

Drag it to the hierarchy panel, rename the new GameObject to CityPrefab and drag it back to your Assets folder on Project panel. Now our CityPrefab is created. 

Delete the CityPrefab game object from the current scene.

### Instantiating the cities prefabs
Add the following field to the GAController.cs
{% gist 94721a46d33c6bcb1f3ae11117b7f888 GAController.change1.cs %}

Then, create the method DrawCities:
{% gist 94721a46d33c6bcb1f3ae11117b7f888 GAController.change2.cs %}

And then call it from Start method:
{% gist 94721a46d33c6bcb1f3ae11117b7f888 GAController.change3.cs %}

Now, select the GAController game object on hierarchy and set the CityPrefab property.
![](../labs/tsp-with-GeneticSharp-and-Unity3d/setting-cityprefab.png)

Try to run the scene, you should see something like this:
![](../labs/tsp-with-GeneticSharp-and-Unity3d/draw-cities.png)

## Drawing the route
In the previous step we drawn the cities and we have the visual of the problem: the cities.

Now we need to draw the solution: the route represented by the best chromosome of each generation.

One of the simplest ways to draw some lines in Unity3D is using the LineRenderer component.

Add the following code to the GAController.cs:
{% gist 94721a46d33c6bcb1f3ae11117b7f888 GAController.change4.cs %}

Create the method DrawRoute:
{% gist 94721a46d33c6bcb1f3ae11117b7f888 GAController.change5.cs %}

Then call it from Update method:
{% gist 94721a46d33c6bcb1f3ae11117b7f888 GAController.change6.cs %}

Before run the scene, we need to add a LineRenderer component to our GAController game object. 

> Change the width property of the LineRenderer from 1 to 0.1.

Run the scene again, now you should see the route been optimizing as the generations are ran:
![](../labs/tsp-with-GeneticSharp-and-Unity3d/draw-route.png)


## Changing the cities positions
Our sample could be considered done, but would it be nice if we you could change the cities positions while the genetic algorithm are running and see how it manages these cities positions changes.

### CityController
Create a C# script called "CityController.cs": {% gist 94721a46d33c6bcb1f3ae11117b7f888 CityController.cs %}
I won't getting in details about how this is script works, but it's allow the user to drag the cities' pin using the mouse or the finger touch if build it to mobile.

Add the CityController.cs to the CityPrefab.

Change the GAController.cs script adding the line below to the end of the for loop of DrawCities method:
{% gist 94721a46d33c6bcb1f3ae11117b7f888 GAController.change7.cs %}

Finally, our sample is really done and you should be capable to change the cities positions, by dragging the pins around, and genetic algorithm will try to figure out the best route in real time.
![GeneticSharp sample running on Android](../labs/tsp-with-GeneticSharp-and-Unity3d/tsp-sample.gif)

## Conclusion
With only 5 C# scripts and 1 prefab we built a pretty nice sample of genetic algorithms using in Unity3D with GeneticSharp. Now you can improve it with your own ideas or use some of mine ;):

* How about make it 3D and using a Vector3 instead of Vector2 on City.Position? 
* Maybe let user change the number of cities or change the genetic algorithm operators?
* Move the DrawCities and DrawRoutes methods to a script responsible to only draw the GA.

The full source code used in this post can be download or fork from this Gist: [https://gist.github.com/giacomelli/94721a46d33c6bcb1f3ae11117b7f888](https://gist.github.com/giacomelli/94721a46d33c6bcb1f3ae11117b7f888)

Let's evolve!

<div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
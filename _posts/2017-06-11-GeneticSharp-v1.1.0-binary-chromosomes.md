---
published: true
layout: post
title: GeneticSharp v1.1.0 - Binary chromosomes
image: http://diegogiacomelli.com.br/images/GeneticSharp-logo.png
---
The **[GeneticSharp v1.1.0](https://github.com/giacomelli/GeneticSharp)** is out. The greatest additions of this version are the binary chromosomes: **FloatingPointChromosome and IntegerChromosome.**

![](../images/GeneticSharp-logo.png)

Binary chromosomes can be directly used when your solution chromosome can be represented as numbers or a string representation of 0 and 1.

A new sample has been added to the GeneticSharp.Runner.GtkApp, this sample called "Function optimization" show the FloatingPointChromsome in action:

<iframe width="560" height="315" src="https://www.youtube.com/embed/Q62tGjEDsYM" frameborder="0" allowfullscreen></iframe>

Besides these new chromosomes, there is a new mutation: FlipBit, a special mutation to IBinaryChromosome that takes the chosen gene and inverts the bits.
	
If you want to use the new chromosomes in your project, just get the new GeneticSharp version from Nuget.

In the next days I will post a tutorial showing how to optimize a very simple function using GeneticSharp and the new FloatingPointChromosome.

Let's evolve!
<br><br><br>


<div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

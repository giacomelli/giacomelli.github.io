---
published: true
layout: post
title: GeneticSharp v2.2.0 - Sudoku sample
image: http://diegogiacomelli.com.br/images/GeneticSharp-logo.png
---
The **[GeneticSharp v2.2.0](https://github.com/giacomelli/GeneticSharp)** is out.


The additions of this version are the new whole sample and extensions showing how to use GeneticSharp to solve a Sudoku.

<center>
<img src="../images/GeneticSharp-logo.png">
</center>

The GeneticSharp.Extensions project receive those new features:

# Multiple
### MultipleChromosome
Compound chromosome to artificially increase genetics diversity by evolving a list of chromosomes instead of just one.
Sub-genes are inlined into a single compound list of genes.

### MultipleFitness
Fitness class that can evaluate a compound chromosome by summing over the evaluation of its sub-chromosomes. 

# Sudoku
### ISudokuChromosome: 
Represents each type of chromosome for solving a sudoku is simply required to output a list of candidate sudokus.

### SudokuBoard
A class that represents a Sudoku, fully or partially completed. 
Holds a list of 81 int for cells, with 0 for empty cells.
Can parse strings and files from most common formats and displays the sudoku in an easy to read format.

### SudokuCellsChromosome
This simple chromosome simply represents each cell by a gene with a value between 1 and 9, accounting for the target mask if given.

### SudokuFitness
Evaluates a sudoku chromosome for completion by counting duplicates in rows, columns, boxes, and differences from the target mask.

### SudokuPermutationsChromosome
This more elaborated chromosome manipulates rows instead of cells, and each of its 9 gene holds an integer for the index of the row's permutation amongst all that respect the target mask.
Permutations are computed once when a new Sudoku is encountered, and stored in a static dictionary for further reference.

### SudokuRandomPermutationsChromosome
This chromosome aims at increasing genetic diversity of SudokuPermutationsChromosome, which exhibits only 9 permutation genes.
Here, instead, an arbitrary number of Sudokus are generated where for each row, a random gene is picked amongst an arbitrary number of corresponding permutation genes.

# Samples
GTK# sample
![gtk-sudoku-sample](https://user-images.githubusercontent.com/177389/47957137-6bff2200-df8f-11e8-8b07-a144289389a0.png)

<hr>

# Thanks to
I would like to thanks to Jean-Sylvain Boige (@jsboige) for contributing with those great new samples and extensions and for use GeneticSharp in his [Artificial Intelligence course in French engineering schools (course)](https://github.com/giacomelli/GeneticSharp/pull/43#issuecomment-433662175).

Take a look on the pull-request for more details about those new features: [New Sudoku extension and GTK# sample #43](https://github.com/giacomelli/GeneticSharp/pull/43).

Let's evolve!

# Titanic dataset visualization using d3.js and dimle.js

## Summary 
RMS Titanic was a British passenger liner that sank in the North Atlantic Ocean in the early morning hours of 15 April 1912, 68% of the passengers on board perished. However, there is a difference in the survival chance among passengers across passenger socioeconomic status, age, gender and the fact that if they are traveling alone or with their family.  The goal of this visualization is representing this difference in a way so that the viewers can easily explore the situations.

## Design 
Objective:
The story is to visualize the chance of survival across different passenger categories like socioeconomic status, age, and gender. The data I want to encode in the charts include passenger class, gender, whether they are children,  whether they survived or perished in this catastrophe.

### Data Cleaning:
The original data was already cleaned but I had to generate some factor variables based on the original data like categorizing their age into four different groups (Children, Youth, Adults, and Seniors) and also whether they are traveling with their family or alone based on the number of siblings and children on the board.

### Chart Selections:
* Bar chart is chosen because its best usage is for comparison of different categories. 
* Stacked bar chart uses color to encode the grouped data for each category, then it was used for encoding survived and died per category.


### Visual Encoding:
* x position: passenger category.
* y position: the counts or the percentage of the passenger. 
* color hue: survived or died.


### Library Selecting
the primary visual library used in this project is dimple.js for creating these charts. The aim of dimple is to open up the power and flexibility of d3 to analysts. It aims to give a gentle learning curve and minimal code to achieve something productive. It also exposes the d3 objects so you can pick them up and run to create some really cool stuff.

## Feedback
Feedbacks are collected through in person interview and the suggestion for improvements are considered in the final chart.

* Feedback 1
	* Documenting JavaScript with JSDoc
	* Add summary section in the README.md
	* Add design section to explain the reasoning behind the visualization decisions like why bar chart and why stacked bar chart?

* Feedback 2

* Feedback 3

## Resources 
* Titanic information: https://en.wikipedia.org/wiki/RMS_Titanic
* Dimple js : http://dimplejs.org/
* Dimple js examples: http://dimplejs.org/examples_index.html
* Documenting javaScript with JSDoc: http://usejsdoc.org/about-commandline.html

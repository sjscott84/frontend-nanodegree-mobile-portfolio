# Website Performance Optimization portfolio project

This project was to optimaze a provided website.

## Install

No installation needed simply go to http://sjscott84.github.io/frontend-nanodegree-mobile-portfolio/dist/

## Updates Made

### index.html

#### Updates made to get index.html a PageSpeed Insights score of 90+

* Inlined all CSS to the html page.
* Added media="print" to print.css.
* Removed Google Fonts API as impact made was not enough to justify extra load time, especially as the fonts were already specifed in the css.
* Updated google analytics info to ensure it loads async.
* Changed file size for images profilepic.jpg and pizzeria.jpg so that they matched dimensions outlined in html file.
* Optimized images using Gulp.
* Minified js and css files using Gulp.


### views/js/main.js

* Added 'use strict' to file.

#### Updates made to optimize sliding pizzas

##### updatePositions function

* Moved the document.body.scrollTop out of the for loop so it is only being called once per function call.
* As there were only 5 numbers used for math.sin (0-4) I created a phaseArray variable to hold these figures so they do not need to be calculated each time the for loop runs.
* Created a for loop to push math.sin number to phaseArray array.
* Changed items.style.left to items.style.transform to eliminate some of the layout time.
* Changed the window.performance function to show the average of 60 frames instead of 10.

##### On DOM load

* Changed items variable to a global array that gets created when the DOM loads.
* Resized pizza image to match what is shown on screen and used Gulp to optimize.
* Reduced the number of pizzas being created.
* Moved elem varaible out of the foor loop in the anonymous function.
* Amended elem.basicleft to elem.style.left due to use of transformX.
* Amended CSS to use transform: translatez(0) and backface-visibility: hidden.
* created movingPizza variable to hold the movingPizzas1 id.

#### Updates made to optimize resizing pizzas

* Added a fourth size for X-large pizzas.
* In changeSliderLabel, changed the querySelector all to getElementById and made this a variable out side the switch case.
* Changed to size to be a percentage (e.g. small is 25% and x-large to %75) of original image.
* Elimated the determineDX function as it was no longer needed once resize was changed to percentages.
* Changed pizzas variable to use document.getElementbyClassName as this is faster than querySelectorAll.
* Moved pizzasDiv variable out of the for loop.
* Changed the variables that hold elements(pizzaSize & pizzas) to global, so they don't have to be fetched when the function is called.

## Technical

Technical details for the pizzeria site can be found at https://github.com/sjscott84/frontend-nanodegree-mobile-portfolio/tree/master/out

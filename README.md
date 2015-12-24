# Website Performance Optimization portfolio project

This project was to optimaze a provided website.

## Install

No installation needed simply go to http://sjscott84.github.io/frontend-nanodegree-mobile-portfolio/

## Updates Made

### index.html

#### Updates made to get index.html a PageSpeed Insights score of 90+

* Inlined all CSS to the html page.
* Added media="print" to print.css.
* Removed Google Fonts API as impact made was not enough to justify extra load time, especially as the fonts were already specifed in the css.
* Updated google analytics info to ensure it loads async.
* Changed file size for images profilepic.jpg and pizzeria.jpg so that they matched dimensions outlined in html file.
* Optimized images using imageOptim tool.
* Minified index.html using http://www.willpeavy.com/minifier/.


### views/js/main.js

#### Updates made to optimize sliding pizzas

* Changed items variable to a global array that gets created when the DOM loads.
* Moved the document.body.scrollTop out of the for loop so it is only being called once per function call.
* As there were only 5 numbers used for math.sin (0-4) I created a phaseArray variable to hold these figures so they do not need to be calculated each time the for loop runs.
* Created a for loop to push math.sin number to phaseArray array.
* Changed items.style.left to items.style.transform to eliminate some of the layout time.
* Amended layout so sliding pizzas only render within the container, thus reducing the number of pizzas needed to be rendered with each scroll.
* Changed the window.performance function to show the average of 60 frames instead of 10.
* Resized pizza image to match what is shown on screen and used ImageOptim to optimize.
* Reduced the number of columns and the number of pizzas being created.

#### Updates made to optimize resizing pizzas

* Added a fourth size for X-large pizzas.
* Changed to size to be a percentage (e.g. small is 25% and x-large to %75) of original image.
* Elimated the determineDX function as it was no longer needed once resize was changed to percentages.
* Changed pizzas variable to use document.getElementbyClassName as this is faster than querySelectorAll.

## Technical

Technical details for the pizzeria site can be found at https://github.com/sjscott84/frontend-nanodegree-mobile-portfolio/tree/master/out

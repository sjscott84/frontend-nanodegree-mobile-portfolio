# Website Performance Optimization portfolio project

## index.html

## Updates made to get

## views/js/main.js

### Updates made to optimize sliding pizzas

* Changed items to a global array that gets created when the DOM loads.
* Moved the document.body.scrollTop out of the for loop so it is only being called once per function call
* As there were only 5 numbers used for math.sin (0-4) I created a phaseArray variable to hold these figures so they do not need to be calculated each time the for loop runs.
* Created a for loop to push math.sin number to phaseArray array.
* Changed items.style.left to items.style.transform to eliminate some of the layout time.
* Ameded layout so sliding pizzas only render within the container, thus reducing the number of pizzas needed to be rendered with each scroll.
* Changed the window.performance function to show the average of 60 frames instead of 10.
* Resized pizza image to match what is shown on screen and used ImageOptim to optimize.
* Reduced the number of columns and the number of pizzas being created.

### Updates made to optimize resizing pizzas

* Added a fourth size for X-large pizzas.
* Changed to size to be a percentage (e.g. small is 25% and x-large to %75 of original image).
* Elimated the determineDX function as it was no longer needed once resize was changed to percentages.
* Changed pizzas variable to use document.getElementbyClassName as this is faster than querySelectorAll.
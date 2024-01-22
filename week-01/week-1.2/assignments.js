/*

1. Create a counter in Javascript ( counts down to 30 to 1)

2. Calculate the time it takes between a setTimeout call and    
   the inner function actually running.

3. Create a terminal clock (HH:MM:SS)

*/


var startTime = Date.now (); // get the current time in milliseconds

setTimeout (function () {
   var endTime = Date.now (); // get the current time after the delay
   var diff = endTime - startTime; // calculate the difference
   console.log ("The actual delay was " + diff + " milliseconds");
}, 1000);
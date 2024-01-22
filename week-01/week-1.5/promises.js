// const fs = require("fs");

// // my own asynchronous function
// function manishReadsFile(callback){
//     fs.readFile("week-01/week-1.5/a.txt", "utf-8", function(err, data){
//         callback(data);
//     });
// }

// // callback function to call
// function onDone(data){
//     console.log(data);
// }

// manishReadsFile(onDone);

/*

In your code, you have defined the onDone function as a callback function that takes data 
as its parameter, and logs it to the console. You have passed this function as the cb argument
to the manishReadsFile function. The manishReadsFile function uses the fs.readFile method to 
read a file asynchronously34. When the fs.readFile method finishes reading the file, it invokes 
the cb function with the file data as its argument. This executes the onDone function with the
file data, and logs it to the console.

*/



// above code can be written in a better,cleaner way
// cleaner way using promises


// const fs = require("fs");

// // my own asynchronous function
// function manishReadsFile(){
//     return new Promise(function(resolve){
//         fs.readFile("week-01/week-1.5/a.txt", "utf-8", function(err, data){
//             resolve(data);
//         });
//     });
// }

// // callback function to call
// function onDone(data){
//     console.log(data);
// }

// manishReadsFile().then(onDone);


//------------------------------------------------------------------

// var p = new Promise(function(resolve){

// });
// console.log(p);

//-------------------------------------------------------------------------

// let promiseOne = new Promise(function(resolve){
//     resolve("hi there");
// });

// promiseOne.then(function(){
//     console.log(promiseOne);
// })


// ---------------------------------------------------------------

  
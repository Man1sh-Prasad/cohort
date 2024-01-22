// function manishAsyncFunction(){
//     let p = new Promise(function(resolve){
//         // do some asynchronous function
//         resolve("hello there, resolved");
//     });
//     // console.log(p)
//     return p;
// }

// const { error } = require("console");
// const { readdirSync } = require("fs");

// function main(){
//     manishAsyncFunction().then(function(value){
//         console.log('before logging value');
//         console.log(value);
//         console.log('after logging value');
//     });
// }
// main();
// console.log('after main');

// ------------------------------------------------

// function manishAsyncFunction(){
//     let p = new Promise(function(resolve){
//         setTimeout(() => {
//             resolve("hello there, resolved");
//         }, 10000);
        
//     });
//     return p;
// }

// async function main(){
//     let value = await manishAsyncFunction();
//     console.log('before logging value');
//     console.log(value);
//     console.log('after logging value');
// }
// main();
// console.log('after main');



//-----------------------------------------------------------------

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         // console.log(response);
//         const data = response.json();
//         console.log(data);
//     } catch (error) {
//        console.log("E:", error); 
//     }
// }
// getAllUsers();

// in above code response.json takes time to convert all the data 
// so we need to use await

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         // console.log(response);
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//        console.log("E:", error); 
//     }
// }
// getAllUsers();


// writing above code using .then(), .catch()

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response) => {
//     return response.json();
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => {
//     console.log(error);
// })
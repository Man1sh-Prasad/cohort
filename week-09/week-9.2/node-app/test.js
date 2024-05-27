"use strict";
// const x: number = 10;
// console.log(x)
// ---- how to provide argument to a function -------------
// function greet(firstname: string) {
//     console.log("Hello " + firstname);
// }
// greet("Manish")
// ------ create a sum function -----------
// function sum(a: number, b: number) {
//     let sum: number = a + b
//     console.log("Sum = " + sum)
// }
// sum(20, 5)
function sum(a, b) {
    return a + b;
}
const ans = sum(20, 5);
console.log(ans);
// ----- create a function that takes another function as an input and runs it after n sec
function runAfter1S(func) {
    setTimeout(func, 5000);
}
runAfter1S(function () {
    console.log('hello');
});

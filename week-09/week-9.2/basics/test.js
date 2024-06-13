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
// function sum(a: number, b: number): number {
//    return a + b
// }
// const ans = sum(20, 5)
// console.log(ans)
// ----- create a function that takes another function as an input and runs it after n sec
// function runAfter1S(func: () => void) {           // void because it returns nothing
//     setTimeout(func, 5000)
// }
// const fnc = (): void => {
//     console.log('hello fnc')
// }
// runAfter1S(function(){
//     console.log('hello')
// })
// runAfter1S(fnc)

function callAfter1S(cb) {
    setTimeout(cb, 4000);
}
callAfter1S(() => {
    console.log("hello");
    return 5;
});

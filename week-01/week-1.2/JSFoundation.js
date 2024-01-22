// Array and Objects

// const allUsers = [{
//     name: "Manish",
//     age: 21
// }, {
//     name: 'Akash',
//     age: 21
// }, {
//     name: "Bunty",
//     age: 19
// }];

// for( let i=0; i<allUsers.length; i++ ){
//     if( allUsers[i]['age'] == 21) {
//         console.log(allUsers[i]["name"]);
//     }
// }

// above line of code (line 15) can be more and more 
// nested for example allUsers[i]["age"]['gender]


//------------------------------------------------------------------------------

// Functions

    // take some inputs, do some logic and returns an output

// function sum(a, b){
//     return a + b;
// }

// const value = sum(1, 2);
// console.log(value);




// callbacks
// function sum(num1, num2, fNToCall){
//     let result = num1 + num2;
//     fNToCall(result);
// }

// function displayResult(data) {
//     console.log(`Total sum is ${data}.`);
// }

// function displayResultPassive(data) {
//     console.log(`${data} is the sum.`);
// }

// sum(20, 34, displayResult);         // callback


// Basic calculator

function calculate(a, b, arithmeticFuntion){
    const result = arithmeticFuntion(a, b);
    return result;
}

function sum(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

const ans = calculate(39, 34, subtract);
console.log(ans);

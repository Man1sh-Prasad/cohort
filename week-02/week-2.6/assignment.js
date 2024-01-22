/*
create an map function that takes 2 inputs an array and a tranformation callback function
 and transforms the array into a new one using the transformation funciton
*/


function map(array, callback){
    let result = [];

    for(let i=0; i<array.length; i++){
        result.push(callback(array[i]))
    }
    return result;
}

let arr = [1, 2, 3, 4, 5];

let squaredArray = map(arr, function(i){
    return i*i;
}) 
console.log(squaredArray)
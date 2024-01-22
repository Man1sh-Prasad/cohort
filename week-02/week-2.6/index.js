// map, filter and arrow function

const { transcode } = require("buffer");

// -----------------------------------------------

// function sum(a, b){
//     return a+b;
// }

// const sum = (a, b) =>{
//     return a+b;
// }

// const ans = sum(1, 3);
// console.log(ans);


// map()  --------------------------------------------------

// given an array give me baack a new array in which every value
// is multiplied by 2

// for example [1, 2, 3, 4, 5] ==> [2, 4, 6, 8, 10]

    // const array = [1, 2, 3, 4, 5];
    // const newArray = [];

    // for(let i=0; i<array.length; i++){
    //     newArray.push(array[i]*2);
    // }
    // console.log(newArray)

    // above code using map()

    // const array = [1, 2, 3, 4, 5];

    // function transform(i){
    //     return i*2;
    // }
    // const newArray = array.map(transform);
    // console.log(newArray)

    // other way to use map

    // const array = [1, 2, 3, 4, 5];   
    // const newArray = array.map(function transform(i){   // or you can use function(i) also
    //     return i*2;
    // });
    // console.log(newArray)



// filter() ------------------------------------------

// const arr = [1, 2, 3, 4, 5, 6]; 

// function filterLogic(i){
//     if( i%2 == 0){
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// const newArray = arr.filter(filterLogic);
// console.log(newArray);

// other way to filter

const arr = [1, 2, 3, 4, 5, 6];

const newArray = arr.filter(function(i){
    if( i%2 == 0){
        return true;
    }
    else {
        return false;
    }
});
console.log(newArray);
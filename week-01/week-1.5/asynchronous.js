// function findSum(n){
//     let ans = 0;
//     for( let i=0; i<n; i++ ){
//         ans += i;
//     }
//     return ans;
// }

// function findSumTill100(){
//     console.log(findSum(100));
// }

// setTimeout(findSumTill100, 1000);
// console.log('the sum till 100 is');


// other common async function 
    // fs.readFile - to read a file from your file system
    // Fetch - to fetch some data from an API endpoint
    // 

// const fs = require('fs');   // filesystem module

// fs.readFile("a.txt", "utf-8", function(err, data){
//     console.log(data);
// });

// console.log("hi there");

//----------------------------------------------------------------

const fs = require('fs');   // filesystem module

fs.readFile("week-01/week-1.5/a.txt", "utf-8", function(err, data){
    if(err){
        console.error(err)
        return;
    }
    console.log(data);
});

console.log("hi there");

for( let i=0; i<100; i++ ){ // this take very long time than a file read,
    let a = 0;
    a += 1;
}
console.log("hi there 2");

// in JS if the thread is busy somewhere, even if a callback is resolved it will still wait untill the thread 
// becomes idle
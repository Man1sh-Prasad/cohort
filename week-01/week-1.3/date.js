const currentDate = new Date;

console.log(currentDate.getDate());
console.log(currentDate.getHours());
console.log(currentDate.getMinutes());
console.log(currentDate.getSeconds());

console.log(`Time in millisecond since 1970: ${currentDate.getTime()}`);

function calculateTime (){
    let a = 0;
    for( let i=0; i<100000; i++ ){
        a += i;
    }
    return a;
}

calculateTime();

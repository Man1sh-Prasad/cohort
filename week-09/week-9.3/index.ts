// 1. enums ------------------

/**
enum Direction {
    Up = "Up",              // you can assign number also e.g if Up = 1. down , left , right will automatically got the 
    Down = "Down",          // value of 2, 3, 4 respectively
    Left = "Left",
    Right = "Right"
}

function doSomething(keyPressed: Direction) {
    // do something
    if(keyPressed == Direction.Up) {
        // go forward
    }
    // ..
}

doSomething(Direction.Up)
console.log(Direction.Up)
 */

/**
const app = express()

enum ResponseStatus {
    Success = 200,
    NotFound = 404,
    Error = 500
}

app.get('/', (req, res) => {
    if(!req.query.id) {
        return res.status(ResponseStatus.NotFound).json({});
    } else {
        return res.status(ResponseStatus.Success).json({});
    }
})
*/


// generics ---------------

/**

type Input = number | string

function firstEle(arr: Input[]) {
    return arr[0]
}
const val = firstEle(["manish", "prasad"])
console.log(val)


// above code can be written using generics

function identity<T>(arg: T) {
    return arg;
}

let outputOne = identity<string>("mystring");
let outputTwo = identity<number>(9)

 */

//-------------------------
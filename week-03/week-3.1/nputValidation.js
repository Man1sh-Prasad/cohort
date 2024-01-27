// input validation
// read zod documentation , read about coercing

// const express = require("express");
// const zod = require("zod")
// const app = express();

// const schema = zod.array(zod.number())

// app.use(express.json());

// app.post('/health-checkup', function(req, res){
//     const kidneys = req.body.kidneys;
//     const response = schema.safeParse(kidneys);

//     if( !response.success ){
//         res.status(411).json({
//             msg: "input is invalid"
//         })
//     }
//     else{
//         res.send({response});
//     }  
// });

// app.listen(3000, function(){
//     console.log("running");
// });

//----------------------------------------


const z = require("zod")

// if this is an array of numbers with atleast 1 input, return true, else return false
// function validateInputOne(arr){
//     const schemaTwo = z.array(z.number()).nonempty();

//     const response  = schemaTwo.safeParse(arr);
//     console.log(response);
// }
// validateInputOne([11, 2, 4]);
// validateInputOne([]);


// write zod schema
// {
//     email: string => should look like email
//     password: atleast 8 letters 
//     country: "IN" or "US"
// }

function validateTwo(obj){
    const schemaThree = z.object({
        email: z.string().email(),
        password: z.string().min(8), 
    })

    const resp = schemaThree.safeParse(obj);
    console.log(resp)
}

validateTwo({
    email: "manish@gmail.com",
    password: "M@nish123",
})

// app.post('/login', function(req, res){
//     const input = req.body;
//     const response = validateTwo(input);

//     if( !response.success ) {
//         res.json({
//             msg: "invalid input"
//         })
//         return;
//     }
// })



const express = require("express");

const app = express();

app.get('/', function(req, res){
    // do health checkups
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;

    if( username != "manish" || password != "pass"){
        res.status(403).json({
            msg: "user doesnot exist"
        });
        return;
    }

    if( kidneyId != 1 && kidneyId != 2 ){
        res.status(411).json({
            msg: "wrong input"
        })
    }

    res.json({
        msg: "Your kidney is fine"
    })
})

app.listen(3000, function(){
    console.log('example app listening on 3000');
})

// what if you need to introduce another route that does kidney 
// replacement inputs need to be same.

// app.put('/', function(req, res){
//     // do health checkups
//     const kidneyId = req.query.kidneyId;
//     const username = req.headers.username;
//     const password = req.headers.password;

//     if( username != "manish" || password != "pass"){
//         res.status(403).json({
//             msg: "user doesnot exist"
//         });
//         return;
//     }

//     if( kidneyId != 1 && kidneyId != 2 ){
//         res.status(411).json({
//             msg: "wrong input"
//         })
//     }

//     // do the kidney replacement
//     res.json({
//         msg: "Your kidney is fine"
//     })
// })


    // we can write above code using function
function userValidation(username, password){
    if( username != "manish" || password != "pass"){
        return false
    }
    return true;
}

function kidneyValidation(kidneyId){
    if(kidneyId != 1 && kidneyId != 2 ){
        return false;
    }
    return true;
}

app.put('/', function(req, res){
    // do health checkups

    if( !userValidation(req.headers.username, req.headers.password) ){
        res.status(403).json({
            msg: "user doesnot exist"
        });
        return;
    }

    if( !kidneyValidation( !req.query.kidneyId) ){
        res.status(411).json({
            msg: "wrong input"
        })
    }

    // do the kidney replacement
    res.json({
        msg: "Your kidney is fine"
    })
})


    // we need to perform the same the logic which is written in above
    // but the code will repeat itself
    // Best way is to use 'middleware'. check index2.js
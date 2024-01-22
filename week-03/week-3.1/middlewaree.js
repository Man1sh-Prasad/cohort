const express = require("express");

const app = express();

app.use(express.json())

// defining middleware ( just another function )
function userMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;

    if( username != "manish" || password != "pass"){
        res.status(403).json({
            msg: "incorrect input / user not found"
        });
    } 
    else {
        next();
    }
};

function kidneyMiddleware(req, res, next){
    const kidneyId = req.query.kidneyId;

    if( kidneyId != 1 && kidneyId != 2){
        res.status(403).json({
            msg: `how you have ${kidneyId} kidneys. write valid input`
        });
    }
    else {
        next();
    }
}

// using the middleware i.e (userMiddleware, kidneyMiddleware)
app.get('/health-checkup', userMiddleware, kidneyMiddleware, function(req, res){
    //do check up

    res.send("you are healthy");
})

app.get('/kidney-check', userMiddleware, kidneyMiddleware, function(req, res, next){
    // do something with your kidney

    res.send("your kidney is healthy")
})

app.get('/heart-checkup', userMiddleware, function(req, res, next){
    // do your heart checkup 

    res.send('your heart is healthy')
})

app.listen(3000, function(){
    console.log("running")
})
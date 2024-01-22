const express = require("express")

const app = express();

app.get('/health-checkup', function(req, res, next){
    // do some pre-checks if thing goes fine, call next() which will
    // route the req to the next function 
    res.send('ehllo')
    console.log("hello req1");
    next(); //if things go fine, i will call next()
}, function(req, res, next){
    console.log('hello req2');
    next();
}, function(req, res, next){
    console.log("hello req3");
    res.send("all done")
})

app.listen(3000, function(){
    console.log("hello");
});
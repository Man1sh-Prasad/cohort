const express = require("express");

const app = express();

app.use(express.json());

app.post('/health-checkup', function(req, res){
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send(`You have ${kidneyLength} kidneys`)
});

// error handling middleware
// global catches - defined at the end of all  the routes
app.use(function(err, req, res, next){
    res.json({
        msg: "sorry something went wrong"
    })
})
// global catches helps you give a better error messages



app.listen(3000, function(){
    console.log("running");
});

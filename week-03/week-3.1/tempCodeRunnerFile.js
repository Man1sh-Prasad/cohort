

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
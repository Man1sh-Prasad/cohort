// creating a HTTP server
// using express

const express = require('express');

const app = express();

const port = 3000;

function sum(n){
    let ans = 0;

    for(let i=0; i<=n; i++){
        ans += i;
    }
    return ans;
}

app.get("/", function(req, res){
    res.send("Hello there!!")
    
})

app.get("/sum", (req, res)  =>{
    const n = req.query.n;          // or  const n = parseInt(req.query.n);
    const ans = sum(n);
    res.send(ans.toString());
})

app.listen(port, function(){
    console.log(`example listening on port ${port}`)
});

// issues faced in above code

/*

The issue you're facing is related to the res.send() method in Express. When you're calculating
the sum in your /sum route and sending it back using res.send(ans), Express interprets the
response as plain text.

However, when you perform calculations and send a numeric value using res.send(), Express expects
it to be a response status code. For instance, sending a number like 6 is interpreted as an attempt 
to set a status code, which is invalid, leading to the error you encountered earlier.

To fix this, you can explicitly convert the calculated sum to a string before sending 
it in the response. Here's an updated version of your code:

        res.send(ans):  => res.send(ans.toString());

 */
const express = require('express')
const bp = require('body-parser')

const port = 3001

const app = express();

app.use(bp.json());

app.post('/', (req, res) => {
    console.log(req.body);
    res.send('<b> Hello </b>')
})

app.post('/backend-api/conversation', (req, res) => {
    const message = req.query.message;
    console.log(message);
    res.send('<b> Hello </b>')
})

// sending status code
app.post('/status', (req, res) => {
    res.status(401).send('Hello World')
})


app.listen(port, function(){
    console.log(`Example app listening on port ${port}`)
}) 
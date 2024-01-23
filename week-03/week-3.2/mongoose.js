const express = require("express")
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect("mongodb+srv://manish:Mongo8847@cluster0.ynkho4y.mongodb.net/newuserapp")

const User = mongoose.model('Users', 
    { name: String,
    email: String,
    password: String });

// const user = new User({name: 'Manish Prasad', email: 'manish@gmail.com', password: 'pass123'})

// user.save();


// making a signup route

app.post('/signup', async function(req, res){
    const userID = req.body.userID;
    const password = req.body.password;
    const name = req.body.name;

    // check if user already exist
    const existingUser = await User.findOne({email: userID});
    if( existingUser ){
        return res.status(400).send('UserID already exists')
    }

    const user  = new User({
        name: name, 
        email: userID,
        password: password
    })

    user.save();
    res.json({"msg": "user created succesfully"})
})

// CRUD - Create Read Update Delete
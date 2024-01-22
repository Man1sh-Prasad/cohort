const express = require("express");
const app = express();

const users = [{
    name: "manish",
    kidneys: [{
        healthy: false
    }]
}]

app.use(express.json());

app.get("/", function(req, res){
    const userKidneys = users[0].kidneys;
    const numberOfKidneys = userKidneys.length;

    let numberOfHealthyKidneys = 0;
    for(let i=0; i<userKidneys.length; i++){
        if(userKidneys[i].healthy){
            numberOfHealthyKidneys += 1;
        }
    }
    let numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys})
})



app.post("/", function(req, res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({healthy: isHealthy});
    res.json({
        msg: "Done!"
    })
})

app.put("/", function(req, res){
    for(let i=0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true
    }
    res.json({});           // send res.json() otherwise the PUT request will  remain hung
})

// removing all the unhealthy kidneys
function AtLeastOneUnhealthyKidney(){
    for(let i=0; i<users[0].kidneys.length; i++){
        if( !users[0].kidneys.healthy ){
            return true;
        }
    }
    return false;
}

// app.delete("/", function(req, res){
//     // if altleast one unhealthy kidney is there do delete, else return 411

//     if(AtLeastOneUnhealthyKidney()){
//         const newKidneys = [];
//         for(let i=0; i<users[0].kidneys.length; i++){
//             if(users[0].kidneys[i].healthy){
//                 newKidneys.push({
//                     healthy: true
//                 })
//             }
//         }
//         users[0].kidneys = newKidneys;
//         res.json({msg: "unhealthy kidney removed"})
//     }
//     else{
//         res.status(411).json({ msg: "You have no unhealthy"})
//     }
   
// })

app.delete("/", function(req, res){

    if( AtLeastOneUnhealthyKidney()){
        const newKidneys = users[0].kidneys.filter(function(i){
            if( users[0].kidneys.healthy){
                return true;
            }
            else{
                return false;
            }
        })
        users[0].kidneys = newKidneys;
        res.json({msg: "unhealthy kidney removed"})
    }
    else{
        res.status(411).json({ msg: "You have no unhealthy kidney"})
    }
    
})

app.listen(3000);

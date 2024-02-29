const express = require("express");
const { createTodo, updateTodo } = require("./types.js");
const { Todo } = require("./db.js")
const app = express();

app.use(express.json());

app.post('/todos', async function(req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if( !parsedPayload.success ) {
        res.status(411).json({
            msg: "You have sent the wrong input"
        })
        return;
    }

    // put it in mongodb
    await Todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: "Todo created successfully !!!!"
    })
})

app.get('/todos', async function(req, res) {
    const allTodos = await Todo.find({});
    res.json({allTodos})
})

app.put('/completed', async function(req, res) {
    const uploadPayload = req.body;
    const parsedPayload = updateTodo.safeParse(uploadPayload);

    if( !parsedPayload.success ) {
        res.send(411).json({
            msg: "You have sent the wrong input"
        })
        return;
    }
    
    // check id is correct 
    const todoId = await Todo.findOne({
        _id: req.body.id
    })
    if( !todoId ) {
        return res.json({
            msg: "Todo doesnot exist. Enter a valid todo-id"
        })
    }
    
    // check if already marked as done
    if( todoId.completed ) {
        return res.json({
            msg: "Already mark as done"
        })
    }

    // mark as done
    await Todo.updateMany({
        _id: req.body.id
    }, {
        completed: true
    })
    res.json({
        msg: "Todo marked as completed"
    })
})


app.listen(3000, function() {
    console.log("listening on port 3000");
})
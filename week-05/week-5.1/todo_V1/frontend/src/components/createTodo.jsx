import { useState } from "react";

export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleAddTodo = () => {
        fetch("http://localhost:3000/todos", {
            method: "POST",
            body: JSON.stringify({
                title: title,
                description: description
            }), 
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(async function(res) {
            if (res.ok) {
                const json = await res.json();
                alert("Todo Added");
                // Clear input fields after adding todo
                setTitle("");
                setDescription("");
            } else {
                throw new Error("Failed to add todo");
            }
        })
        .catch(error => {
            console.error("Error adding todo:", error);
            alert("Failed to add todo. Please try again.");
        });
    };

    return( 
        <div>
            <input type="text" placeholder="title" value={title}
            onChange={e => setTitle(e.target.value)}></input>

            <input type="text" placeholder="description" value={description}
            onChange={e => setDescription(e.target.value)}></input>

            <button onClick={handleAddTodo}>Add Todo</button>
        </div>
    );
}

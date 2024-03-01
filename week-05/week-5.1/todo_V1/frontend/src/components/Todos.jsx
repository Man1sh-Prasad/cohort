/*
    todos = [
        {
            title: "gym",
            description: "go to gym"
        }
    ]
*/

export function Todos({todos}) {
    return (
        <div>
            {todos.map(function(todo) {
                // eslint-disable-next-line react/jsx-key
                return (<div key={todo.id}>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed == true ? "completed" : "Mark as done"}</button>
            </div>)
            })}
        </div>
    )
}


/*  

    todos = [
    {
        title : "go to gym",
        desc : "from 6-8",
        complete : "false"
    },
]

*/

export function Todos({ todos }) {
  return <div>
    {todos.map(function (todo) {
      return <div>
        <h1>{todo.title}</h1>
        <h2>{todo.description}</h2>
        <button>{todo.completed == true ? "completed" : "Mark As Complete"}</button>
      </div>
    })
    }

  </div>
}
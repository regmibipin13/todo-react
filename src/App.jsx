import { useEffect, useState } from "react"
import { AddTodo } from "./AddToto"
import { TodoList } from "./TodoList";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const todoItems = localStorage.getItem('todos')
    if (todoItems == null) return []
    return JSON.parse(todoItems)
  });

  useEffect(() => {
    console.log(todos);
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  function addTodo(todo) {
    setTodos(currentTodos => {
      return [...currentTodos, todo]
    })
  }

  function completeTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id);
    })
  }

  return (
    <div className="container py-3">
      <div className="row">
        <AddTodo addTodo={addTodo} />
        <TodoList todos={todos} toggleTodo={completeTodo} deleteTodo={deleteTodo} />
      </div>
    </div>
  )
}
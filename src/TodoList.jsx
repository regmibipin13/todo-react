import { TodoItem } from "./TodoItem"

export function TodoList({ todos, toggleTodo, deleteTodo }) {
    return (
        <div className="col-md-12 my-2">
            <div className="row">
                <div className="col-md-12">
                    <h3>Todo Lists</h3>
                </div>
                <div className="col-md-12 mt-3">
                    <ul>
                        {todos.length == 0 && "No Todos"}
                        {todos.map((todo) => {
                            return (
                                <TodoItem todo={todo} onToggle={toggleTodo} onDelete={deleteTodo} key={todo.id} />
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
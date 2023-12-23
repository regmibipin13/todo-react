export function TodoItem({ todo, onToggle, onDelete }) {
    return (
        <li key={todo.id}>
            <label>
                <input type="checkbox" checked={todo.completed} onChange={(e) => onToggle(todo.id, e.target.checked)} />
                &nbsp;&nbsp;
                {todo.title}
            </label>
            &nbsp;&nbsp;
            <button className="btn btn-sm btn-danger" onClick={() => onDelete(todo.id)}>Delete</button>
        </li>
    )
}
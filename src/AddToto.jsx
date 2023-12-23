import { useState } from "react"

export function AddTodo({ addTodo }) {

    const [item, setItem] = useState("");

    function handleFormSubmit(e) {
        e.preventDefault();

        if (item === "") return
        addTodo({ id: crypto.randomUUID(), title: item, completed: false });
        setItem("")
    }


    return (
        <div className="col-md-12 my-2">
            <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" onChange={(e) => setItem(e.target.value)} value={item} />
                </div>
                <button className="btn btn-block btn-success">Add</button>
            </form>
        </div>
    )
}
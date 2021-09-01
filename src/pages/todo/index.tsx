import React, { useState } from "react";

interface Todo {
    value: string,
    id: number,
}

const Todo = () => {
    const [text, setText] = useState('')
    const [todos, setTodos] = useState<Todo[]>([])

    const handleOnSubmit = (
        e: React.FormEvent<HTMLFormElement | HTMLInputElement | HTMLButtonElement>
    ) => {
        e.preventDefault();
        if (!text) return

        const newTodo: Todo = {
            value: text,            
            id: new Date().getTime()
        }
        setTodos([newTodo, ...todos])
        setText('')
    }

    const handleOnEdit = (id: number, value: string) => {
        const newTodos = todos.map((todo) => {
            if (todo.id === id) {
                todo.value = value
            }
            return todo
        })
        setTodos(newTodos)
    }

    return (
        <div>
            <form onSubmit={(event) => handleOnSubmit(event)}>
                <input type="text" value={text} onChange={(event) => setText(event.target.value)} />
                <button type="submit" onSubmit={(event) => handleOnSubmit(event)}>追加</button>
            </form>
            <ul>
                {todos.map((todo) => {
                    return <li key={todo.id}>
                                <input type="text" value={todo.value} onChange={(e) => handleOnEdit(todo.id, e.target.value)}/>
                            </li>
                })}
            </ul>
        </div>
    )
}

export default Todo
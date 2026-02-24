import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {removeTodo} from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

  return (
    <>
    <div className="text-white font-semibold mb-3">Todos</div>

    <ul className="space-y-3">
        {todos.map((todo) => (
            <li
            key={todo.id}
            className="flex justify-between items-center bg-zinc-700 px-4 py-2 rounded-lg"
            >
            <span className="text-gray-100">{todo.text}</span>

            <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-red-400 hover:text-red-500 transition"
            >
                ❌
            </button>
            </li>
        ))}
    </ul>

    </>
  )
}

export default Todos
import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice' 

function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

  return (
    <form onSubmit={addTodoHandler} className="flex gap-3 mb-6">
        <input
            type="text"
            className="flex-1 bg-zinc-700 rounded border border-zinc-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-700 text-gray-100 py-2 px-3 outline-none"
            placeholder="Enter a todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
        />
        <button
            type="submit"
            className="text-white bg-indigo-600 px-4 rounded hover:bg-indigo-700 transition"
        >
            Add
        </button>
    </form>
  )
}

export default AddTodo
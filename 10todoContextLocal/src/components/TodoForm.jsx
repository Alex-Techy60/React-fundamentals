import React, { useState } from 'react';
import { useTodo } from '../contexts';


function TodoForm() {
    
    const [todo, setTodo] = useState("");
    const {addTodo} = useTodo();

    const add = (e) => {
        e.preventDefault();

        if(!todo) return;

        addTodo({todo: todo, completed: false});
        setTodo("");
    }

    return (
        <form
            onSubmit={add}
            className="flex items-center bg-white/10 border border-white/10 rounded-full overflow-hidden"
            >
            <input
                type="text"
                placeholder="What’s on your mind?"
                className="flex-1 bg-transparent px-5 py-3 text-white placeholder-gray-400 outline-none"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />

            <button
                type="submit"
                className="bg-emerald-500 hover:bg-emerald-600 transition px-6 py-3 text-sm font-semibold text-black"
            >
                Add
            </button>
        </form>

    );
}

export default TodoForm;


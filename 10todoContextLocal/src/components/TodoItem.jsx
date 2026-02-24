import React, {useState} from "react";
import { useTodo } from "../contexts";

function TodoItem({ todo }) {

    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.todo);
    const {deleteTodo, updateTodo, toggleTodo} = useTodo();

    const editTodo = () => {
        updateTodo(todo.id, {...todo, todo: todoMsg});
        setIsTodoEditable(false);
    }
    const toggleCompleted = () => {
        toggleTodo(todo.id);
    }

    
    return (
        <div
            className={`flex items-center gap-3 px-4 py-3 rounded-xl border border-white/10 transition-all duration-300
            ${
                todo.completed
                ? "bg-emerald-500/20 text-gray-300"
                : "bg-white/10 hover:bg-white/15"
            }`}
        >

            <input
                type="checkbox"
                className="w-4 h-4 accent-emerald-500 cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />

            <input
                type="text"
                className={`flex-1 bg-transparent outline-none text-sm md:text-base
                    ${todo.completed ? "line-through text-gray-400" : "text-white"}
                    ${isTodoEditable ? "border-b border-white/30" : ""}
                `}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />

            {/* Edit, Save Button */}
            <button
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition disabled:opacity-40"
                onClick={() => {
                    if (todo.completed) return;
                    isTodoEditable ? editTodo() : setIsTodoEditable(true);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "💾" : "✏️"}
            </button>

            {/* Delete Todo Button */}
            <button
                className="w-8 h-8 rounded-full bg-red-500/20 hover:bg-red-500/40 flex items-center justify-center transition"
                onClick={() => deleteTodo(todo.id)}
            >
                🗑️
            </button>

        </div>
    );
}

export default TodoItem;

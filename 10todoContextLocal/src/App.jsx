import { useEffect, useState } from "react"
import { TodoProvider } from "./contexts";
import {TodoForm , TodoItem} from "./components";

function App() {


  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev]);
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)));
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  const toggleTodo = (id) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id) ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if(todos && todos.length > 0){
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleTodo}}>
      <div className="min-h-screen bg-linear-to-br from-[#0f172a] via-[#020617] to-[#020617] flex items-center justify-center px-4">
        
        <div className="w-full max-w-2xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl p-6 text-white">
          <h1 className="text-3xl font-bold text-center mb-8 tracking-wide">
            📝 Manage Your Todos
          </h1>

          <div className="mb-6">
            <TodoForm />
          </div>

          <div className="flex flex-col gap-3">
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-4 text-sm text-gray-400">
          Made with <span className="text-pink-400">💜</span> by{" "}
          <span className="font-semibold text-white">Alex McDominey</span>
        </div>

      </div>
    </TodoProvider>

  )
}

export default App

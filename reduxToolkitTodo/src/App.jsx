import { store } from './app/store'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-zinc-900 flex items-center justify-center">
        <div className="w-full max-w-md bg-zinc-800 p-6 rounded-xl shadow-lg">
          <h1 className="text-2xl font-bold text-white text-center mb-6">
            Redux Todo App
          </h1>
          <AddTodo />
          <Todos />
        </div>
      </div>
    </Provider>
  )
}

export default App

import {useState, useEffect} from 'react'
import './Get.css';
import Loader from '../Loader'
import Todo from '../Todo'
import TodoForm from '../TodoForm';

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [error, setError] = useState({})

  interface Todo {
    title: string;
    id: number;
    completed: boolean;
  }

  const handleCompleted = (index: number) => {
    const newTodos = [...todos]
    newTodos[index].completed = !newTodos[index].completed
    setTodos(newTodos)
  }

  const handleDelete =(index: number) => {
    const newTodos = [...todos]
    newTodos.splice(index,1)
    setTodos(newTodos)
  }

  const handleOnSubmit = (value: string) => {
    setTodos([...todos, {title: value, id: todos.length +1, completed: false }])
  }

  useEffect(() => {
    fetch('https://623dc3bedb0fc039d4bc0df3.mockapi.io/posts')
    .then(response => response.json())
    .then(res => setTodos(res.slice(0,10)))
    .catch(err => setError(err))
  }, [])
  return (
    <div className="app">
      {todos.length > 0 ? todos.map((todo:Todo, index: number) => <Todo todo={todo} index={index} handleCompleted={handleCompleted} handleDelete={handleDelete}/>) : (<Loader/>)}
      <TodoForm handleOnSubmit={handleOnSubmit} />
    </div>
  );
}

export default App;
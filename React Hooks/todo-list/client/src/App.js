import TodosList from './components/TodosList/TodosList';
import useFetch from './hooks/useFetch';
import './App.css';

function App() {
  const [todos, setTodos, isLoading] = useFetch('http://localhost:3030/jsonstore/todos');

  return (
      <div className='todos'>
        <h1 className="title" >TODO APP</h1>

        {isLoading
          ? <span>Loading...</span>
          : <TodosList todos={todos} />
        }

      </div>
  );
}

export default App;

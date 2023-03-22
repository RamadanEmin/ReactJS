import CreateTodo from './components/CreateTodo/CreateTodo';
import TodosList from './components/TodosList/TodosList';
import useFetch from './hooks/useFetch';
import useTodoApi from './hooks/useTodoApi';
import './App.css';

function App() {
  const [todos, setTodos, isLoading] = useFetch('http://localhost:3030/jsonstore/todos');
  const { createTodo} = useTodoApi();

  const createTodoHandler = async (todoData) => {
    try {
      const todo = await createTodo(todoData);
      setTodos(state => [
        ...state,
        todo
      ]);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
      <div className='todos'>
        <h1 className="title" >TODO APP</h1>

        {isLoading
          ? <span>Loading...</span>
          : <TodosList todos={todos} />
        }

        <CreateTodo createTodoHandler={createTodoHandler} />
      </div>
  );
}

export default App;

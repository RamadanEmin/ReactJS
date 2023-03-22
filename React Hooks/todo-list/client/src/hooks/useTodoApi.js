const url = 'http://localhost:3030/jsonstore/todos';

const useTodoApi = () => {
  const createTodo = (todoData) => {
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(todoData)
    }).then(res => res.json());
  };

  return {
    createTodo,
  };
};

export default useTodoApi;
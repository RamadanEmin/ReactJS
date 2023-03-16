import { useEffect, useState } from 'react';

function App() {
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/todos')
            .then(res => res.json())
            .then(data => {
                const result = Object.keys(data).map(id => ({ id, ...data[id] }));
                setTodos(result);
                setIsLoading(false);
            });
    }, []);

    return (
        <div>

            <main className="main">

                <section className="todo-list-container">
                    <h1>Todo List</h1>

                    <div className="add-btn-container">
                        <button className="btn" onClick={onTodoAdd}>+ Add new Todo</button>
                    </div>

                    <div className="table-wrapper">
                        
                    </div>
                </section>
            </main>

        </div>
    );
}

export default App;
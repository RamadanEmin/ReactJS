import { useState } from 'react';

import Header from './components/Header';

function App() {
    const [page, setPage] = useState('/home');

    const navigationChangeHandler = (path) => {
        setPage(path);
    };

    return (
        <div id="box">

            <Header
                navigationChangeHandler={navigationChangeHandler}
            />

            <main id="main-content">
            </main>

        </div>
    );
}

export default App;

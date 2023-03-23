import { Routes, Route } from 'react-router-dom';

import { AuthContext } from './contexts/AuthContext';
import useLocalStorage from './hooks/useLocalStorage';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

const initialAuthState = {
    _id: '',
    email: '',
    accessToken: ''
};

function App() {
    const [user, setUser] = useLocalStorage('user', initialAuthState);

    return (
        <AuthContext.Provider value={{ user }}>
            <div id="container">

                <Header />

                <main id="site-content">
                    <Routes>
                        <Route path='/dashboard/*' element={<Dashboard />} />
                    </Routes>
                </main>

                <footer id="site-footer">
                    <p>@PetMyPet</p>
                </footer>

            </div>
        </AuthContext.Provider>
    );
}

export default App;

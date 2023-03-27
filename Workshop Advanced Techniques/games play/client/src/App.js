import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { GameProvider } from './contexts/GameContext';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Logout from './components/Logout';
import Catalog from './components/Catalog';
import CreateGame from './components/CreateGame';
import EditGame from './components/EditGame';
import Footer from './components/Footer';

const Register = lazy(() => import('./components/Register'));

function App() {

    return (
        <AuthProvider>
            <div id="box">

                <Header />

                <GameProvider>
                    <main id="main-content">
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/login' element={<Login />} />
                            <Route path='/logout' element={<Logout />} />
                            <Route path='/register' element={
                                <Suspense fallback={<span>Loading...</span>}>
                                    <Register />
                                </Suspense>
                            } />
                            <Route path='/catalog' element={<Catalog />} />
                            <Route path='/create' element={<CreateGame />} />
                            <Route path='/edit/:gameId' element={<EditGame />} />
                        </Routes>
                    </main>
                </GameProvider>

                <Footer />

            </div>
        </AuthProvider>
    );
}

export default App;
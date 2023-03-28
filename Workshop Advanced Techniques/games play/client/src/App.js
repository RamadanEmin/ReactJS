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
import DetailsGame from './components/DetailsGame';
import Footer from './components/Footer';
import PrivateRoute from './components/common/PrivateRoute';
import GameOwner from './components/common/GameOwner';

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
                            <Route element={<PrivateRoute />}>
                                <Route path='/logout' element={<Logout />} />
                            </Route>
                            <Route path='/register' element={
                                <Suspense fallback={<span>Loading...</span>}>
                                    <Register />
                                </Suspense>
                            } />
                            <Route path='/catalog' element={<Catalog />} />
                            <Route element={<PrivateRoute />}>
                                <Route path='/create' element={<CreateGame />} />
                            </Route>
                            <Route element={<GameOwner />}>
                                <Route path='/edit/:gameId' element={<EditGame />} />
                            </Route>
                            <Route path='/catalog/:gameId' element={<DetailsGame />} />
                        </Routes>
                    </main>
                </GameProvider>

                <Footer />

            </div>
        </AuthProvider>
    );
}

export default App;
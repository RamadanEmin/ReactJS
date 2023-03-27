import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Catalog from './components/Catalog';
import Footer from './components/Footer';

const Register = lazy(() => import('./components/Register'));

function App() {

    return (
            <div id="box">

                <Header />

                    <main id="main-content">
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/login' element={<Login />} />
                            <Route path='/register' element={
                                <Suspense fallback={<span>Loading...</span>}>
                                    <Register />
                                </Suspense>
                            } />
                            <Route path='/catalog' element={<Catalog />} />
                        </Routes>
                    </main>

                <Footer />

            </div>
    );
}

export default App;
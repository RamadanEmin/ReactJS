import { Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Catalog from './components/Catalog';
import Footer from './components/Footer';

function App() {

    return (
            <div id="box">

                <Header />

                    <main id="main-content">
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/login' element={<Login />} />
                            <Route path='/catalog' element={<Catalog />} />
                        </Routes>
                    </main>

                <Footer />

            </div>
    );
}

export default App;
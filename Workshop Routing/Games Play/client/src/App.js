import { useEffect, useState, lazy, Suspense } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import uniqid from 'uniqid';

import * as gameService from './services/gameService';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import CreateGame from './components/CreateGame/CreateGame';
import Catalog from './components/Catalog/Catalog';
import './App.css';

const Register = lazy(() => import('./components/Register/Register'));

function App() {
  const [games, setGames] = useState([]);
  const navigate = useNavigate();

  const addGameHandler = (gameData) => {
    setGames((state) => [
      ...state,
      {
        ...gameData,
        _id: uniqid(),
      }
    ]);

    navigate('/catalog');
  };

  useEffect(() => {
    gameService.getAll().then((result) => {
      console.log(result);
      setGames(result);
    });
  }, []);

  return (
    <div id="box">
      <Header />

      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home games={games} />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/register"
            element={
              <Suspense fallback={<span>Loading....</span>}>
                <Register />
              </Suspense>
            }
          />
          <Route
            path="/create"
            element={<CreateGame addGameHandler={addGameHandler} />}
          />
          <Route path="/catalog" element={<Catalog games={games} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

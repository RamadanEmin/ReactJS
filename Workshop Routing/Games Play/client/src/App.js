import { useEffect, useState} from 'react';
import { Routes, Route } from 'react-router-dom';

import * as gameService from './services/gameService';

import Header from './components/Header/Header';
import Home from './components/Home/Home';

import './App.css';

function App() {
  const [games, setGames] = useState([]);

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
        </Routes>
      </main>
    </div>
  );
}

export default App;

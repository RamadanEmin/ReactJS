import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <header className="App-header">
        <h1>Swapi Routing</h1>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;

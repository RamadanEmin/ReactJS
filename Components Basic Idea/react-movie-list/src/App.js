import './App.css';
import MovieList from './components/MovieList';
import Timer from './components/Timer';

function App() {
  const movie = [
    {
      title: 'Man of Steal',
      year: 2008,
      cast: ['Henry Cavil', 'Russell Crowe'],
    },
    {
      title: 'Harry Potter',
      year: 2008,
      cast: ['Daniel Radclif', 'Emma Watson'],
    },
    {
      title: 'Lord of the Rings',
      year: 2008,
      cast: ['Orlando Bloom', 'Russell Crowe'],
    },
  ];


  return (
    <div className="App">
      <h1>React Demo</h1>

      <Timer start={0} />

      <MovieList movie={movie} />
    </div>
  );
}

export default App;

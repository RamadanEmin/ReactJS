import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Search } from './components/Search';
import { Pagination } from './components/Pagination';

function App() {
  return (
    <div>
      <Header />

      <main className="main">
        <section className="card users-container">
          <Search />

          <Pagination />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;

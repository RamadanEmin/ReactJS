import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <AuthProvider>
          <div id="container">
            <Header />

            <main id="site-content">
              <Routes>
                <Route path="/dashboard/*" element={<Dashboard />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </main>

            <footer id="site-footer">
              <p>@PetMyPet</p>
            </footer>
          </div>
      </AuthProvider>
  );
}

export default App;

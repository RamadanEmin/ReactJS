import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <AuthProvider>
          <div id="container">

            <main id="site-content">
              <Routes>
                <Route path="/dashboard/*" element={<Dashboard />} />
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

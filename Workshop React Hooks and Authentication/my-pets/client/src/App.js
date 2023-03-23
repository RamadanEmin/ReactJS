import { AuthContext } from './contexts/AuthContext';
import useLocalStorage from './hooks/useLocalStorage';

const initialAuthState = {
    _id: '',
    email: '',
    accessToken: ''
};

function App() {
    const [user, setUser] = useLocalStorage('user', initialAuthState);

    return (
        <AuthContext.Provider>
            <div id="container">
                <main id="site-content">
                
                </main>

                <footer id="site-footer">
                    <p>@PetMyPet</p>
                </footer>

            </div>
        </AuthContext.Provider>
    );
}

export default App;

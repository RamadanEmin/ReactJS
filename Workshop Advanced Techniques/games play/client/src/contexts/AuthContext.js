import { createContext, useContext } from 'react';
import { useLocaleStorage } from '../hooks/useLocaleStorage';

export const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {
    const [auth, setAuth] = useLocaleStorage('auth', {});

    const userLogin = (authData) => {
        setAuth(authData);
    };

    const userLogout = () => {
        setAuth({});
    };

    return (
        <AuthContext.Provider value={{
            user: auth,
            userLogin,
            userLogout,
            isAuthenticated: Boolean(auth.accessToken)
        }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => useContext(AuthContext);

export const withAuth = (Component) => {
    const AuthWrapper = (props) => {
        const context = useContext(AuthContext);
        
        return <Component {...props} auth={context}/>;
    };

    return AuthWrapper;
};
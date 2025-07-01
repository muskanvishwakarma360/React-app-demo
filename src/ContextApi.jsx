import React, { createContext, useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);

    const login = (authToken) => setToken(authToken);
    
    const logout = () => {
        setToken(null);
        <Navigate to={'/'} />
    }


    const isAuth = token
    console.log('auth', isAuth)

    return (
        <AuthContext.Provider value={{ isAuth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

import React from 'react'
import { useAuth } from '../ContextApi';
import { Navigate, useNavigate } from 'react-router-dom';


export default function ProtectedRoute({ children }) {
    const { isAuth } = useAuth();

    return isAuth ? children : <Navigate to='/' />
}


import React from 'react';
import Page from './Components1/Page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import LoginForm from './Components1/LoginForm';
import { AuthProvider } from './ContextApi';
import ProtectedRoute from './Components1/ProtectedRoute';


export default function App() {

  return (
    <AuthProvider >
      <BrowserRouter>
        <Routes >
          <Route path='/' element={<LoginForm />} />
          <Route path='/dashboard' element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>} >
            <Route index path='panel' element={<Page />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}



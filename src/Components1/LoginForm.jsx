import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useNavigation } from 'react-router-dom';
import { useAuth } from '../ContextApi';

export default function LoginForm() {

    const navigate = useNavigate();
    const { login } = useAuth();

    const [loginForm, setLoginForm] = useState({
        email: '',
        password: ''
    });

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setLoginForm((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const url = process.env.REACT_APP_API_URL;
            const res = await axios.post(`${url}/api/loginuser`, loginForm);
            console.log(res.data);
            if (res.data.token) {
                localStorage.setItem('token', res.data.token);
                login(res.data.token)
                // alert('success')
                navigate('/dashboard/panel')
            } else {
                console.log('no token receive');
            }
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Login to your account</h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={loginForm.email}
                            onChange={handleChangeInput}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="you@example.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={loginForm.password}
                            onChange={handleChangeInput}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="********"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

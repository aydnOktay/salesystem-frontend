import Home from '@/pages/HomePage';
import Content from '@/pages/ContentPage';

import Login from '@/pages/LoginPage';
import Register from '@/pages/RegisterPage';

import Layout from '@/layouts/index';
import AuthLayout from '@/layouts/AuthLayout';

export const routes = [
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '/', element: <Home/> },
            { path: '/content', element: <Content/> },
        ],
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            { path: 'login', element: <Login/> },
            { path: 'register', element: <Register/> },
        ],
    },
];
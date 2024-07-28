import Home from '@/pages/HomePage';
import Content from '@/pages/ContentPage';
import Tasks from '@/pages/TasksPage';
import Accounts from '@/pages/AccountsPage';
import Insights from '@/pages/InsightsPage';
import Opportunuties from '@/pages/OpportunutiesPage';
import Workflows from '@/pages/WorkflowsPage';
import Login from '@/pages/LoginPage';
import Register from '@/pages/RegisterPage';
import Settings from '@/pages/SettingsPage';
import Configure from '@/pages/ConfigurePage';

import Layout from '@/layouts/index';
import AuthLayout from '@/layouts/AuthLayout';

export const routes = [
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/tasks', element: <Tasks /> },
            { path: '/accounts', element: <Accounts /> },
            { path: '/contacts', element: <Content /> },
            { path: '/opportunuties', element: <Opportunuties /> },
            { path: '/workflows', element: <Workflows /> },
            { path: '/insights', element: <Insights /> },
            { path: '/settings', element: <Settings /> },
            { path: '/configure', element: <Configure /> },
        ],
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            { path: 'login', element: <Login /> },
            { path: 'register', element: <Register /> },
        ],
    },
];
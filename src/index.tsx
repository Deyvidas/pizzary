import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';

import { App } from './App';
import { HomePage, NotFoundPage } from './pages';
import { categoryRoutes } from './routes';

import './styles/index.scss';

const router = createBrowserRouter([
    {
        id: 'rootPath',
        path: '/',
        element: <App />,
        children: [
            {
                id: 'homePage',
                index: true,
                element: <HomePage />,
            },
            categoryRoutes,
        ],
    },
    {
        id: 'notFoundPage',
        path: '*',
        element: <NotFoundPage />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);

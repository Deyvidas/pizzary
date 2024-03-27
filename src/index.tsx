import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';

import { App } from './App';
import { NotFoundPage } from './pages';

import { headerRoutesCategories } from './components';

import './styles/index.scss';

const router = createBrowserRouter([
    { index: true, element: <App /> },
    ...headerRoutesCategories,
    { path: '*', element: <NotFoundPage /> },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);

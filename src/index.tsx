import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';

import { HomePage } from 'pages/common/HomePage';
import { NotFoundPage } from 'pages/common/NotFoundPage';

import { categoryRoutes, infoRoutes } from 'routes';

import { App } from 'components/App';

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
            infoRoutes,
        ],
    },
    {
        id: 'notFoundPage',
        path: '*',
        element: <NotFoundPage />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<RouterProvider router={router} />);

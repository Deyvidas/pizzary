import { RouteObject } from 'react-router-dom';

import { BurgeryPage } from 'src/pages';
import { DesertyPage } from 'src/pages';
import { NapitkiPage } from 'src/pages';
import { OffersPage } from 'src/pages';
import { PizzaPage } from 'src/pages';
import { PizzettaPage } from 'src/pages';
import { ZacuskiPage } from 'src/pages';

const categoryRoutes: RouteObject = {
    id: 'Категории',
    path: 'category',
    children: [
        {
            id: 'Пицца',
            path: 'pizza',
            element: <PizzaPage />,
        },
        {
            id: 'Комбо',
            path: 'offers',
            element: <OffersPage />,
        },
        {
            id: 'Римские пиццы',
            path: 'pizzetta',
            element: <PizzettaPage />,
        },
        {
            id: 'Закуски',
            path: 'zacuski',
            element: <ZacuskiPage />,
        },
        {
            id: 'Бургеры',
            path: 'burgery',
            element: <BurgeryPage />,
        },
        {
            id: 'Напитки',
            path: 'napitki',
            element: <NapitkiPage />,
        },
        {
            id: 'Десерты',
            path: 'deserty',
            element: <DesertyPage />,
        },
    ],
};

export { categoryRoutes };

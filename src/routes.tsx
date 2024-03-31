import { RouteObject } from 'react-router-dom';

import { BurgeryPage } from 'pages/categories/BurgeryPage';
import { DesertyPage } from 'pages/categories/DesertyPage';
import { NapitkiPage } from 'pages/categories/NapitkiPage';
import { OffersPage } from 'pages/categories/OffersPage';
import { PizzaPage } from 'pages/categories/PizzaPage';
import { PizzettaPage } from 'pages/categories/PizzettaPage';
import { SkidkiPage } from 'pages/categories/SkidkiPage';
import { ZacuskiPage } from 'pages/categories/ZacuskiPage';
import { AboutPage } from 'pages/information/AboutPage';
import { DishIngredientsPage } from 'pages/information/DishIngredientsPage';
import { FranchisePage } from 'pages/information/FranchisePage';
import { LoyaltyProgramPage } from 'pages/information/LoyaltyProgramPage';
import { OrderPayPage } from 'pages/information/OrderPayPage';
import { PrivacyPolicyPage } from 'pages/information/PrivacyPolicyPage';

export const informationRoutes: RouteObject = {
    id: 'Информация о компании',
    children: [
        {
            id: 'Заказ и оплата',
            path: 'order-n-payment',
            element: <OrderPayPage />,
        },
        {
            id: 'Программа лояльности',
            path: 'loyalty-program',
            element: <LoyaltyProgramPage />,
        },
        {
            id: 'Условия обслуживания',
            path: 'privacy-policy',
            element: <PrivacyPolicyPage />,
        },
        {
            id: 'Франшиза',
            path: 'franchise',
            element: <FranchisePage />,
        },
        {
            id: 'О компании',
            path: 'about',
            element: <AboutPage />,
        },
        {
            id: 'Состав блюд',
            path: 'dish-ingredients',
            element: <DishIngredientsPage />,
        },
    ],
};

export const categoryRoutes: RouteObject = {
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
        {
            id: 'Скидки',
            path: 'skidki',
            element: <SkidkiPage />,
        },
    ],
};

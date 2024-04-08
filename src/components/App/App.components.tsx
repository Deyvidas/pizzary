import { Outlet } from 'react-router-dom';

import { Addresses } from 'modals/Addresses';
import { CallToOrder } from 'modals/CallToOrder';
import { Cart } from 'modals/Cart';
import { FeedbackNDeleteAccount } from 'modals/FeedbackNDeleteAccount';
import { Location } from 'modals/Location';
import { Login } from 'modals/Login';

import { Footer } from 'components/Footer';
import { Header } from 'components/Header';

import 'styles/index.scss';

export function App() {
    return (
        <>
            <Addresses />
            <CallToOrder />
            <Cart />
            <FeedbackNDeleteAccount />
            <Location />
            <Login />
            <div aria-label='Header-sticky-area'>
                <Header />
                <Outlet />
            </div>
            <Footer />
        </>
    );
}

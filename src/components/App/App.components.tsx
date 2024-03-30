import { Outlet } from 'react-router-dom';

import { Addresses } from 'modals/Addresses';
import { CallToOrder } from 'modals/CallToOrder';
import { Cart } from 'modals/Cart';
import { FeedbackNDeleteAccount } from 'modals/FeedbackNDeleteAccount';
import { Location } from 'modals/Location';
import { Login } from 'modals/Login';
import { ModalContextProvider } from 'modals/Modal';

import { Footer } from 'components/Footer';
import { Header } from 'components/Header';

import 'styles/index.scss';

export function App() {
    return (
        <ModalContextProvider>
            {/* START MODALS */}
            <Addresses />
            <CallToOrder />
            <Cart />
            <FeedbackNDeleteAccount />
            <Location />
            <Login />
            {/* END MODALS */}
            <div aria-label="Header-sticky-area">
                <Header />
                <Outlet />
            </div>
            <Footer />
        </ModalContextProvider>
    );
}

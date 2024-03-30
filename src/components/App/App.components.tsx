import { Outlet } from 'react-router-dom';

import { Footer } from 'components/Footer';
import { Header } from 'components/Header';

import 'styles/index.scss';

function App() {
    return (
        <>
            <div aria-label="Header-sticky-area">
                <Header />
                <Outlet />
            </div>
            <Footer />
        </>
    );
}

export { App };

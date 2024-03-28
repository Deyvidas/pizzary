import { Outlet } from 'react-router-dom';

import { Footer } from './components';
import { Header } from './components';

function App() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export { App };

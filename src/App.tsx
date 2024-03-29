import { Outlet } from 'react-router-dom';

import { Footer } from './components';
import { Header } from './components';

import './styles/index.scss';

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

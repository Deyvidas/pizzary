import { Outlet } from 'react-router-dom';

import { Addresses } from 'modals/Addresses';
import { CallToOrder } from 'modals/CallToOrder';
import { Cart } from 'modals/Cart';
import { FeedbackNDeleteAccount } from 'modals/FeedbackNDeleteAccount';
import { Location } from 'modals/Location';
import { Login } from 'modals/Login';

import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Button } from 'components/ui/Inputs/Button';
import { Stack } from 'components/ui/Layouts/Stack';

import 'styles/index.scss';

export function App() {
    return (
        <>
            <Stack $direction='column'>
                <Stack $justify='space-evenly'>
                    <Button $variant='contained'>contained</Button>
                    <Button $variant='outlined'>outlined</Button>
                    <Button $variant='text'>text</Button>
                </Stack>
                <Stack>
                    <Button $size='l'>text</Button>
                    <Button $size='m'>outlined</Button>
                    <Button $size='s'>contained</Button>
                </Stack>
            </Stack>
            {/* <Addresses />
            <CallToOrder />
            <Cart />
            <FeedbackNDeleteAccount />
            <Location />
            <Login />
            <div aria-label='Header-sticky-area'>
                <Header />
                <Outlet />
            </div>
            <Footer /> */}
        </>
    );
}

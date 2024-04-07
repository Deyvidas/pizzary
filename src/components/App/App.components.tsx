import R from 'react';
import { Outlet } from 'react-router-dom';

import { Addresses } from 'modals/Addresses';
import { CallToOrder } from 'modals/CallToOrder';
import { Cart } from 'modals/Cart';
import { FeedbackNDeleteAccount } from 'modals/FeedbackNDeleteAccount';
import { Location } from 'modals/Location';
import { Login } from 'modals/Login';

import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Typography } from 'components/ui/DataDisplay/Typography';
import { TypographyDemo } from 'components/ui/DataDisplay/Typography/TypographyDemo';
import { ButtonDemo } from 'components/ui/Inputs/Button/ButtonDemo';
import { Stack } from 'components/ui/Layouts/Stack';

import 'styles/index.scss';

export function App() {
    const hrStyle: R.CSSProperties = {
        height: '.4rem',
        width: '100%',
        backgroundColor: 'black',
    };

    return (
        <>
            <Stack $direction='column'>
                <hr style={hrStyle} />
                <Typography $variant='h1' $isCentered style={{ marginBlock: '2rem' }}>
                    Button
                </Typography>
                <hr style={hrStyle} />
                <ButtonDemo />
                <hr style={hrStyle} />
                <Typography $variant='h1' $isCentered style={{ marginBlock: '2rem' }}>
                    Typography
                </Typography>
                <hr style={hrStyle} />
                <TypographyDemo />
            </Stack>

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

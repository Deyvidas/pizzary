import { categoryRoutes, infoRoutes } from 'routes';

import { ToggleModalButton } from 'modals/Modal';

import { Icon } from 'components/ui/DataDisplay/Icon';
import { Stack } from 'components/ui/Layouts/Stack';
import { Link } from 'components/ui/Navigation/Link';

import s from './Header.module.scss';

export function Header() {
    return (
        <>
            <header className={`Container ${s.Container}`}>
                <Stack $direction='column' $spacing={1.2}>
                    <HeaderTop />
                    <HeaderFloor />
                </Stack>
            </header>
        </>
    );
}

function HeaderTop() {
    const loyaltyLink = infoRoutes.children?.find(l => l.path === 'loyalty-program');
    if (!loyaltyLink) throw new Error('Route for loyalty-program missed.');

    return (
        <Stack $justify='space-between'>
            <Stack>
                <Link to='/' $variant='text' $theme='current' $onClickScrollTop>
                    <Icon $iconId='Logo' $height={3.4} />
                </Link>
                <ToggleModalButton
                    id='Location'
                    $size='s'
                    $startIcon={<Icon $iconId='Location' />}
                    $theme='gray'
                    $variant='text'
                >
                    Москва
                </ToggleModalButton>
                <ToggleModalButton
                    id='Addresses'
                    $size='s'
                    $startIcon={<Icon $iconId='Zones' />}
                    $theme='gray'
                    $variant='text'
                >
                    Адреса ресторанов
                </ToggleModalButton>
                <ToggleModalButton
                    id='CallToOrder'
                    $size='s'
                    $startIcon={<Icon $iconId='PhoneOrder' />}
                    $theme='gray'
                    $variant='text'
                >
                    Закажи по телефону
                </ToggleModalButton>
            </Stack>

            <Stack>
                <Link
                    to={`/${loyaltyLink.path}`}
                    $onClickScrollTop
                    $size='s'
                    $startIcon={<Icon $iconId='Points' $theme='green' />}
                    $theme='gray'
                    $variant='text'
                >
                    Баллы
                </Link>
                <ToggleModalButton
                    id='Login'
                    $size='s'
                    $startIcon={<Icon $iconId='Login' $theme='green' />}
                    $theme='gray'
                    $variant='text'
                >
                    Вход
                </ToggleModalButton>
            </Stack>
        </Stack>
    );
}

function HeaderFloor() {
    const { path: categoryRoot, children: categoryLinks } = categoryRoutes;

    return (
        <Stack $justify='space-between'>
            <Stack>
                {categoryLinks?.map(({ id, path }) => {
                    return (
                        <Link
                            key={id}
                            to={`/${categoryRoot}/${path}`}
                            $onClickScrollTop
                            $theme='grayDark'
                            $transform='uppercase'
                            $variant='text'
                        >
                            {id}
                        </Link>
                    );
                })}
            </Stack>
            <Stack>
                <ToggleModalButton
                    id='Cart'
                    $startIcon={<Icon $iconId='Cart' />}
                    $theme='green'
                    $transform='uppercase'
                    $variant='contained'
                >
                    Корзина
                </ToggleModalButton>
            </Stack>
        </Stack>
    );
}

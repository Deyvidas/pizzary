import { categoryRoutes, informationRoutes } from 'routes';

import { ToggleModalButton } from 'modals/Modal';

import { NavLinkCustom } from 'components/NavLinkCustom';
import { Icon } from 'components/ui/DataDisplay/Icon';
import { Stack } from 'components/ui/Layouts/Stack';

import s from './Header.module.scss';

import sprites from '../../media/sprites.svg';

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
    const { children: informationLinks } = informationRoutes;
    const loyaltyLink = informationLinks?.find(l => l.path === 'loyalty-program');

    return (
        <Stack $justify='space-between'>
            <Stack>
                <NavLinkCustom
                    to='/'
                    className={s.Top__Link}
                    classNameActive={s.Top__Link_Active}
                >
                    <Icon $iconId='Logo' $size='normal' />
                </NavLinkCustom>
                <ToggleModalButton
                    id='Location'
                    $startIcon={<Icon $iconId='Location' />}
                    $variant='text'
                    $size='s'
                    $theme='gray'
                >
                    Москва
                </ToggleModalButton>
                <ToggleModalButton
                    id='Addresses'
                    $startIcon={<Icon $iconId='Zones' />}
                    $variant='text'
                    $size='s'
                    $theme='gray'
                >
                    Адреса ресторанов
                </ToggleModalButton>
                <ToggleModalButton
                    id='CallToOrder'
                    $startIcon={<Icon $iconId='PhoneOrder' />}
                    $variant='text'
                    $size='s'
                    $theme='gray'
                >
                    Закажи по телефону
                </ToggleModalButton>
            </Stack>

            <Stack>
                {loyaltyLink && (
                    <NavLinkCustom
                        to={`/${loyaltyLink.path}`}
                        className={s.Top__Link}
                        classNameActive={s.Top__Link_Active}
                    >
                        <TextWithIcon iconId='Points' text='Баллы' />
                    </NavLinkCustom>
                )}
                <ToggleModalButton
                    id='Login'
                    $startIcon={<Icon $iconId='Login' $theme='green' />}
                    $variant='text'
                    $size='s'
                    $theme='gray'
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
                        <NavLinkCustom
                            key={id}
                            to={`/${categoryRoot}/${path}`}
                            className={s.Floor__NavLink}
                            classNameActive={s.Floor__NavLink_Active}
                        >
                            {id}
                        </NavLinkCustom>
                    );
                })}
            </Stack>
            <Stack>
                <ToggleModalButton
                    id='Cart'
                    $startIcon={<Icon $iconId='Cart' />}
                    $variant='contained'
                    $size='normal'
                    $theme='green'
                >
                    Корзина
                </ToggleModalButton>
            </Stack>
        </Stack>
    );
}

type TextWithIconPropsType = {
    iconId: string;
    text: string;
};

function TextWithIcon({ iconId, text }: TextWithIconPropsType) {
    return (
        <>
            <svg className={`${s.Ico} ${s.Ico__HeaderTop}`}>
                <use href={`${sprites}#${iconId}`}></use>
            </svg>
            {text}
        </>
    );
}

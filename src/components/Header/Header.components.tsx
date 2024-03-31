import { categoryRoutes, informationRoutes } from 'routes';

import { ButtonToggleModal, ModalContext } from 'modals/Modal';

import { NavLinkCustom } from 'components/NavLinkCustom';

import s from './Header.module.scss';

import sprites from '../../media/sprites.svg';

export function Header() {
    return (
        <header className={`Container ${s.Container}`}>
            <HeaderTop />
            <HeaderFloor />
        </header>
    );
}

function HeaderTop() {
    const { children: informationLinks } = informationRoutes;
    const loyaltyLink = informationLinks?.find(l => l.path === 'loyalty-program');

    return (
        <div className={s.Top}>
            <div className={s.TopLeft}>
                <NavLinkCustom
                    to='/'
                    className={s.Top__Link}
                    classNameActive={s.Top__Link_Active}
                >
                    <svg className={`${s.Ico} ${s.Ico__Logo}`} aria-label='Go to home'>
                        <use href={`${sprites}#Logo`}></use>
                    </svg>
                </NavLinkCustom>
                <ButtonToggleModal
                    className={s.Top__Button}
                    modalContext={ModalContext}
                    modalId={'Location'}
                >
                    <TextWithIcon iconId='Location' text='Москва' />
                </ButtonToggleModal>
                <ButtonToggleModal
                    className={s.Top__Button}
                    modalContext={ModalContext}
                    modalId={'Addresses'}
                >
                    <TextWithIcon iconId='Zones' text='Адреса ресторанов' />
                </ButtonToggleModal>
                <ButtonToggleModal
                    className={s.Top__Button}
                    modalContext={ModalContext}
                    modalId={'CallToOrder'}
                >
                    <TextWithIcon iconId='PhoneOrder' text='Закажи по телефону' />
                </ButtonToggleModal>
            </div>

            <div className={s.TopRight}>
                {loyaltyLink && (
                    <NavLinkCustom
                        to={`/${loyaltyLink.path}`}
                        className={s.Top__Link}
                        classNameActive={s.Top__Link_Active}
                    >
                        <TextWithIcon iconId='Points' text='Баллы' />
                    </NavLinkCustom>
                )}
                <ButtonToggleModal
                    className={s.Top__Button}
                    modalContext={ModalContext}
                    modalId={'Login'}
                >
                    <TextWithIcon iconId='Login' text='Вход' />
                </ButtonToggleModal>
            </div>
        </div>
    );
}

function HeaderFloor() {
    const { path: categoryRoot, children: categoryLinks } = categoryRoutes;

    return (
        <div className={s.Floor}>
            <nav className={s.Floor__NavLinks}>
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
            </nav>
            <div className={s.Floor__Buttons}>
                <ButtonToggleModal
                    className={s.Floor__Button}
                    modalContext={ModalContext}
                    modalId={'Cart'}
                >
                    <TextWithIcon iconId='Cart' text='Корзина' />
                </ButtonToggleModal>
            </div>
        </div>
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

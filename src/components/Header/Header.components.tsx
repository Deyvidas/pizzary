import { Link } from 'react-router-dom';

import { categoryRoutes, informationRoutes } from 'routes';

import { ButtonToggleModal, ModalContext } from 'modals/Modal';

import { mapLinks, onClickScrollTop } from 'utils';

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
    const loyaltyLink = informationRoutes.children?.find(route => {
        return route.path === 'loyalty-program';
    });

    return (
        <div className={s.Top}>
            <div className={s.TopLeft}>
                <Link className={s.Top__Link} to={'/'} onClick={onClickScrollTop}>
                    <svg className={`${s.Ico} ${s.Ico__Logo}`} aria-label="Go to home">
                        <use href={`${sprites}#Logo`}></use>
                    </svg>
                </Link>
                <ButtonToggleModal
                    className={s.Top__Button}
                    modalContext={ModalContext}
                    modalId={'Location'}
                >
                    <TextWithIcon iconId="Location" text="Москва" />
                </ButtonToggleModal>
                <ButtonToggleModal
                    className={s.Top__Button}
                    modalContext={ModalContext}
                    modalId={'Addresses'}
                >
                    <TextWithIcon iconId="Zones" text="Адреса ресторанов" />
                </ButtonToggleModal>
                <ButtonToggleModal
                    className={s.Top__Button}
                    modalContext={ModalContext}
                    modalId={'CallToOrder'}
                >
                    <TextWithIcon iconId="PhoneOrder" text="Закажи по телефону" />
                </ButtonToggleModal>
            </div>

            <div className={s.TopRight}>
                {!loyaltyLink || (
                    <Link
                        className={s.Top__Link}
                        to={`/${loyaltyLink.path}`}
                        onClick={onClickScrollTop}
                    >
                        <TextWithIcon iconId="Points" text="Баллы" />
                    </Link>
                )}
                <ButtonToggleModal
                    className={s.Top__Button}
                    modalContext={ModalContext}
                    modalId={'Login'}
                >
                    <TextWithIcon iconId="Login" text="Вход" />
                </ButtonToggleModal>
            </div>
        </div>
    );
}

function HeaderFloor() {
    const categoryLinks = categoryRoutes.children || [];

    return (
        <div className={s.Floor}>
            <nav className={s.Floor__NavLinks}>
                {mapLinks(categoryLinks, s.Floor__NavLink, `/${categoryRoutes.path}`)}
            </nav>
            <div className={s.Floor__Buttons}>
                <ButtonToggleModal
                    className={s.Floor__Button}
                    modalContext={ModalContext}
                    modalId={'Cart'}
                >
                    <TextWithIcon iconId="Cart" text="Корзина" />
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

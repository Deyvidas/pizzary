import { Link } from 'react-router-dom';

import { categoryRoutes, informationRoutes } from 'routes';

import { mapLinks, onClickScrollTop } from 'utils';

import s from './Header.module.scss';

import sprites from '../../media/sprites.svg';

function Header() {
    return (
        <header className={`Container ${s.Container}`}>
            <HeaderTop />
            <HeaderFloor />
        </header>
    );
}

export { Header };

function HeaderTop() {
    const loyaltyLink = informationRoutes.children?.find(route => {
        return route.path === 'loyalty-program';
    });

    return (
        <div className={s.Top}>
            <div className={s.TopLeft}>
                <Link className={s.Top__Link} to={'/'}>
                    <svg className={`${s.Ico} ${s.Ico__Logo}`} aria-label="Go to home">
                        <use href={`${sprites}#Logo`}></use>
                    </svg>
                </Link>
                <button className={s.Top__Button}>
                    <TextWithIcon iconId="Location" text="Москва" />
                </button>
                <button className={s.Top__Button}>
                    <TextWithIcon iconId="Zones" text="Адреса ресторанов" />
                </button>
                <button className={s.Top__Button}>
                    <TextWithIcon iconId="PhoneOrder" text="Закажи по телефону" />
                </button>
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
                <button className={s.Top__Button}>
                    <TextWithIcon iconId="Login" text="Вход" />
                </button>
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
                <button className={s.Floor__Button}>
                    <TextWithIcon iconId="Cart" text="Корзина" />
                </button>
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

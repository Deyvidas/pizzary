import { RouteObject } from 'react-router-dom';

import sprites from '../../media/sprites.svg';
import s from './Header.module.scss';

import { OffersPage, PizzettaPage, PizzaPage, ZacuskiPage, BurgeryPage, NapitkiPage, DesertyPage } from 'src/pages';

const categoryRoot = 'category';

const headerRoutesCategories: Array<RouteObject> = [
    {
        id: 'Пицца',
        path: `${categoryRoot}/pizza`,
        element: <PizzaPage />,
    },
    {
        id: 'Комбо',
        path: `${categoryRoot}/offers`,
        element: <OffersPage />,
    },
    {
        id: 'Римские пиццы',
        path: `${categoryRoot}/pizzetta`,
        element: <PizzettaPage />,
    },
    {
        id: 'Закуски',
        path: `${categoryRoot}/zacuski`,
        element: <ZacuskiPage />,
    },
    {
        id: 'Бургеры',
        path: `${categoryRoot}/burgery`,
        element: <BurgeryPage />,
    },
    {
        id: 'Напитки',
        path: `${categoryRoot}/napitki`,
        element: <NapitkiPage />,
    },
    {
        id: 'Десерты',
        path: `${categoryRoot}/deserty`,
        element: <DesertyPage />,
    },
];

function Header() {
    return (
        <div className={s.Container}>
            <HeaderTop />
            <HeaderFloor />
        </div>
    );
}

export { Header, headerRoutesCategories };

function HeaderTop() {
    return (
        <div className={s.Top}>
            <div className={s.TopLeft}>
                <a className={s.Top__Link} href="#!">
                    <svg className={`${s.Ico} ${s.Ico__Logo}`}>
                        <use href={`${sprites}#Logo`}></use>
                    </svg>
                </a>
                <button className={s.Top__Button}>
                    <TextWithSmallIcon iconId={'Location'} text={'Москва'} />
                </button>
                <button className={s.Top__Button}>
                    <TextWithSmallIcon iconId={'Zones'} text={'Зоны доставки'} />
                </button>
                <button className={s.Top__Button}>
                    <TextWithSmallIcon iconId={'PhoneOrder'} text={'Закажи по телефону'} />
                </button>
            </div>

            <div className={s.TopRight}>
                <a className={s.Top__Link} href="#!">
                    <TextWithSmallIcon iconId={'Points'} text={'Баллы'} />
                </a>
                <button className={s.Top__Button}>
                    <TextWithSmallIcon iconId={'Login'} text={'Вход'} />
                </button>
            </div>
        </div>
    );
}

function HeaderFloor() {
    return (
        <div className={s.Floor}>
            <nav className={s.Floor__NavLinks}>
                {headerRoutesCategories.map(route => {
                    return (
                        <a
                            key={route.id}
                            className={s.Floor__NavLink}
                            href={route.path}
                            onClick={e => e.preventDefault()}
                        >
                            {route.id}
                        </a>
                    );
                })}
            </nav>

            <div className={s.Floor__Buttons}>
                <button className={s.Floor__Button}>
                    <TextWithSmallIcon iconId={'Cart'} text={'Корзина'} />
                </button>
            </div>
        </div>
    );
}

type TextWithSmallIconProps = {
    iconId: string;
    text: string;
};

function TextWithSmallIcon({ iconId, text }: TextWithSmallIconProps) {
    return (
        <>
            <svg className={`${s.Ico} ${s.Ico__HeaderTop}`}>
                <use href={`${sprites}#${iconId}`}></use>
            </svg>
            {text}
        </>
    );
}

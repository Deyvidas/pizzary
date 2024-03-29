import { Link } from 'react-router-dom';

import { categoryRoutes } from 'src/routes';

import sprites from '../../media/sprites.svg';
import s from './Header.module.scss';

function Header() {
    return (
        <div className="Container">
            <HeaderTop />
            <HeaderFloor />
        </div>
    );
}

export { Header };

function HeaderTop() {
    return (
        <div className={s.Top}>
            <div className={s.TopLeft}>
                <Link className={s.Top__Link} to={'/'}>
                    <svg className={`${s.Ico} ${s.Ico__Logo}`}>
                        <use href={`${sprites}#Logo`}></use>
                    </svg>
                </Link>
                <button className={s.Top__Button}>
                    <TextWithIcon iconId={'Location'} text={'Москва'} />
                </button>
                <button className={s.Top__Button}>
                    <TextWithIcon iconId={'Zones'} text={'Зоны доставки'} />
                </button>
                <button className={s.Top__Button}>
                    <TextWithIcon iconId={'PhoneOrder'} text={'Закажи по телефону'} />
                </button>
            </div>

            <div className={s.TopRight}>
                <a className={s.Top__Link} href="#!">
                    <TextWithIcon iconId={'Points'} text={'Баллы'} />
                </a>
                <button className={s.Top__Button}>
                    <TextWithIcon iconId={'Login'} text={'Вход'} />
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
                {categoryLinks.map(({ id, path }) => {
                    return (
                        <Link
                            className={s.Floor__NavLink}
                            key={id}
                            to={`/${categoryRoutes.path}/${path}`}
                        >
                            {id}
                        </Link>
                    );
                })}
            </nav>
            <div className={s.Floor__Buttons}>
                <button className={s.Floor__Button}>
                    <TextWithIcon iconId={'Cart'} text={'Корзина'} />
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

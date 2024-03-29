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
    const categoryLinks = categoryRoutes.children || [];

    return (
        <div className={s.Floor}>
            <nav className={s.Floor__NavLinks}>
                {categoryLinks.map(({ id, path }) => {
                    return (
                        <Link className={s.Floor__NavLink} key={id} to={`/${categoryRoutes.path}/${path}`}>
                            {id}
                        </Link>
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

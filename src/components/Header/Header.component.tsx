import { PropsWithChildren } from 'react';

import s from './Header.module.scss';

import logo from '../../media/pizzary-logo.png';
import sprites from '../../media/sprites.svg';

function Header() {
    const AboutProps: AboutPropsType = {
        city: 'Москва',
        deliveryTimeMinutes: 38,
        rating: 4.8,
    };

    const ButtonProps: Array<ButtonPropsType> = [
        { iconId: 'coin', children: 'Pizzary coins' },
        { iconId: 'actions', children: 'Мои акции' },
        { iconId: 'profile', children: 'Кабинет' },
    ];

    return (
        <div className={s.Container}>
            <div className={s.Content}>
                <div className={s.Left}>
                    <Logo />
                    <About {...AboutProps} />
                </div>
                <div className={s.Right}>
                    {ButtonProps.map(props => {
                        return <Button iconId={props.iconId}>{props.children}</Button>;
                    })}
                </div>
            </div>
        </div>
    );
}

export { Header };

type AboutPropsType = {
    city: string;
    deliveryTimeMinutes: number;
    rating: number;
};

type ButtonPropsType = {
    iconId: string;
    children: string;
};

function Logo() {
    return (
        <a className={s.Left__LogoLink} href="#!">
            <img src={logo} alt="Logo" draggable="false" />
        </a>
    );
}

function About({ city, deliveryTimeMinutes, rating }: AboutPropsType) {
    return (
        <div className={s.Left__About}>
            <div className={s.Left__AboutText}>
                Доставка пиццы
                <button className={s.Left__AboutCity}>{city}</button>
            </div>

            <div className={s.Left__AboutInfo}>
                {deliveryTimeMinutes} мин
                <div className={s.Left__AboutRating}>
                    {rating}
                    <svg className={`${s.Ico} ${s.Ico__Star} ${s.Ico__Star_S}`}>
                        <use href={`${sprites}#ratingStar`}></use>
                    </svg>
                </div>
            </div>
        </div>
    );
}

function Button({ iconId, children }: PropsWithChildren<ButtonPropsType>) {
    return (
        <button className={s.Right__Button}>
            <svg className={`${s.Ico} ${s.Ico__HeaderBtnIcon}`}>
                <use href={`${sprites}#${iconId}`}></use>
            </svg>
            {children}
        </button>
    );
}

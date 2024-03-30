import { useEffect, useState } from 'react';

import { categoryRoutes, informationRoutes } from 'routes';

import { ButtonToggleModal, ModalContext } from 'modals/Modal';

import { mapLinks } from 'utils';

import s from './Footer.module.scss';

import AppStoreBlack from '../../media/footer/download/dark/AppStore.png';
import GooglePlayBlack from '../../media/footer/download/dark/GooglePlay.png';
import RuStoreBlack from '../../media/footer/download/dark/RuStore.png';
import MasterCard from '../../media/footer/pay-methods/dark/mastercard.png';
import Mir from '../../media/footer/pay-methods/dark/mir.png';
import Visa from '../../media/footer/pay-methods/dark/visa.png';
import Telegram from '../../media/footer/socials/telegram.png';
import VK from '../../media/footer/socials/vk.png';

export function Footer() {
    return (
        <footer className={`Container ${s.Container}`}>
            <Menu />
            <Info />
            <Payment />
            <Contacts />
            <Download />
            <Copyright email={'care@pizzahut.ru'} />
        </footer>
    );
}

function Menu() {
    const categoryLinks = categoryRoutes.children || [];

    return (
        <div className={s.Section}>
            <h2 className={s.Section__Title}>Меню</h2>
            <nav className={s.Section__Vertical}>
                {mapLinks(categoryLinks, s.Section__Link, `/${categoryRoutes.path}`)}
            </nav>
        </div>
    );
}

function Info() {
    const informationLinks = informationRoutes.children || [];

    return (
        <div className={s.Section}>
            <h2 className={s.Section__Title}>Информация</h2>
            <nav className={s.Section__Vertical}>
                {mapLinks(informationLinks, s.Section__Link)}
            </nav>
        </div>
    );
}

function Payment() {
    return (
        <div className={s.Section}>
            <h2 className={s.Section__Title}>Принимаем к оплате</h2>
            <div className={s.Section__Horizontal}>
                <Image img={Visa} alt="Visa" />
                <Image img={MasterCard} alt="Master Card" />
                <Image img={Mir} alt="Mir" />
            </div>
        </div>
    );
}

function Contacts() {
    return (
        <div className={s.Section}>
            <h2 className={s.Section__Title}>Найдите нас</h2>
            <div className={s.Section__Vertical}>
                <ButtonToggleModal
                    className={s.Section__Button}
                    modalContext={ModalContext}
                    modalId={'Addresses'}
                >
                    Адреса ресторанов
                </ButtonToggleModal>
                <ButtonToggleModal
                    className={s.Section__Button}
                    modalContext={ModalContext}
                    modalId={'FeedbackNDeleteAccount'}
                >
                    Обратная связь и удаление аккаунта
                </ButtonToggleModal>
            </div>
            <div className={s.Section__Horizontal}>
                <LinkedImage
                    href="https://vk.com/pizzahutrussia"
                    ariaLabel="Go to VK"
                    img={VK}
                    alt="VK"
                />
                <LinkedImage
                    href="https://t.me/pizzahut_ru"
                    ariaLabel="Go to Telegram"
                    img={Telegram}
                    alt="Telegram"
                />
            </div>
        </div>
    );
}

function Download() {
    return (
        <div className={`${s.Section} ${s.DownloadSection}`}>
            <h2 className={s.Section__Title}>Установить наше приложение</h2>
            <nav className={s.Section__Horizontal}>
                <LinkedImage
                    href="https://play.google.com/store/apps/details?id=com.yum.android.PizzaN"
                    ariaLabel="Go to GooglePlay"
                    img={GooglePlayBlack}
                    alt="GooglePlay"
                />
                <LinkedImage
                    href="https://apps.apple.com/ru/app/pizzahut-pizzan/id6443643149"
                    ariaLabel="Go to AppStore"
                    img={AppStoreBlack}
                    alt="AppStore"
                />
                <LinkedImage
                    href="https://apps.rustore.ru/app/com.yum.android.PizzaN"
                    ariaLabel="Go to RuStore"
                    img={RuStoreBlack}
                    alt="RuStore"
                />
            </nav>
        </div>
    );
}

type CopyrightPropsType = {
    email: string;
};

function Copyright({ email }: CopyrightPropsType) {
    const day = 1000 * 60 * 60 * 24;
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        const timer = setInterval(() => {
            setYear(new Date().getFullYear());
        }, day);

        return () => {
            clearInterval(timer);
        };
    });

    return (
        <div className={`${s.Section} ${s.CopyrightSection}`}>
            <p>
                {year} © Fenix Mir llc. Email:&nbsp;
                <a className={s.Section__Link} href={`mailto:${email}`}>
                    {email}
                </a>
            </p>
        </div>
    );
}

type ImagePropsType = {
    img: '*.png';
    alt: string;
};

function Image({ img, alt }: ImagePropsType) {
    return <img className={s.Section__LinkImg} src={img} alt={alt} draggable={false} />;
}

type LinkedImagePropsType = ImagePropsType & {
    href: string;
    ariaLabel: string;
};

function LinkedImage(props: LinkedImagePropsType) {
    return (
        <a
            className={s.Section__Link}
            href={props.href}
            aria-label={props.ariaLabel}
            draggable={false}
            target="_blank"
            rel="noreferrer"
        >
            <Image img={props.img} alt={props.alt} />
        </a>
    );
}

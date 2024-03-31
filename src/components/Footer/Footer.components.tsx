import R from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { categoryRoutes, informationRoutes } from 'routes';

import { ButtonToggleModal, ModalContext } from 'modals/Modal';

import { onClickScrollTop } from 'utils';

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
    const { path: categoryRoot, children: categoryLinks } = categoryRoutes;

    return (
        <div className={s.Section}>
            <h2 className={s.Section__Title}>Меню</h2>
            <nav className={s.Section__Vertical}>
                {categoryLinks?.map(({ id, path }) => {
                    return (
                        <Link
                            key={id}
                            to={`/${categoryRoot}/${path}`}
                            className={s.Section__Link}
                            onClick={onClickScrollTop}
                        >
                            {id}
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}

function Info() {
    const { children: informationLinks } = informationRoutes;

    return (
        <div className={s.Section}>
            <h2 className={s.Section__Title}>Информация</h2>
            <nav className={s.Section__Vertical}>
                {informationLinks?.map(({ id, path }) => {
                    return (
                        <Link
                            key={id}
                            to={`/${path}`}
                            className={s.Section__Link}
                            onClick={onClickScrollTop}
                        >
                            {id}
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}

function Payment() {
    return (
        <div className={s.Section}>
            <h2 className={s.Section__Title}>Принимаем к оплате</h2>
            <div className={s.Section__Horizontal}>
                <Image className={s.Section__LinkImg} src={Visa} alt='Visa' />
                <Image className={s.Section__LinkImg} src={MasterCard} alt='MasterCard' />
                <Image className={s.Section__LinkImg} src={Mir} alt='Mir' />
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
                {imageLinks.socials.map(({ id, url, urlLabel, img, imgLabel }) => {
                    return (
                        <ImageLinkWrapper
                            key={id}
                            className={s.Section__Link}
                            href={url}
                            ariaLabel={urlLabel}
                        >
                            <Image
                                className={s.Section__LinkImg}
                                src={img}
                                alt={imgLabel}
                            />
                        </ImageLinkWrapper>
                    );
                })}
            </div>
        </div>
    );
}

function Download() {
    return (
        <div className={`${s.Section} ${s.DownloadSection}`}>
            <h2 className={s.Section__Title}>Установить наше приложение</h2>
            <nav className={s.Section__Horizontal}>
                {imageLinks.download.map(({ id, url, urlLabel, img, imgLabel }) => {
                    return (
                        <ImageLinkWrapper
                            key={id}
                            className={s.Section__Link}
                            href={url}
                            ariaLabel={urlLabel}
                        >
                            <Image
                                className={s.Section__LinkImg}
                                src={img}
                                alt={imgLabel}
                            />
                        </ImageLinkWrapper>
                    );
                })}
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

type TImageLink = {
    id: string;
    url: string;
    urlLabel: string;
    img: string;
    imgLabel: string;
};

type TImageLinks = {
    [key in 'socials' | 'download']: TImageLink[];
};

const imageLinks: TImageLinks = {
    socials: [
        {
            id: 'VK',
            url: 'https://vk.com/pizzahutrussia',
            urlLabel: 'Go to VK',
            img: VK,
            imgLabel: 'VK',
        },
        {
            id: 'Telegram',
            url: 'https://t.me/pizzahut_ru',
            urlLabel: 'Go to Telegram',
            img: Telegram,
            imgLabel: 'Telegram',
        },
    ],
    download: [
        {
            id: 'GooglePlay',
            url: 'https://play.google.com/store/apps/details?id=com.yum.android.PizzaN',
            urlLabel: 'Go to GooglePlay',
            img: GooglePlayBlack,
            imgLabel: 'GooglePlay',
        },
        {
            id: 'AppStore',
            url: 'https://apps.apple.com/ru/app/pizzahut-pizzan/id6443643149',
            urlLabel: 'Go to AppStore',
            img: AppStoreBlack,
            imgLabel: 'AppStore',
        },
        {
            id: 'RuStore',
            url: 'https://apps.rustore.ru/app/com.yum.android.PizzaN',
            urlLabel: 'Go to RuStore',
            img: RuStoreBlack,
            imgLabel: 'RuStore',
        },
    ],
};

type TImageProps = R.ImgHTMLAttributes<HTMLImageElement> & {
    className: string;
    src: string;
    alt: string;
};

function Image({ draggable, ...props }: TImageProps) {
    const { className, src, alt, ..._props } = props;

    return (
        <img className={className} src={src} alt={alt} draggable={false} {..._props} />
    );
}

type TImageLinkWrapperProps = R.AnchorHTMLAttributes<HTMLAnchorElement> & {
    className: string;
    href: string;
    ariaLabel: string;
};

function ImageLinkWrapper({ draggable, target, rel, ...props }: TImageLinkWrapperProps) {
    const { children, className, href, ariaLabel, ..._props } = props;

    return (
        <a
            className={className}
            href={href}
            aria-label={ariaLabel}
            draggable={false}
            target='_blank'
            rel='noreferrer'
            {..._props}
        >
            {children}
        </a>
    );
}

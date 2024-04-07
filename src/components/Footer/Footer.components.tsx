import R from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { categoryRoutes, informationRoutes } from 'routes';

import { ToggleModalButton } from 'modals/Modal';

import { Button } from 'components/ui/Inputs/Button';
import { Stack } from 'components/ui/Layouts/Stack';

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

type TFooterSectionProps = {
    children: R.ReactNode;
    isNav?: boolean;
    linkDirection?: 'row' | 'column';
    title: string;
};

function FooterSection(props: TFooterSectionProps) {
    const { title, children, linkDirection = 'column', isNav } = props;

    return (
        <Stack $direction='column' $spacing={1.6}>
            <h2 className={s.Section__Title}>{title}</h2>
            <Stack $direction={linkDirection} $spacing={0.8} as={!!isNav ? 'nav' : ''}>
                {children}
            </Stack>
        </Stack>
    );
}

export function Footer() {
    return (
        <footer className={`Container ${s.Container}`}>
            <Menu />
            <Info />
            <Contacts email={'care@pizzahut.ru'} />
            <Download />
            <Payment />
            <Copyright />
        </footer>
    );
}

function Menu() {
    const { path: categoryRoot, children: categoryLinks } = categoryRoutes;

    return (
        <FooterSection isNav title='Меню'>
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
        </FooterSection>
    );
}

function Info() {
    const { children: informationLinks } = informationRoutes;

    return (
        <FooterSection isNav title='Информация'>
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
        </FooterSection>
    );
}

type TContactsProps = {
    email: string;
};

function Contacts({ email }: TContactsProps) {
    return (
        <FooterSection title='Найдите нас'>
            <ToggleModalButton id='Addresses' $variant='text' $size='s' $theme='gray'>
                Адреса ресторанов
            </ToggleModalButton>
            <ToggleModalButton
                id='FeedbackNDeleteAccount'
                $variant='text'
                $size='s'
                $theme='gray'
            >
                Обратная связь и удаление аккаунта
            </ToggleModalButton>
            <a href={`mailto:${email}`}>Email:&nbsp;{email}</a>
            <Stack $spacing={0.8}>
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
            </Stack>
        </FooterSection>
    );
}

function Download() {
    return (
        <FooterSection isNav title='Установить наше приложение'>
            {imageLinks.download.map(({ id, url, urlLabel, img, imgLabel }) => {
                return (
                    <ImageLinkWrapper
                        key={id}
                        className={s.Section__Link}
                        href={url}
                        ariaLabel={urlLabel}
                    >
                        <Image className={s.Section__LinkImg} src={img} alt={imgLabel} />
                    </ImageLinkWrapper>
                );
            })}
        </FooterSection>
    );
}

function Payment() {
    return (
        <FooterSection title='Принимаем к оплате' linkDirection='row'>
            <Image className={s.Section__LinkImg} src={Visa} alt='Visa' />
            <Image className={s.Section__LinkImg} src={MasterCard} alt='MasterCard' />
            <Image className={s.Section__LinkImg} src={Mir} alt='Mir' />
        </FooterSection>
    );
}

function Copyright() {
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

    return <div className={`${s.Section}`}>{year} © Fenix Mir llc.</div>;
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

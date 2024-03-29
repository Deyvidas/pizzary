import { useEffect, useState } from 'react';

import s from './Footer.module.scss';

function Footer() {
    return (
        <div className={`Container ${s.Wrapper}`}>
            <Menu />
            <Info />
            <Payment />
            <Contacts />
            <Download />
            <Copyright email={'care@pizzahut.ru'} />
        </div>
    );
}

export { Footer };

function Menu() {
    return (
        <nav className={s.NavLinks}>
            <h2 className={s.SectionHeading}>Меню</h2>
            <a href="#!" className="MenuLink">
                link1
            </a>
            <a href="#!" className="MenuLink">
                link2
            </a>
            <a href="#!" className="MenuLink">
                link3
            </a>
            <a href="#!" className="MenuLink">
                link4
            </a>
            <a href="#!" className="MenuLink">
                link5
            </a>
            <a href="#!" className="MenuLink">
                link6
            </a>
            <a href="#!" className="MenuLink">
                link7
            </a>
            <a href="#!" className="MenuLink">
                link8
            </a>
        </nav>
    );
}

function Info() {
    return (
        <nav className={s.NavLinks}>
            <h2 className={s.SectionHeading}>Информация</h2>
            <a href="#!" className="InfoLink">
                link1
            </a>
            <a href="#!" className="InfoLink">
                link2
            </a>
            <a href="#!" className="InfoLink">
                link3
            </a>
            <a href="#!" className="InfoLink">
                link4
            </a>
            <a href="#!" className="InfoLink">
                link5
            </a>
            <a href="#!" className="InfoLink">
                link6
            </a>
        </nav>
    );
}

function Payment() {
    return (
        <div className={s.HorizontalIcons}>
            <h2 className={s.SectionHeading}>Принимаем к оплате</h2>
            <span>VISA</span>
            <span>MASTER CARD</span>
            <span>MIR</span>
        </div>
    );
}

function Contacts() {
    return (
        <div>
            <h2 className={s.SectionHeading}>Найдите нас</h2>
            <h1>FooterMenuContacts</h1>
        </div>
    );
}

function Download() {
    return (
        <div className={`${s.HorizontalIcons} ${s.DownloadLinks}`}>
            <span>GOOGLE PLAY</span>
            <span>APP STORE</span>
            <span>RU STORE</span>
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
        <span className={s.Copyright}>
            {year} © Fenix Mir llc. Email:&nbsp;
            <a className={s.Copyright__Email} href={`mailto:${email}`}>
                {email}
            </a>
        </span>
    );
}

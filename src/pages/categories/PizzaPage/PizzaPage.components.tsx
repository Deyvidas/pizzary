import R from 'react';

import s from './PizzaPage.module.scss';

import sprites from '../../../media/sprites.svg';

function MenuItemCard() {
    return (
        <article className={s.Item}>
            <img
                className={s.Item__Picture}
                src='https://placehold.jp/500x150.png'
                alt='Pizza 1'
            />
            <div className={s.Item__Content}>
                <div className={s.Item__Info}>
                    <h2 className={s.Item__Title}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis,
                        itaque.
                    </h2>
                    <p className={s.Item__Ingredients}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
                        nobis animi, quia non explicabo perferendis blanditiis, quis eum
                        deleniti consectetur fuga accusantium hic rem corrupti! Magnam
                        quibusdam velit delectus aperiam!
                    </p>
                </div>
                <div className={s.Item__Params}>
                    <div className={s.Item__ParamsCommon}>
                        <ToggleMenu />
                        <ToggleMenu />
                        <ToggleMenu />
                    </div>
                    <button className={s.Item__ParamsOpenBtn}>OPEN PARAMS</button>
                </div>
                <div className={s.Item__Booking}>
                    <h2 className={s.Item__Price}>999 ₽</h2>
                    <button className={s.Item__ToCartBtn}>INTO CART</button>
                </div>
            </div>
        </article>
    );
}

function ToggleMenu() {
    const [param, setParam] = R.useState('param1');
    const [isOpen, setIsOpen] = R.useState(false);

    return (
        <div className={s.Menuu} onClick={() => setIsOpen(!isOpen)}>
            <div className={`${s.Menuu__Select} ${isOpen ? s.Menuu__Select_Active : ''}`}>
                <span>{param}</span>
                <button className={s.Menuu__ExpandBtn}>
                    <svg className={`${s.Ico} ${s.Ico__Expand}`}>
                        <use href={`${sprites}#Expand`}></use>
                    </svg>
                </button>
            </div>
            {isOpen && (
                <ul className={s.Menuu__Parameters}>
                    <li className={s.Menuu__Parameter}>param1</li>
                    <li className={s.Menuu__Parameter}>param2</li>
                    <li className={s.Menuu__Parameter}>param3</li>
                    <li className={s.Menuu__Parameter}>param4</li>
                    <li className={s.Menuu__Parameter}>param5</li>
                    <li className={s.Menuu__Parameter}>param6</li>
                </ul>
            )}
        </div>
    );
}

export function PizzaPage() {
    return (
        <div className='Container Container__GoUp Container__GraniteLight'>
            <section className={s.Menu}>
                <h2 className={s.Menu__Title}>Пицца</h2>
                <main className={s.Menu__Items}>
                    <MenuItemCard />
                    <MenuItemCard />
                    <MenuItemCard />
                    <MenuItemCard />
                    <MenuItemCard />
                    <MenuItemCard />
                    <MenuItemCard />
                    <MenuItemCard />
                    <MenuItemCard />
                    <MenuItemCard />
                    <MenuItemCard />
                    <MenuItemCard />
                    <MenuItemCard />
                    <MenuItemCard />
                    <MenuItemCard />
                </main>
            </section>
        </div>
    );
}

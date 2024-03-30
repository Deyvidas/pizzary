import { Dispatch, MutableRefObject, PropsWithChildren, SetStateAction } from 'react';

import s from './Modal.module.scss';

import sprites from '../../media/sprites.svg';

type onClickToggleParamsType = {
    isOpenRef: MutableRefObject<boolean>;
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
};

function onClickToggle({ isOpenRef, isOpen, setIsOpen }: onClickToggleParamsType) {
    setIsOpen(!isOpen);
    isOpenRef.current = !isOpenRef.current;

    const bodyClasses = document.body.classList;
    // bodyClasses.toggle('NoScroll') [ this variant is not predictable ]
    isOpenRef.current ? bodyClasses.add('NoScroll') : bodyClasses.remove('NoScroll');
}

type ModalPropsType = onClickToggleParamsType & {};

function Modal({
    isOpenRef,
    isOpen,
    setIsOpen,
    children,
}: PropsWithChildren<ModalPropsType>) {
    if (!isOpen) return null;
    const onClick = () => onClickToggle({ isOpenRef, isOpen, setIsOpen });

    return (
        <div className={`Container ${s.Container}`} onClick={onClick}>
            <div className={s.Container__Content} onClick={e => e.stopPropagation()}>
                <button className={s.Container__CloseButton} onClick={onClick}>
                    <svg className={`${s.Ico} ${s.Ico__Close}`}>
                        <use href={`${sprites}#Close`}></use>
                    </svg>
                </button>
                {children}
            </div>
        </div>
    );
}

export { Modal, onClickToggle };

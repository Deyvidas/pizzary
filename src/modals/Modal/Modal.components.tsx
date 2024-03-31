import R from 'react';

import 'styles/index.scss';

import s from './Modal.module.scss';

import sprites from '../../media/sprites.svg';

import { ButtonToggleModal, onClickToggle } from './ButtonModalToggle.components';
import { ModalContext, useGetModalStatus } from './ModalContextProvider.components';
import { TAvailableModalId } from './types';

export type TModalProps = {
    modalId: TAvailableModalId;
};

export function Modal(props: R.PropsWithChildren<TModalProps>) {
    const { modalId, children } = props;
    const { isOpenRef, isOpen, setIsOpen } = useGetModalStatus(ModalContext, modalId);
    const onClick = () => onClickToggle({ isOpenRef, isOpen, setIsOpen });

    return (
        <div className={`Container ${s.Container}`} onClick={onClick}>
            <div className={s.Container__Content} onClick={e => e.stopPropagation()}>
                <ButtonToggleModal
                    className={s.Container__CloseButton}
                    modalContext={ModalContext}
                    modalId={modalId}
                >
                    <svg className={`${s.Ico} ${s.Ico__Close}`}>
                        <use href={`${sprites}#Close`}></use>
                    </svg>
                </ButtonToggleModal>
                {children}
            </div>
        </div>
    );
}

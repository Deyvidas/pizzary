import R from 'react';

import { useGetModalStatus } from './ModalContextProvider.components';
import { TAvailableModalId, TModalContext, TModalStatus } from './types';

type TButtonToggleModalProps = R.ButtonHTMLAttributes<HTMLButtonElement> & {
    className: string;
    modalContext: R.Context<TModalContext | null>;
    modalId: TAvailableModalId;
};

/**
 * A button that allows for the toggle of modal window statuses within the context.
 */
export function ButtonToggleModal(props: R.PropsWithChildren<TButtonToggleModalProps>) {
    const { modalContext, modalId, children, className } = props;
    const { isOpenRef, isOpen, setIsOpen } = useGetModalStatus(modalContext, modalId);
    const onClick = () => onClickToggle({ isOpenRef, isOpen, setIsOpen });

    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    );
}

export function onClickToggle({ isOpenRef, isOpen, setIsOpen }: TModalStatus) {
    setIsOpen(!isOpen);
    isOpenRef.current = !isOpenRef.current;

    const bodyClasses = document.body.classList;
    // bodyClasses.toggle('NoScroll') [ this variant is not predictable ]
    isOpenRef.current ? bodyClasses.add('NoScroll') : bodyClasses.remove('NoScroll');
}

import R from 'react';

import 'styles/index.scss';

import s from './Modal.module.scss';

import sprites from '../../media/sprites.svg';

export type TModalProps = {
    modalId: TAvailableModalId;
};

export function Modal(props: R.PropsWithChildren<TModalProps>) {
    const { modalId, children } = props;
    const { isOpenRef, isOpen, setIsOpen } = useGetStatusOfModalWithId(
        ModalContext,
        modalId,
    );
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

type TToggleModalBtnProps = R.ButtonHTMLAttributes<HTMLButtonElement> & {
    modalContext: R.Context<TModalContext | null>;
    modalId: TAvailableModalId;
};

export function onClickToggle({ isOpenRef, isOpen, setIsOpen }: TModalContextObj) {
    setIsOpen(!isOpen);
    isOpenRef.current = !isOpenRef.current;

    const bodyClasses = document.body.classList;
    // bodyClasses.toggle('NoScroll') [ this variant is not predictable ]
    isOpenRef.current ? bodyClasses.add('NoScroll') : bodyClasses.remove('NoScroll');
}

/**
 * A button that allows for the toggle of modal window statuses within the context.
 */
export function ButtonToggleModal(props: R.PropsWithChildren<TToggleModalBtnProps>) {
    const { modalContext, modalId, children, className } = props;
    const { isOpenRef, isOpen, setIsOpen } = useGetStatusOfModalWithId(
        modalContext,
        modalId,
    );
    const onClick = () => onClickToggle({ isOpenRef, isOpen, setIsOpen });

    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    );
}

/**
 * The list of IDs that are accessible for modal windows.
 */
type TAvailableModalId =
    | 'Addresses'
    | 'CallToOrder'
    | 'Cart'
    | 'FeedbackNDeleteAccount'
    | 'Location'
    | 'Login';

/**
 * The object representing a single context object that contains the state of a single
 * modal window.
 */
type TModalContextObj = {
    isOpenRef: R.MutableRefObject<boolean>;
    isOpen: boolean;
    setIsOpen: R.Dispatch<R.SetStateAction<boolean>>;
};

/**
 * The full definition of a modal window context type.
 */
type TModalContext = {
    [key in TAvailableModalId]: TModalContextObj;
};

export const ModalContext = R.createContext<TModalContext | null>(null);

/**
 * Returns the state of a single modal window from the context, with the passed id.
 */
export function useGetStatusOfModalWithId(
    context: R.Context<TModalContext | null>,
    id: TAvailableModalId,
): TModalContextObj {
    const modalContext = R.useContext(context);
    if (!modalContext) throw new Error('Context is null.');

    const modalStatus = modalContext[id];
    if (!modalStatus) throw new Error(`Context with id=${id} not found.`);

    return modalStatus;
}

/**
 * Provides a context that contains all the statuses of all registered modal windows.
 */
export function ModalContextProvider({ children }: R.PropsWithChildren) {
    const addressesIsOpenRef = R.useRef(false);
    const [addressesIsOpen, setAddressesIsOpen] = R.useState(addressesIsOpenRef.current);

    const callToOrderIsOpenRef = R.useRef(false);
    const [callToOrderIsOpen, setCallToOrderIsOpen] = R.useState(
        callToOrderIsOpenRef.current,
    );

    const cartIsOpenRef = R.useRef(false);
    const [cartIsOpen, setCartIsOpen] = R.useState(cartIsOpenRef.current);

    const feedbackNDeleteAccountIsOpenRef = R.useRef(false);
    const [feedbackNDeleteAccountIsOpen, setFeedbackNDeleteAccountIsOpen] = R.useState(
        feedbackNDeleteAccountIsOpenRef.current,
    );

    const locationIsOpenRef = R.useRef(false);
    const [locationIsOpen, setLocationIsOpen] = R.useState(locationIsOpenRef.current);

    const loginIsOpenRef = R.useRef(false);
    const [loginIsOpen, setLoginIsOpen] = R.useState(loginIsOpenRef.current);

    const ContextValue: TModalContext = {
        Addresses: {
            isOpenRef: addressesIsOpenRef,
            isOpen: addressesIsOpen,
            setIsOpen: setAddressesIsOpen,
        },
        CallToOrder: {
            isOpenRef: callToOrderIsOpenRef,
            isOpen: callToOrderIsOpen,
            setIsOpen: setCallToOrderIsOpen,
        },
        Cart: {
            isOpenRef: cartIsOpenRef,
            isOpen: cartIsOpen,
            setIsOpen: setCartIsOpen,
        },
        FeedbackNDeleteAccount: {
            isOpenRef: feedbackNDeleteAccountIsOpenRef,
            isOpen: feedbackNDeleteAccountIsOpen,
            setIsOpen: setFeedbackNDeleteAccountIsOpen,
        },
        Login: {
            isOpenRef: loginIsOpenRef,
            isOpen: loginIsOpen,
            setIsOpen: setLoginIsOpen,
        },
        Location: {
            isOpenRef: locationIsOpenRef,
            isOpen: locationIsOpen,
            setIsOpen: setLocationIsOpen,
        },
    };

    return <ModalContext.Provider value={ContextValue}>{children}</ModalContext.Provider>;
}

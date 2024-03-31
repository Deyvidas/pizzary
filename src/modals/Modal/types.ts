import R from 'react';

/**
 * The list of IDs that are accessible for modal windows.
 */
export type TAvailableModalId =
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
export type TModalStatus = {
    isOpenRef: R.MutableRefObject<boolean>;
    isOpen: boolean;
    setIsOpen: R.Dispatch<R.SetStateAction<boolean>>;
};

/**
 * The full definition of a modal window context type.
 */
export type TModalContext = {
    [key in TAvailableModalId]: TModalStatus;
};

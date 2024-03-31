import R from 'react';

import { TAvailableModalId, TModalContext, TModalStatus } from './types';

export const ModalContext = R.createContext<TModalContext | null>(null);

/**
 * Provides a context that contains all the statuses of all registered modal windows.
 */
export function ModalContextProvider({ children }: R.PropsWithChildren) {
    const ContextValue: TModalContext = {
        Addresses: useGetDefaultStatus(),
        CallToOrder: useGetDefaultStatus(),
        Cart: useGetDefaultStatus(),
        FeedbackNDeleteAccount: useGetDefaultStatus(),
        Login: useGetDefaultStatus(),
        Location: useGetDefaultStatus(),
    };

    return <ModalContext.Provider value={ContextValue}>{children}</ModalContext.Provider>;
}

/**
 * Return the default status of the modal window.
 */
function useGetDefaultStatus(): TModalStatus {
    const isOpenRef = R.useRef(false);
    const [isOpen, setIsOpen] = R.useState(isOpenRef.current);

    return { isOpenRef, isOpen, setIsOpen };
}

/**
 * Returns the state of a single modal window from the context, with the passed id.
 */
export function useGetModalStatus(
    context: R.Context<TModalContext | null>,
    id: TAvailableModalId,
): TModalStatus {
    const modalContext = R.useContext(context);
    if (!modalContext) throw new Error('Context is null.');

    const modalStatus = modalContext[id];
    if (!modalStatus) throw new Error(`Context with id=${id} not found.`);

    return modalStatus;
}

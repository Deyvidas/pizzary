import R from 'react';

import { Button, TButtonProps } from 'components/ui/Inputs/Button';

import s from './Modal.module.scss';

import sprites from '../../media/sprites.svg';

type TAvailableModalId =
    | 'Addresses'
    | 'CallToOrder'
    | 'Cart'
    | 'FeedbackNDeleteAccount'
    | 'Location'
    | 'Login';

type TToggleModalButtonProps = TButtonProps & {
    id: TAvailableModalId;
};

export function ToggleModalButton(props: TToggleModalButtonProps) {
    return <Button {...props} />;
}

type TModalProps = R.PropsWithChildren & {
    togglerId: TAvailableModalId;
};

export function Modal({ togglerId, children }: TModalProps) {
    const [isOpen, setIsOpen] = R.useState(false);

    function openModal() {
        setIsOpen(true);
        document.body.classList.add('NoScroll');
    }

    function closeModal() {
        setIsOpen(false);
        document.body.classList.remove('NoScroll');
    }

    function onClick(event: MouseEvent) {
        const target = event.target as HTMLElement;
        target.id === togglerId ? openModal() : closeModal();
    }

    function onKeyDown(event: KeyboardEvent) {
        event.key === 'Escape' && closeModal();
    }

    R.useEffect(() => {
        document.addEventListener('click', onClick);
        document.addEventListener('keydown', onKeyDown);
        return () => {
            document.removeEventListener('click', onClick);
            document.removeEventListener('keydown', onKeyDown);
        };
    });

    return isOpen ? (
        <div className={`Container Container__Appear ${s.Container}`}>
            <div className={s.Container__Content}>
                <button
                    className={s.Container__CloseButton}
                    onClick={() => setIsOpen(false)}
                >
                    <svg className={`${s.Ico} ${s.Ico__Close}`}>
                        <use href={`${sprites}#Close`}></use>
                    </svg>
                </button>
                {children}
            </div>
        </div>
    ) : (
        <></>
    );
}

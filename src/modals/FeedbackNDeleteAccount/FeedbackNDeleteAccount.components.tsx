import { PropsWithChildren, useRef, useState } from 'react';

import { Modal, onClickToggle } from 'modals/Modal';

import s from './FeedbackNDeleteAccount.module.scss';

type FeedbackNDeleteAccountPropsType = {
    btnClassName: string;
};

function FeedbackNDeleteAccount({ btnClassName, children }: PropsWithChildren<FeedbackNDeleteAccountPropsType>) {
    const isOpenRef = useRef(false);
    const [isOpen, setIsOpen] = useState(isOpenRef.current);
    const params = { isOpenRef, isOpen, setIsOpen };

    return (
        <>
            <button className={btnClassName} onClick={() => onClickToggle(params)}>
                {children}
            </button>
            <Modal {...params}>
                <h2>Feedback n delete account</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
                    similique blanditiis quasi atque repellendus, sequi ducimus facilis
                    tempora nihil consequatur odit dolor enim non temporibus, ipsam
                    exercitationem eveniet. Quod, aliquam.
                </p>
            </Modal>
        </>
    );
}

export { FeedbackNDeleteAccount }
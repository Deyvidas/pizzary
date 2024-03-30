import {
    Modal,
    ModalContext,
    TModalProps,
    useGetStatusOfModalWithId,
} from 'modals/Modal';

import s from './FeedbackNDeleteAccount.module.scss';

export function FeedbackNDeleteAccount() {
    const { isOpen } = useGetStatusOfModalWithId(ModalContext, 'FeedbackNDeleteAccount');
    if (!isOpen) return null;

    const params: TModalProps = { modalId: 'FeedbackNDeleteAccount' };
    return (
        <Modal {...params}>
            <h2>Feedback and delete account</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
                similique blanditiis quasi atque repellendus, sequi ducimus facilis
                tempora nihil consequatur odit dolor enim non temporibus, ipsam
                exercitationem eveniet. Quod, aliquam.
            </p>
        </Modal>
    );
}

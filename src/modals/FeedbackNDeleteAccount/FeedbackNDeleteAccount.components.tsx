import { Modal, ModalContext, TModalProps, useGetModalStatus } from 'modals/Modal';

export function FeedbackNDeleteAccount() {
    const { isOpen } = useGetModalStatus(ModalContext, 'FeedbackNDeleteAccount');
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

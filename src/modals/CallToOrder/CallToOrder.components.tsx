import { Modal, ModalContext, TModalProps, useGetModalStatus } from 'modals/Modal';

export function CallToOrder() {
    const { isOpen } = useGetModalStatus(ModalContext, 'CallToOrder');
    if (!isOpen) return null;

    const params: TModalProps = { modalId: 'CallToOrder' };
    return (
        <Modal {...params}>
            <h2>Call to order</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
                similique blanditiis quasi atque repellendus, sequi ducimus facilis
                tempora nihil consequatur odit dolor enim non temporibus, ipsam
                exercitationem eveniet. Quod, aliquam.
            </p>
        </Modal>
    );
}

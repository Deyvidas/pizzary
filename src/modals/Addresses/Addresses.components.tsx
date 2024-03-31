import { Modal, ModalContext, TModalProps, useGetModalStatus } from 'modals/Modal';

export function Addresses() {
    const { isOpen } = useGetModalStatus(ModalContext, 'Addresses');
    if (!isOpen) return null;

    const params: TModalProps = { modalId: 'Addresses' };
    return (
        <Modal {...params}>
            <h2>Addresses</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
                similique blanditiis quasi atque repellendus, sequi ducimus facilis
                tempora nihil consequatur odit dolor enim non temporibus, ipsam
                exercitationem eveniet. Quod, aliquam.
            </p>
        </Modal>
    );
}

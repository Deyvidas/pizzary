import {
    Modal,
    ModalContext,
    TModalProps,
    useGetStatusOfModalWithId,
} from 'modals/Modal';

import s from './Cart.module.scss';

export function Cart() {
    const { isOpen } = useGetStatusOfModalWithId(ModalContext, 'Cart');
    if (!isOpen) return null;

    const params: TModalProps = { modalId: 'Cart' };
    return (
        <Modal {...params}>
            <h2>Cart</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
                similique blanditiis quasi atque repellendus, sequi ducimus facilis
                tempora nihil consequatur odit dolor enim non temporibus, ipsam
                exercitationem eveniet. Quod, aliquam.
            </p>
        </Modal>
    );
}

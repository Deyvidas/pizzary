import {
    Modal,
    ModalContext,
    TModalProps,
    useGetStatusOfModalWithId,
} from 'modals/Modal';

import s from './Addresses.module.scss';

export function Addresses() {
    const { isOpen } = useGetStatusOfModalWithId(ModalContext, 'Addresses');
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

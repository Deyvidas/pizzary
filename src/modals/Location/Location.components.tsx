import {
    Modal,
    ModalContext,
    TModalProps,
    useGetStatusOfModalWithId,
} from 'modals/Modal';

import s from './Location.module.scss';

export function Location() {
    const { isOpen } = useGetStatusOfModalWithId(ModalContext, 'Location');
    if (!isOpen) return null;

    const params: TModalProps = { modalId: 'Location' };
    return (
        <Modal {...params}>
            <h2>Location</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
                similique blanditiis quasi atque repellendus, sequi ducimus facilis
                tempora nihil consequatur odit dolor enim non temporibus, ipsam
                exercitationem eveniet. Quod, aliquam.
            </p>
        </Modal>
    );
}

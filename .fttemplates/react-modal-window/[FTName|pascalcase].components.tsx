import { Modal, ModalContext, TModalProps, useGetModalStatus } from 'modals/Modal';

import s from './[FTName|pascalcase].module.scss';

export function [FTName|pascalcase]() {
    const { isOpen } = useGetStatusOfModalWithId(ModalContext, '[FTName|pascalcase]');
    if (!isOpen) return null;

    const params: TModalProps = { modalId: '[FTName|pascalcase]' };
    return (
        <Modal {...params}>
            <h2>[FTName|sentencecase]</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
                similique blanditiis quasi atque repellendus, sequi ducimus facilis
                tempora nihil consequatur odit dolor enim non temporibus, ipsam
                exercitationem eveniet. Quod, aliquam.
            </p>
        </Modal>
    );
}
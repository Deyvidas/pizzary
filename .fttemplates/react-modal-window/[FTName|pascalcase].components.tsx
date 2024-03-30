import { PropsWithChildren, useRef, useState } from 'react';

import { Modal, onClickToggle } from 'modals/Modal';

import s from './[FTName|pascalcase].module.scss';

type [FTName|pascalcase]PropsType = {
    btnClassName: string;
};

function [FTName|pascalcase]({ btnClassName, children }: PropsWithChildren<[FTName|pascalcase]PropsType>) {
    const isOpenRef = useRef(false);
    const [isOpen, setIsOpen] = useState(isOpenRef.current);
    const params = { isOpenRef, isOpen, setIsOpen };

    return (
        <>
            <button className={btnClassName} onClick={() => onClickToggle(params)}>
                {children}
            </button>
            <Modal {...params}>
                <h2>[FTName|sentencecase]</h2>
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

export { [FTName|pascalcase] }
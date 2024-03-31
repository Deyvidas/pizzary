import { Modal, ModalContext, TModalProps, useGetModalStatus } from 'modals/Modal';

export function Login() {
    const { isOpen } = useGetModalStatus(ModalContext, 'Login');
    if (!isOpen) return null;

    const params: TModalProps = { modalId: 'Login' };
    return (
        <Modal {...params}>
            <h2>Login</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
                similique blanditiis quasi atque repellendus, sequi ducimus facilis
                tempora nihil consequatur odit dolor enim non temporibus, ipsam
                exercitationem eveniet. Quod, aliquam.
            </p>
        </Modal>
    );
}

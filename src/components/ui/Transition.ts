import { CSSProperties } from 'styled-components';

type AvailableTransition = 'normal';

export const Transition: TTransition = {
    normal: {
        transitionDuration: '0.2s',
        transitionTimingFunction: 'ease-in',
    },
};

export type TTransition = {
    [key in AvailableTransition]: TTransitionParams;
};

type TTransitionParams = {
    transitionDuration: CSSProperties['transitionDuration'];
    transitionTimingFunction: CSSProperties['transitionTimingFunction'];
};

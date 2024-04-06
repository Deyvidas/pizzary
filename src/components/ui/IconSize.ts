import { CSSProperties } from 'styled-components';

import { AvailableSize } from './Config';

export type AvailableIcon =
    | 'Logo'
    | 'Location'
    | 'Zones'
    | 'PhoneOrder'
    | 'Points'
    | 'Login'
    | 'Cart'
    | 'Close'
    | 'Expand';

const SquareIcon: TIconSizeParams = {
    l: { aspectRatio: 1, scaleCoefficient: 4 },
    m: { aspectRatio: 1, scaleCoefficient: 3 },
    s: { aspectRatio: 1, scaleCoefficient: 2 },
};

export const IconSize: TIconSize = {
    Cart: SquareIcon,
    Close: SquareIcon,
    Expand: SquareIcon,
    Location: SquareIcon,
    Login: SquareIcon,
    PhoneOrder: SquareIcon,
    Points: SquareIcon,
    Zones: SquareIcon,

    Logo: {
        l: { ...SquareIcon.l, aspectRatio: 7.3 },
        m: { ...SquareIcon.m, aspectRatio: 7.3 },
        s: { ...SquareIcon.s, aspectRatio: 7.3 },
    },
};

export type TIconSize = {
    [key in AvailableIcon]: TIconSizeParams;
};

type TIconSizeParams = {
    [key in AvailableSize]: {
        aspectRatio: CSSProperties['aspectRatio'];
        scaleCoefficient: number;
    };
};

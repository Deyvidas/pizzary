import { CSSProperties } from 'styled-components';

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

export const IconSize: TIconSize = {
    Cart: { aspectRatio: 1 },
    Close: { aspectRatio: 1 },
    Expand: { aspectRatio: 1 },
    Location: { aspectRatio: 1 },
    Login: { aspectRatio: 1 },
    Logo: { aspectRatio: 7.3 },
    PhoneOrder: { aspectRatio: 1 },
    Points: { aspectRatio: 1 },
    Zones: { aspectRatio: 1 },
};

export type TIconSize = {
    [key in AvailableIcon]: {
        aspectRatio: CSSProperties['aspectRatio'];
    };
};

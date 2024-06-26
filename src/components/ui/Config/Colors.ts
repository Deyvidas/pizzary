import { CSSProperties } from 'styled-components';

type AvailableColor = 'current' | 'gray' | 'grayDark' | 'green' | 'greenLight' | 'white';

export const Color: TColor = {
    current: { hover: 'currentColor', normal: 'currentColor' },
    gray: { hover: '#70a401', normal: '#78838c' },
    grayDark: { hover: '#c8102e', normal: '#313131' },
    green: { hover: '#4c6f01', normal: '#70a401' },
    greenLight: { hover: '#70a401', normal: '#4c6f01' },
    white: { hover: '#ffffff', normal: '#ffffff' },
};

export type TColor = {
    [key in AvailableColor]: TColorTone;
};

export type TColorTone = {
    hover: CSSProperties['color'];
    normal: CSSProperties['color'];
};

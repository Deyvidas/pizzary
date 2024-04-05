import { CSSProperties } from 'styled-components';

export type AvailableButtonThemes = 'green' | 'gray';

export const ButtonTheme: TButtonTheme = {
    green: {
        borderColor: { hover: '#4c6f01', normal: '#70a401' },
        mainColor: { hover: '#4c6f01', normal: '#70a401' },
        secondaryColor: { hover: '#ffffff', normal: '#ffffff' },
    },
    gray: {
        borderColor: { hover: '#70a401', normal: '#78838c' },
        mainColor: { hover: '#70a401', normal: '#78838c' },
        secondaryColor: { hover: '#ffffff', normal: '#ffffff' },
    },
};

type TColor = {
    hover: CSSProperties['color'];
    normal: CSSProperties['color'];
};

type TButtonTheme = {
    [key in AvailableButtonThemes]: {
        mainColor: TColor;
        secondaryColor: TColor;
        borderColor: TColor;
    };
};

import { Color, TColorTone } from './Colors';

export type AvailableTheme = 'green' | 'gray' | 'grayDark' | 'current';

export const Theme: TTheme = {
    current: {
        borderColor: Color.current,
        mainColor: Color.current,
        minorColor: Color.current,
    },
    gray: {
        borderColor: Color.gray,
        mainColor: Color.gray,
        minorColor: Color.white,
    },
    grayDark: {
        borderColor: Color.grayDark,
        mainColor: Color.grayDark,
        minorColor: Color.white,
    },
    green: {
        borderColor: Color.green,
        mainColor: Color.green,
        minorColor: Color.white,
    },
};

export type TTheme = {
    [key in AvailableTheme]: {
        mainColor: TColorTone;
        minorColor: TColorTone;
        borderColor: TColorTone;
    };
};

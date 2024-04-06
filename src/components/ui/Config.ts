import { Border, TBorder } from './Border';
import { Color, TColor } from './Colors';
import { Font, TFont } from './Font';
import { Padding, TPadding } from './Padding';
import { Theme, TTheme } from './Themes';
import { Transition, TTransition } from './Transition';

export type AvailableTheme = 'green' | 'gray' | 'current';
export type AvailableSize = 'l' | 'm' | 's';

export const Config: TConfig = {
    border: Border,
    color: Color,
    font: Font,
    padding: Padding,
    theme: Theme,
    transition: Transition,
};

type TConfig = {
    border: TBorder;
    color: TColor;
    font: TFont;
    padding: TPadding;
    theme: TTheme;
    transition: TTransition;
};

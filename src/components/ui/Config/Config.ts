import { Border, TBorder } from './Border';
import { Color, TColor } from './Colors';
import { IconSize, TIconSize } from './IconSize';
import { Padding, TPadding } from './Padding';
import { Size, TSize } from './Size';
import { TText, Text } from './Text';
import { Theme, TTheme } from './Themes';
import { Transition, TTransition } from './Transition';

export const Config: TConfig = {
    border: Border,
    color: Color,
    iconSize: IconSize,
    padding: Padding,
    size: Size,
    theme: Theme,
    transition: Transition,
    text: Text,
};

type TConfig = {
    border: TBorder;
    color: TColor;
    iconSize: TIconSize;
    padding: TPadding;
    size: TSize;
    text: TText;
    theme: TTheme;
    transition: TTransition;
};

export function calc(value: any, coefficient: number): string {
    if (!(typeof value === 'string'))
        throw new Error('The argument `string` cannot be undefined.');

    const errorMsg = `Passed string='${value}' is not a valid measurement value.`;
    const number = value.match('^[\\d]*[.]?[\\d]+');
    const unit = value.match('[a-z%]*$');

    if (!number || unit === null) throw new Error(errorMsg);
    else if (`${number[0]}${unit[0]}`.length !== value.length) throw new Error(errorMsg);

    const result = Number((Number(number) * coefficient).toFixed(6));
    return `${result}${unit}`;
}

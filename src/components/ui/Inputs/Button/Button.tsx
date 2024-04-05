import styled, { css, RuleSet } from 'styled-components';

import { AvailableButtonSizes, ButtonSizes } from './ButtonSizes';
import { ButtonTheme, AvailableButtonThemes } from './ButtonThemes';

export const Button = styled('button')<TButtonProps>`
    display: flex;
    align-items: center;
    ${p => getTransitionProperty(p)}
    transition-timing-function: ease-in;
    transition-duration: 0.2s;
    ${p => getFontSize(p)};
    ${p => getTextTransform(p)};
    ${p => getColor(p)};
    ${p => getBackgroundColor(p)};
    ${p => getBorder(p)};
    ${p => getPadding(p)};
`;

type TButtonProps = {
    $size?: AvailableButtonSizes;
    $theme?: AvailableButtonThemes;
    $variant?: 'contained' | 'outlined' | 'text';
};

const defaultButtonProps: Required<TButtonProps> = {
    $size: 'm',
    $theme: 'green',
    $variant: 'contained',
};

const getTransitionProperty = (props: TButtonProps): RuleSet => {
    const { $variant } = { ...defaultButtonProps, ...props };

    switch ($variant) {
        case 'contained':
            return css`
                transition-property: color, border-color, background-color;
            `;
        case 'outlined':
            return css`
                transition-property: color, border-color;
            `;
        case 'text':
            return css`
                transition-property: color;
            `;
    }
};

const getFontSize = (props: TButtonProps): RuleSet => {
    const { $size } = { ...defaultButtonProps, ...props };
    const { fontSize, lineHeight } = ButtonSizes[$size];

    return css`
        font-size: ${fontSize};
        line-height: ${lineHeight};
    `;
};

const getTextTransform = (props: TButtonProps): RuleSet => {
    const { $size } = { ...defaultButtonProps, ...props };

    switch ($size) {
        case 'l':
            return css`
                text-transform: uppercase;
            `;

        default:
            return css``;
    }
};

const getColor = (props: TButtonProps): RuleSet => {
    const { $variant, $theme } = { ...defaultButtonProps, ...props };
    const { mainColor, secondaryColor } = ButtonTheme[$theme];

    switch ($variant) {
        case 'contained':
            return css`
                color: ${secondaryColor.normal};

                &:hover {
                    color: ${secondaryColor.hover};
                }
            `;

        default:
            return css`
                color: ${mainColor.normal};

                &:hover {
                    color: ${mainColor.hover};
                }
            `;
    }
};

const getBackgroundColor = (props: TButtonProps): RuleSet => {
    const { $variant, $theme } = { ...defaultButtonProps, ...props };
    const { mainColor } = ButtonTheme[$theme];

    switch ($variant) {
        case 'contained':
            return css`
                background-color: ${mainColor.normal};

                &:hover {
                    background-color: ${mainColor.hover};
                }
            `;

        default:
            return css``;
    }
};

const getBorder = (props: TButtonProps): RuleSet => {
    const { $variant, $theme, $size } = { ...defaultButtonProps, ...props };
    const { borderColor } = ButtonTheme[$theme];
    const { borderRadius, borderStyle, borderWidth } = ButtonSizes[$size];

    switch ($variant) {
        case 'text':
            return css``;

        default:
            return css`
                border-color: ${borderColor.normal};
                border-radius: ${borderRadius};
                border-style: ${borderStyle};
                border-width: ${borderWidth};

                &:hover {
                    border-color: ${borderColor.hover};
                }
            `;
    }
};

const getPadding = (props: TButtonProps): RuleSet => {
    const { $variant, $size } = { ...defaultButtonProps, ...props };
    const { paddingBlock, paddingInline } = ButtonSizes[$size];

    switch ($variant) {
        case 'text':
            return css``;

        default:
            return css`
                padding-block: ${paddingBlock};
                padding-inline: ${paddingInline};
            `;
    }
};

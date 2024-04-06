import R from 'react';

import styled, { css, RuleSet } from 'styled-components';

import { AvailableTheme, Config } from 'components/ui/Config';
import { AvailableSize } from 'components/ui/Config';

function _Button(props: TButtonProps) {
    const { children, startIcon, endIcon, ..._props } = props;

    return (
        <button {..._props}>
            {startIcon}
            {children && <div>{children}</div>}
            {endIcon}
        </button>
    );
}

type T = R.ButtonHTMLAttributes<HTMLButtonElement>;

export type TButtonProps = T & {
    $size?: AvailableSize;
    $theme?: AvailableTheme;
    $variant?: 'contained' | 'outlined' | 'text';
    endIcon?: R.ReactElement | null;
    startIcon?: R.ReactElement | null;
};

const defaultButtonProps: Required<Omit<TButtonProps, keyof T>> = {
    $size: 'm',
    $theme: 'green',
    $variant: 'contained',
    endIcon: null,
    startIcon: null,
};

export const Button = styled(_Button)`
    display: flex;
    align-items: center;
    column-gap: 0.3em;
    ${p => getTransition(p)}
    ${p => getFontSize(p)};
    ${p => getTextTransform(p)};
    ${p => getColor(p)};
    ${p => getBackgroundColor(p)};
    ${p => getBorder(p)};
    ${p => getPadding(p)};
    ${p => getSvgSize(p)};

    & > * {
        pointer-events: none;
    }
`;

function getTransition(props: TButtonProps): RuleSet {
    const { $variant } = { ...defaultButtonProps, ...props };
    const { transitionDuration, transitionTimingFunction } = Config.transition.normal;

    switch ($variant) {
        case 'contained':
            return css`
                transition-property: color, border-color, background-color;
                transition-duration: ${transitionDuration};
                transition-timing-function: ${transitionTimingFunction};
            `;
        case 'outlined':
            return css`
                transition-property: color, border-color;
                transition-duration: ${transitionDuration};
                transition-timing-function: ${transitionTimingFunction};
            `;
        case 'text':
            return css`
                transition-property: color;
                transition-duration: ${transitionDuration};
                transition-timing-function: ${transitionTimingFunction};
            `;
    }
}

function getFontSize(props: TButtonProps): RuleSet {
    const { $size } = { ...defaultButtonProps, ...props };
    const { fontSize, lineHeight } = Config.font[$size];

    return css`
        font-size: ${fontSize};
        line-height: ${lineHeight};
    `;
}

function getTextTransform(props: TButtonProps): RuleSet {
    const { $size } = { ...defaultButtonProps, ...props };

    switch ($size) {
        case 'l':
            return css`
                text-transform: uppercase;
            `;

        default:
            return css``;
    }
}

function getColor(props: TButtonProps): RuleSet {
    const { $variant, $theme } = { ...defaultButtonProps, ...props };
    const { mainColor, minorColor } = Config.theme[$theme];

    switch ($variant) {
        case 'contained':
            return css`
                color: ${minorColor.normal};

                &:hover {
                    color: ${minorColor.hover};
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
}

function getBackgroundColor(props: TButtonProps): RuleSet {
    const { $variant, $theme } = { ...defaultButtonProps, ...props };
    const { mainColor } = Config.theme[$theme];

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
}

function getBorder(props: TButtonProps): RuleSet {
    const { $variant, $theme, $size } = { ...defaultButtonProps, ...props };
    const { borderColor } = Config.theme[$theme];
    const { borderRadius, borderStyle, borderWidth } = Config.border[$size];

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
}

function getPadding(props: TButtonProps): RuleSet {
    const { $variant, $size } = { ...defaultButtonProps, ...props };
    const { paddingBlock, paddingInline } = Config.padding[$size];

    switch ($variant) {
        case 'text':
            return css``;

        default:
            return css`
                padding-block: ${paddingBlock};
                padding-inline: ${paddingInline};
            `;
    }
}

function getSvgSize(props: TButtonProps): RuleSet {
    const { $size, endIcon, startIcon } = { ...defaultButtonProps, ...props };
    const { lineHeight } = Config.font[$size];

    if (!(endIcon || startIcon)) return css``;

    return css`
        & svg {
            height: ${lineHeight};
        }
    `;
}

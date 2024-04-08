import R from 'react';

import styled, { css, CSSProperties, RuleSet, WebTarget } from 'styled-components';

import {
    AvailableSize,
    AvailableText,
    AvailableTheme,
    calc,
    Config,
    TButtonAttrs,
} from 'components/ui/Config';

export function Button(props: TButtonProps) {
    const { children, $startIcon, $endIcon } = props;

    return (
        <_Button {...props}>
            {$startIcon}
            {children && <div>{children}</div>}
            {$endIcon}
        </_Button>
    );
}

type T = TButtonAttrs;

export type TButtonProps = T & {
    $endIcon?: R.ReactElement | null;
    $size?: AvailableSize;
    $startIcon?: R.ReactElement | null;
    $text?: AvailableText;
    $theme?: AvailableTheme;
    $transform?: CSSProperties['textTransform'];
    $variant?: 'contained' | 'outlined' | 'text';
    as?: WebTarget;
};

export const defaultButtonProps: Required<Omit<TButtonProps, keyof T>> = {
    $endIcon: null,
    $size: 'normal',
    $startIcon: null,
    $text: 'p',
    $theme: 'green',
    $transform: 'none',
    $variant: 'contained',
    as: 'button',
};

export const ButtonStyle = css<TButtonProps>`
    display: flex;
    align-items: center;
    column-gap: 0.3em;
    flex-shrink: 0;
    cursor: pointer;
    width: fit-content;
    ${p => getTransition(p)}
    ${p => getFontSize(p)};
    ${p => getTextTransform(p)};
    ${p => getColor(p)};
    ${p => getBorder(p)};
    ${p => getPadding(p)};
    ${p => getSvgSize(p)};

    & > * {
        pointer-events: none;
    }
`;

const _Button = styled('button')<TButtonProps>`
    ${ButtonStyle}
`;

function getTransition(props: TButtonProps): RuleSet {
    const { $variant } = { ...defaultButtonProps, ...props };
    const { transitionDuration, transitionFunction } = Config.transition.normal;

    const base = css`
        transition-duration: ${transitionDuration};
        transition-timing-function: ${transitionFunction};
    `;

    switch ($variant) {
        case 'text':
            return css`
                transition-property: color;
            `.concat(base);

        case 'outlined':
            return css`
                transition-property: color, border-color;
            `.concat(base);

        case 'contained':
            return css`
                transition-property: color, background-color;
            `.concat(base);
    }
}

function getFontSize(props: TButtonProps): RuleSet {
    const { $size, $text } = { ...defaultButtonProps, ...props };
    const { coefficient } = Config.size[$size];
    const { fontSize, fontWeight, lineHeight } = Config.text[$text];

    return css`
        font-size: ${calc(fontSize, coefficient)};
        font-weight: ${fontWeight};
        line-height: ${lineHeight};
    `;
}

function getTextTransform(props: TButtonProps): RuleSet {
    const { $transform } = { ...defaultButtonProps, ...props };

    return css`
        text-transform: ${$transform};
    `;
}

function getColor(props: TButtonProps): RuleSet {
    const { $variant, $theme } = { ...defaultButtonProps, ...props };
    const { mainColor, minorColor } = Config.theme[$theme];

    switch ($variant) {
        case 'contained':
            return css`
                background-color: ${$theme !== 'current' && mainColor.normal};
                color: ${minorColor.normal};

                &:hover {
                    background-color: ${$theme !== 'current' && mainColor.hover};
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

function getBorder(props: TButtonProps): RuleSet {
    const { $variant, $theme } = { ...defaultButtonProps, ...props };
    const { borderColor } = Config.theme[$theme];
    const { borderRadius, borderStyle, borderWidth } = Config.border;

    switch ($variant) {
        case 'outlined':
            return css`
                border-color: ${borderColor.normal};
                border-radius: ${borderRadius};
                border-style: ${borderStyle};
                border-width: ${borderWidth};

                &:hover {
                    border-color: ${borderColor.hover};
                }
            `;

        case 'contained':
            return css`
                border-radius: ${borderRadius};
            `;

        default:
            return css``;
    }
}

function getPadding(props: TButtonProps): RuleSet {
    const { $variant } = { ...defaultButtonProps, ...props };
    const { paddingBlock, paddingInline } = Config.padding;

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
    const { $text, $endIcon, $startIcon } = { ...defaultButtonProps, ...props };
    const { lineHeight } = Config.text[$text];

    if (!($endIcon || $startIcon)) return css``;

    return css`
        & svg {
            font-size: inherit;
            height: ${lineHeight};
        }
    `;
}

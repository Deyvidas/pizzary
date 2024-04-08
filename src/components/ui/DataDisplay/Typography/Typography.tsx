import styled, { css, CSSProperties, RuleSet } from 'styled-components';

import {
    AvailableSize,
    AvailableText,
    AvailableTheme,
    calc,
    Config,
    THeadingAttrs,
    TParagraphAttrs,
} from 'components/ui/Config';

export function Typography(props: TTypographyProps) {
    const { $variant } = props;

    return <_Typography as={$variant} {...props} />;
}

type T = THeadingAttrs & TParagraphAttrs;

type TTypographyProps = T & {
    $isCentered?: boolean;
    $size?: AvailableSize;
    $textTransform?: CSSProperties['textTransform'];
    $textWrap?: 'balance' | 'nowrap' | 'wrap';
    $theme?: AvailableTheme;
    $variant?: AvailableText;
};

const defaultTypographyProps: Required<Omit<TTypographyProps, keyof T>> = {
    $isCentered: false,
    $size: 'normal',
    $textTransform: 'none',
    $textWrap: 'wrap',
    $theme: 'grayDark',
    $variant: 'p',
};

const _Typography = styled('p')<TTypographyProps>`
    ${p => getFontSize(p)};
    ${p => getTextAlign(p)};
    text-wrap: ${p => p.$textWrap};
    text-transform: ${p => p.$textTransform};
    ${p => getColor(p)};
`;

function getFontSize(props: TTypographyProps): RuleSet {
    const { $variant, $size } = { ...defaultTypographyProps, ...props };
    const { fontSize, fontWeight, lineHeight } = Config.text[$variant];
    const { coefficient } = Config.size[$size];

    return css`
        font-size: ${calc(fontSize, coefficient)};
        font-weight: ${fontWeight};
        line-height: ${lineHeight};
    `;
}

function getTextAlign(props: TTypographyProps): RuleSet {
    const { $isCentered } = { ...defaultTypographyProps, ...props };

    switch ($isCentered) {
        case true:
            return css`
                text-align: center;
                text-wrap: ${props.$textWrap || css`balance`};
            `;
        case false:
            return css``;
    }
}

function getColor(props: TTypographyProps): RuleSet {
    const { $theme } = { ...defaultTypographyProps, ...props };
    const { mainColor } = Config.theme[$theme];

    return css`
        color: ${mainColor.normal};
    `;
}

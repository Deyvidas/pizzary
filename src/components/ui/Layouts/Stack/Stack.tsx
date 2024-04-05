import styled, { css, CSSObject, CSSProperties, RuleSet } from 'styled-components';

export const Stack = styled('div')<TStackProps>`
    display: flex;
    ${p => getFlexDirection(p)};
    ${p => getGap(p)}
    ${p => getJustifyContent(p)};
    ${p => getAlignItems(p)};
`;

type TStackProps = {
    $align?: CSSProperties['alignItems'];
    $direction?: 'column' | 'row';
    $justify?: CSSProperties['justifyContent'];
    $spacing?: number;
};

const defaultStackProps: Required<TStackProps> = {
    $align: 'center',
    $direction: 'row',
    $justify: 'normal',
    $spacing: 1,
};

const getFlexDirection = (props: TStackProps): RuleSet => {
    const { $direction } = { ...defaultStackProps, ...props };

    switch ($direction) {
        case 'column':
            return css`
                flex-direction: ${$direction};
            `;

        default:
            return css``;
    }
};

const getGap = (props: TStackProps): RuleSet => {
    const { $direction, $spacing } = { ...defaultStackProps, ...props };

    switch ($direction) {
        case 'column':
            return css`
                row-gap: ${$spacing}rem;
            `;
        case 'row':
            return css`
                column-gap: ${$spacing}rem;
            `;
    }
};

const getJustifyContent = (props: TStackProps): RuleSet => {
    const { $justify } = { ...defaultStackProps, ...props };

    return css`
        justify-content: ${$justify};
    `;
};

const getAlignItems = (props: TStackProps): RuleSet => {
    const { $align } = { ...defaultStackProps, ...props };

    return css`
        align-items: ${$align};
    `;
};

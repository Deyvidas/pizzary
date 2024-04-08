import styled, { css, CSSProperties, RuleSet, WebTarget } from 'styled-components';

import { TDivAttrs } from 'components/ui/Config/AttributesType';

export function Stack(props: TStackProps) {
    const {} = props;

    return <_Stack {...props} />;
}

type T = TDivAttrs;

type TStackProps = T & {
    $align?: CSSProperties['alignItems'];
    $direction?: 'column' | 'row';
    $justify?: CSSProperties['justifyContent'];
    $spacing?: number;
    as?: WebTarget;
};

const defaultStackProps: Required<Omit<TStackProps, keyof T>> = {
    $align: 'center',
    $direction: 'row',
    $justify: 'normal',
    $spacing: 1,
    as: 'div',
};

const _Stack = styled('div')<TStackProps>`
    display: flex;
    min-width: fit-content;
    ${p => getFlexDirection(p)};
    ${p => getGap(p)}
    ${p => getJustifyContent(p)};
    ${p => getAlignItems(p)};
`;

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
    const { $align, $direction } = { ...defaultStackProps, ...props };

    if ($direction === 'column' && !props.$align) return css``;

    return css`
        align-items: ${$align};
    `;
};

import R from 'react';

import styled, { css, RuleSet } from 'styled-components';

function _[FTName|pascalcase](props: T[FTName|pascalcase]Props) {
    const {children, ..._props} = props;

    return <div {..._props}>{children}</div>;
}

type T = R.HTMLAttributes<HTMLDivElement>;

type T[FTName|pascalcase]Props = T & {};

const default[FTName|pascalcase]Props: Required<Omit<T[FTName|pascalcase]Props, keyof T>> = {};

export const [FTName|pascalcase] = styled(_[FTName|pascalcase])``;

function getSome(props: T[FTName|pascalcase]Props): RuleSet {
    const {} = { ...default[FTName|pascalcase]Props, ...props};

    switch ('') {
        case '':
            return css``;
        default:
            return css``;
    }
};
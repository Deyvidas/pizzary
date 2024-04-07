import R from 'react';

import styled, { css, RuleSet, WebTarget } from 'styled-components';

export function [FTName|pascalcase](props: T[FTName|pascalcase]Props) {
    const {} = props;

    return <_[FTName|pascalcase] {...props} />;
}

type T = R.HTMLAttributes<HTMLDivElement>;

type T[FTName|pascalcase]Props = T & {
    as?: WebTarget;
};

const default[FTName|pascalcase]Props: Required<Omit<T[FTName|pascalcase]Props, keyof T>> = {
    as: 'div',
};

const _[FTName|pascalcase] = styled('div')<T[FTName|pascalcase]Props>``;

// function getSome(props: T[FTName|pascalcase]Props): RuleSet {
//     const {} = { ...default[FTName|pascalcase]Props, ...props};

//     switch ('') {
//         case '':
//             return css``;
//         default:
//             return css``;
//     }
// };
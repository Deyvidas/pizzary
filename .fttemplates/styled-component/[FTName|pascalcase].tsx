import styled, { CSSObject } from 'styled-components';

export const [FTName|pascalcase] = styled('div')<T[FTName|pascalcase]Props>``;

type T[FTName|pascalcase]Props = {};

const default[FTName|pascalcase]Props: Required<T[FTName|pascalcase]Props> = {};

const setSome = (props: T[FTName|pascalcase]Props): CSSObject<T[FTName|pascalcase]Props> => {
    const {} = { ...default[FTName|pascalcase]Props, ...props};

    switch ('') {
        case '':
            return {};
        default:
            throw new Error();
    }
};
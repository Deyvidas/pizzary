import { CSSProperties } from 'styled-components';

export type AvailableText = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

const TextDefault: TTextParams = {
    fontSize: 'inherit',
    fontWeight: 'inherit',
    lineHeight: '1.3em',
};

export const Text: TText = {
    h1: {
        ...TextDefault,
        fontSize: '2.7rem',
        fontWeight: '600',
    },
    h2: {
        ...TextDefault,
        fontSize: '2.5rem',
        fontWeight: '600',
    },
    h3: {
        ...TextDefault,
        fontSize: '2.3rem',
        fontWeight: '600',
    },
    h4: {
        ...TextDefault,
        fontSize: '2.1rem',
        fontWeight: '500',
    },
    h5: {
        ...TextDefault,
        fontSize: '1.9rem',
        fontWeight: '500',
    },
    h6: {
        ...TextDefault,
        fontSize: '1.7rem',
        fontWeight: '500',
    },
    p: {
        ...TextDefault,
        fontSize: '1.5rem',
        fontWeight: '400',
    },
};

export type TText = {
    [key in AvailableText]: TTextParams;
};

type TTextParams = {
    fontSize: CSSProperties['fontSize'];
    fontWeight: CSSProperties['fontWeight'];
    lineHeight: CSSProperties['lineHeight'];
};

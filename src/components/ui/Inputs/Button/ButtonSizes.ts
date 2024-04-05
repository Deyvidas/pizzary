import { CSSProperties } from 'styled-components';

export type AvailableButtonSizes = 's' | 'm' | 'l';

export const ButtonSizes: TButtonSize = {
    l: {
        borderRadius: '0.7em',
        borderStyle: 'solid',
        borderWidth: '1px',
        fontSize: '2rem',
        lineHeight: '1.3em',
        paddingBlock: '0.4em',
        paddingInline: '1.5em',
    },
    m: {
        borderRadius: '0.7em',
        borderStyle: 'solid',
        borderWidth: '1px',
        fontSize: '1.6rem',
        lineHeight: '1.3em',
        paddingBlock: '0.4em',
        paddingInline: '1.5em',
    },
    s: {
        borderRadius: '0.7em',
        borderStyle: 'solid',
        borderWidth: '1px',
        fontSize: '1.2rem',
        lineHeight: '1.3em',
        paddingBlock: '0.4em',
        paddingInline: '1.5em',
    },
};

type TButtonSize = {
    [key in AvailableButtonSizes]: {
        borderRadius: CSSProperties['borderRadius'];
        borderStyle: CSSProperties['borderStyle'];
        borderWidth: CSSProperties['borderWidth'];
        fontSize: CSSProperties['fontSize'];
        lineHeight: CSSProperties['lineHeight'];
        paddingBlock: CSSProperties['paddingBlock'];
        paddingInline: CSSProperties['paddingInline'];
    };
};

import { CSSProperties } from 'styled-components';

export const Border: TBorder = {
    borderRadius: '0.5em',
    borderStyle: 'solid',
    borderWidth: '0.1em',
};

export type TBorder = {
    borderRadius: CSSProperties['borderRadius'];
    borderStyle: CSSProperties['borderStyle'];
    borderWidth: CSSProperties['borderWidth'];
};

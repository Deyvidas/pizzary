import { CSSProperties } from 'styled-components';

export const Padding: TPadding = {
    paddingBlock: '0.4em',
    paddingInline: '0.8em',
};

export type TPadding = {
    paddingBlock: CSSProperties['paddingBlock'];
    paddingInline: CSSProperties['paddingInline'];
};

import { CSSProperties } from 'styled-components';

export const Padding: TPadding = {
    paddingBlock: '0.3em',
    paddingInline: '0.6em',
};

export type TPadding = {
    paddingBlock: CSSProperties['paddingBlock'];
    paddingInline: CSSProperties['paddingInline'];
};

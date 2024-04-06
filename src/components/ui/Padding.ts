import { CSSProperties } from 'styled-components';

import { AvailableSize } from './Config';

const PaddingCommon: TPaddingParams = {
    paddingBlock: '0.3em',
    paddingInline: '0.6em',
};

export const Padding: TPadding = {
    l: { ...PaddingCommon },
    m: { ...PaddingCommon },
    s: { ...PaddingCommon },
};

export type TPadding = {
    [key in AvailableSize]: TPaddingParams;
};

type TPaddingParams = {
    paddingBlock: CSSProperties['paddingBlock'];
    paddingInline: CSSProperties['paddingInline'];
};

import { CSSProperties } from 'styled-components';

import { AvailableSize } from './Config';

const BorderCommon: TBorderParams = {
    borderRadius: '0.5em',
    borderStyle: 'solid',
    borderWidth: '1px',
};

export const Border: TBorder = {
    l: { ...BorderCommon },
    m: { ...BorderCommon },
    s: { ...BorderCommon },
};

export type TBorder = {
    [key in AvailableSize]: TBorderParams;
};

type TBorderParams = {
    borderRadius: CSSProperties['borderRadius'];
    borderStyle: CSSProperties['borderStyle'];
    borderWidth: CSSProperties['borderWidth'];
};

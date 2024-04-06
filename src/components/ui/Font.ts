import { CSSProperties } from 'styled-components';

import { AvailableSize } from './Config';

const FontCommon: TFontParams = {
    fontSize: 'inherit',
    lineHeight: '1.3em',
};

export const Font: TFont = {
    l: { ...FontCommon, fontSize: '2rem' },
    m: { ...FontCommon, fontSize: '1.6rem' },
    s: { ...FontCommon, fontSize: '1.2rem' },
};

export type TFont = {
    [key in AvailableSize]: TFontParams;
};

type TFontParams = {
    fontSize: CSSProperties['fontSize'];
    lineHeight: CSSProperties['lineHeight'];
};

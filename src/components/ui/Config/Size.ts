export type AvailableSize = 'xxl' | 'xl' | 'l' | 'normal' | 's' | 'xs' | 'xxs';

export const Size: TSize = {
    xxl: { coefficient: 1.3 },
    xl: { coefficient: 1.2 },
    l: { coefficient: 1.1 },
    normal: { coefficient: 1 },
    s: { coefficient: 0.9 },
    xs: { coefficient: 0.8 },
    xxs: { coefficient: 0.7 },
};

export type TSize = {
    [key in AvailableSize]: {
        coefficient: number;
    };
};

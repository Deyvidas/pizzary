import R from 'react';

import styled, { css, RuleSet, WebTarget } from 'styled-components';

import {
    AvailableIcon,
    AvailableSize,
    AvailableTheme,
    Config,
} from 'components/ui/Config';

import sprites from '../../../../media/sprites.svg';

export function Icon(props: TIconProps) {
    const { $iconId } = props;

    return (
        <_Icon {...props}>
            <use href={`${sprites}#${$iconId}`}></use>
        </_Icon>
    );
}

type T = R.SVGProps<SVGSVGElement>;

export type TIconProps = T & {
    $iconId: AvailableIcon;
    $size?: AvailableSize;
    $theme?: AvailableTheme;
    as?: WebTarget;
};

const defaultIconProps: Required<Omit<TIconProps, keyof T>> = {
    $iconId: 'Close',
    $size: 'normal',
    $theme: 'current',
    as: 'svg',
};

const _Icon = styled('svg')<TIconProps>`
    display: inline-flex;
    align-self: center;
    font-size: ${Config.text.p.fontSize};
    ${p => getSize(p)}
    ${p => getColor(p)}
`;

function getSize(props: TIconProps): RuleSet {
    const { $iconId, $size } = { ...defaultIconProps, ...props };
    const { coefficient } = Config.size[$size];
    const { aspectRatio } = Config.iconSize[$iconId];

    return css`
        height: ${coefficient}em;
        flex-shrink: 0;
        aspect-ratio: ${aspectRatio};
    `;
}

function getColor(props: TIconProps): RuleSet {
    const { $theme } = { ...defaultIconProps, ...props };
    const { hover, normal } = Config.theme[$theme].mainColor;
    const { transitionDuration, transitionFunction } = Config.transition.normal;

    return css`
        transition-property: fill;
        transition-duration: ${transitionDuration};
        transition-timing-function: ${transitionFunction};
        fill: ${normal};

        &:hover {
            fill: ${hover};
        }
    `;
}

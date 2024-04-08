import styled, { css, RuleSet, WebTarget } from 'styled-components';

import { AvailableIcon, AvailableTheme, Config, TSvgAttrs } from 'components/ui/Config';

import sprites from '../../../../media/sprites.svg';

export function Icon(props: TIconProps) {
    const { $iconId } = props;

    return (
        <_Icon {...props}>
            <use href={`${sprites}#${$iconId}`}></use>
        </_Icon>
    );
}

type T = TSvgAttrs;

export type TIconProps = T & {
    $height?: number;
    $iconId: AvailableIcon;
    $theme?: AvailableTheme;
    as?: WebTarget;
};

const defaultIconProps: Required<Omit<TIconProps, keyof T>> = {
    $height: 1,
    $iconId: 'Close',
    $theme: 'current',
    as: 'svg',
};

const _Icon = styled('svg')<TIconProps>`
    display: inline-flex;
    align-self: center;
    ${p => getSize(p)}
    ${p => getColor(p)}
`;

function getSize(props: TIconProps): RuleSet {
    const { $iconId, $height } = { ...defaultIconProps, ...props };
    const { aspectRatio } = Config.iconSize[$iconId];

    return css`
        height: ${$height}rem;
        flex-shrink: 0;
        aspect-ratio: ${aspectRatio};
    `;
}

function getColor(props: TIconProps): RuleSet {
    const { $theme } = { ...defaultIconProps, ...props };
    const { mainColor } = Config.theme[$theme];
    const { transitionDuration, transitionFunction } = Config.transition.normal;

    return css`
        transition-property: fill;
        transition-duration: ${transitionDuration};
        transition-timing-function: ${transitionFunction};
        fill: ${mainColor.normal};

        &:hover {
            fill: ${mainColor.hover};
        }
    `;
}

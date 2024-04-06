import R from 'react';

import styled, { css, RuleSet } from 'styled-components';

import { AvailableSize, AvailableTheme, Config } from 'components/ui/Config';
import { AvailableIcon, IconSize } from 'components/ui/IconSize';

import sprites from '../../../../media/sprites.svg';

function _Icon(props: R.SVGAttributes<HTMLOrSVGElement> & TIconProps) {
    const { children, iconId, ..._props } = props;

    return (
        <svg {..._props}>
            <use href={`${sprites}#${iconId}`}></use>
        </svg>
    );
}

export const Icon = styled(_Icon)`
    display: inline-flex;
    align-self: center;
    ${p => getSize(p)}
    ${p => getColor(p)}
`;

export type TIconProps = {
    iconId: AvailableIcon;
    $size?: AvailableSize;
    $theme?: AvailableTheme;
};

const defaultIconProps: Required<TIconProps> = {
    iconId: 'Close',
    $size: 'm',
    $theme: 'current',
};

function getSize(props: TIconProps): RuleSet {
    const { iconId, $size } = { ...defaultIconProps, ...props };
    const { aspectRatio, scaleCoefficient } = IconSize[iconId][$size];

    return css`
        height: calc(1rem * ${scaleCoefficient});
        aspect-ratio: ${aspectRatio};
    `;
}

function getColor(props: TIconProps): RuleSet {
    const { $theme } = { ...defaultIconProps, ...props };
    const { hover, normal } = Config.theme[$theme].mainColor;
    const { transitionDuration, transitionTimingFunction } = Config.transition.normal;

    return css`
        transition-property: fill;
        transition-duration: ${transitionDuration};
        transition-timing-function: ${transitionTimingFunction};
        fill: ${normal};

        &:hover {
            fill: ${hover};
        }
    `;
}

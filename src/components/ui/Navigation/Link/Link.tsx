import R from 'react';
import { NavLink } from 'react-router-dom';

import styled, { css, RuleSet, WebTarget } from 'styled-components';

import { Config, TButtonAttrs } from 'components/ui/Config';
import { TNavLinkAttrs } from 'components/ui/Config/AttributesType';
import { defaultButtonProps, TButtonProps } from 'components/ui/Inputs/Button';
import { ButtonStyle } from 'components/ui/Inputs/Button/Button';

import { onClickScrollTop } from 'utils';

export function Link(props: TLinkProps) {
    const { $endIcon, $startIcon, children } = props;

    function handleClick(event: R.MouseEvent<HTMLAnchorElement & HTMLButtonElement>) {
        !!props.onClick && props.onClick(event);
        !!props.$onClickScrollTop && onClickScrollTop();
    }

    return (
        <_Link {...props} onClick={handleClick}>
            {$startIcon}
            {children && <div>{children}</div>}
            {$endIcon}
        </_Link>
    );
}

type T = TButtonAttrs & TNavLinkAttrs;

type TLinkProps = (T & TButtonProps) & {
    $onClickScrollTop?: boolean;
    as?: WebTarget;
};

const defaultLinkProps: Required<Omit<TLinkProps, keyof T>> = {
    ...defaultButtonProps,
    $onClickScrollTop: false,
    as: 'a',
};

const _Link = styled(NavLink)<TLinkProps>`
    ${ButtonStyle}

    &.active {
        ${p => getActiveColor(p)}
    }
`;

function getActiveColor(props: TLinkProps): RuleSet {
    const { $theme, $variant } = { ...defaultLinkProps, ...props };
    const { borderColor, mainColor, minorColor } = Config.theme[$theme];

    switch ($variant) {
        case 'contained':
            return css`
                color: ${minorColor.hover};
                background-color: ${mainColor.hover};
            `;

        case 'outlined':
            return css`
                color: ${mainColor.hover};
                border-color: ${borderColor.hover};
            `;

        case 'text':
            return css`
                color: ${mainColor.hover};
            `;
    }
}

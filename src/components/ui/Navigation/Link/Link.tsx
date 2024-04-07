import R from 'react';

import styled, { css, RuleSet, WebTarget } from 'styled-components';

export function Link(props: TLinkProps) {
    const {} = props;

    return <_Link {...props} />;
}

type T = R.AnchorHTMLAttributes<HTMLAnchorElement>;

type TLinkProps = T & {
    as?: WebTarget;
};

const defaultLinkProps: Required<Omit<TLinkProps, keyof T>> = {
    as: 'a',
};

const _Link = styled('a')<TLinkProps>``;

function getSome(props: TLinkProps): RuleSet {
    const {} = { ...defaultLinkProps, ...props };

    switch ('') {
        case '':
            return css``;
        default:
            return css``;
    }
}

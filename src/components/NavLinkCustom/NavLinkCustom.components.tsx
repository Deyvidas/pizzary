import R from 'react';
import { NavLink, To } from 'react-router-dom';

import { onClickScrollTop } from 'utils';

type TNavLinkCustomProps = R.AnchorHTMLAttributes<HTMLAnchorElement> & {
    to: To;
    classNameActive: string;
};

export function NavLinkCustom(props: TNavLinkCustomProps) {
    const { className, classNameActive, to, children, ..._props } = props;

    type NavLinkRenderProps = {
        isActive: boolean;
        isPending: boolean;
        isTransitioning: boolean;
    };

    function toggleIsActive({ isActive }: NavLinkRenderProps) {
        return isActive ? `${className} ${classNameActive}` : className;
    }

    return (
        <NavLink
            className={toggleIsActive}
            to={to}
            onClick={onClickScrollTop}
            {..._props}
        >
            {children}
        </NavLink>
    );
}

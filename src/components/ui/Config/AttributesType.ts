import R from 'react';
import { NavLinkProps } from 'react-router-dom';

export type TButtonAttrs = R.ButtonHTMLAttributes<HTMLButtonElement>;
export type TDivAttrs = R.HTMLAttributes<HTMLDivElement>;
export type THeadingAttrs = R.HTMLAttributes<HTMLHeadingElement>;
export type TNavLinkAttrs = NavLinkProps & R.RefAttributes<HTMLAnchorElement>;
export type TParagraphAttrs = R.HTMLAttributes<HTMLParagraphElement>;
export type TSvgAttrs = R.SVGProps<SVGSVGElement>;

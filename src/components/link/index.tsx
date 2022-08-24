import 'papercss'

import React from 'react'

export interface LinkProps extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
    className?: string
}

export default function Link({ className, href, children, ...props }: LinkProps) {
    return (
        <a className={className ?? undefined} href={href} {...props}> {children} </a>
    )
}
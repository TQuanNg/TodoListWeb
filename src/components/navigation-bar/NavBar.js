import React from 'react'

export const NavBar = () => {
    return (
        <nav className="NavBar">
            <a href="/" className="site-title">
                Home
            </a>
            <ul>
                <CustomLink href="/pricing">Pricing</CustomLink>
                <CustomLink href="/about">About</CustomLink>
            </ul>
        </nav>
    )
}

export const CustomLink = ({ href, children, ...props }) => {
    const path = window.location.pathname
    return (
        <li className={path === href ? "activeBar" : ""}>
            <a href={href} {...props}>
                {children}
            </a>
        </li>
    )
}
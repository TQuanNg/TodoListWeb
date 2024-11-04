import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to="/" className="site-title">
                Home
            </Link>
            <ul>
                <CustomLink to="/pricing">Pricing</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </ul>
        </nav>
    )
}

export const CustomLink = ({ href, children, ...props }) => {
    // const path = window.location.pathname // not work anymore
    const resolvedPath = useResolvedPath(to) // ensure this is abs path
    const isActive = useMatch({ path: resolvedPath.pathname, end: true}) // end ensure abs path match

    return (
        <li className={isActive ? "activeBar" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

// /prinfsadf: abs path
// prfksd: relative path
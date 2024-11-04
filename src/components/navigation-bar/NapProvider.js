import {NavBar} from './NavBar';
import { AboutWrapper} from './AboutWrapper'
import React from 'react'

function Projects() {
    return <div> Project page</div>
}

function Home() {
    return <div>Home Page</div>; // Placeholder for home content
}

export const NavProvider = () => {
    let component
    switch(window.location.pathname) {
        case "/":
            component = <Home />
            break
        case "/pricing":
            component = <Projects />
            break
        case "/about":
            component = <AboutWrapper />
            break
    }

    return (
        <div>
            <NavBar />
            {component}
        </div>
    )
}
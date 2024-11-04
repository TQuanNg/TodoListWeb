import {NavBar} from './NavBar';
import { AboutWrapper} from './AboutWrapper'
import React from 'react'
import { Route, Routes } from "react-router-dom";

function Projects() {
    return <div> Project page</div>
}

function Home() {
    return <div>Home Page</div>; // Placeholder for home content
}

export const NavProvider = () => {

    return (
        <div>
            <NavBar />
            {component}
            <div>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/' element={<Pricing />} />
                    <Route path='/' element={<About />} />
                </Routes>
            </div>
        </div>
    )
}
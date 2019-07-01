import React from 'react'
import logo from '../../img/logo.png'
import './navbar.scss'

export default function Navbar() {
    return <div>
        <nav className="navbar">
            <img src={logo} alt="logo" height="100px"/>
            <ul className="nav-links">
                <li>
                    <a href="#" className="nav-link">home</a>
                </li>
                <li>
                    <a href="#" className="nav-link">about</a>
                </li>
                <li>
                    <a href="#" className="nav-link active">tours</a>
                </li>

            </ul>
        </nav>
    </div>
}
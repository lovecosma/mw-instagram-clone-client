import React from 'react'
import {NavLink} from "react-router-dom"
export default function GuestNavBar() {
    return (
        <div>
            <nav className="container white black-text">
                <div class="nav-wrapper">
                <a href="#" class="brand-logo black-text">Instagram Clone</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><NavLink className="black-text" to="/">Home</NavLink></li>
                    <li><NavLink className="black-text" to="/login">Login</NavLink></li>
                    <li><NavLink className="black-text" to="/signup">Sign Up</NavLink></li>
                </ul>
                </div>
            </nav>
        </div>
    )
}

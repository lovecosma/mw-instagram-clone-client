import React from 'react'
import {NavLink} from "react-router-dom"
export default function GuestNavBar() {
    return (
        <div>
            <NavLink to="/">Home</NavLink><br/>
            <NavLink to="/login">Login</NavLink><br/>
            <NavLink to="/signup">Sign Up</NavLink>
        </div>
    )
}

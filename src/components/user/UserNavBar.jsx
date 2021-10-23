import React, {useContext} from 'react'
import { NavLink } from "react-router-dom"

export default function UserNavBar() {

    return (
        <div>
            <NavLink to="/">Home</NavLink><br/>
            <NavLink to="/upload">Upload</NavLink><br/>
            <NavLink to="/posts">Posts</NavLink>
            <NavLink to="/logout">Logout</NavLink>
        </div>
    )
}

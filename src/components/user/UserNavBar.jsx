import React from 'react'
import { NavLink, useHistory } from "react-router-dom"
import {logout} from "../../actions/users"
import {useDispatch} from "react-redux"

export default function UserNavBar() {
    
    const dispatch = useDispatch()
    const history = useHistory()

    async function handleLogout(e){
        e.preventDefault()
        let logoutResp = await logout(dispatch)
        history.push("/")
    }
    return (
        <div>
            <NavLink to="/">Home</NavLink><br/>
            <NavLink to="/upload">Upload</NavLink><br/>
            <NavLink to="/posts">Posts</NavLink><br/>
            <a href="/logout" onClick={handleLogout}>Logout</a>
        </div>
    )
}

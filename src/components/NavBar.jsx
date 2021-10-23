import React, {useContext} from 'react'
import { NavLink } from "react-router-dom"
import {CloneContext} from "./CombinedProvider"

export default function NavBar() {

    const {UsersState} = useContext(CloneContext)
    return <div></div>
    // if(requesting){
    //     return <div>Requesting</div>
    // } else {
    //      return (
    //         <div>
    //             {
    //                 loggedIn ? 
    //                 <div>
    //                     <NavLink to="/">Home</NavLink><br/>
    //                     <NavLink to="/upload">Upload</NavLink><br/>
    //                     <NavLink to="/posts">Posts</NavLink>
    //                 </div>
    //                 :
    //                 <div>
    //                     <NavLink to="/">Home</NavLink><br/>
    //                     <NavLink to="/login">Login</NavLink><br/>
    //                     <NavLink to="/signup">Sign Up</NavLink>
    //                 </div>
    //             }
    //         </div>
    //     )
    // }
}

import React from 'react'
import { useDipatch, useSelector } from "react-redux"
import UserNavBar from "../components/user/UserNavBar"
import GuestNavBar from "../components/guest/GuestNavBar"

export default function NavContainer() {

    const { loggedIn } = useSelector(({usersReducer}) => {
        return {
            loggedIn: usersReducer.loggedIn
        }
    })
    console.log(loggedIn);
    return (
        <div>
            {loggedIn ? <UserNavBar/> : <GuestNavBar/> }
        </div>
    )
}

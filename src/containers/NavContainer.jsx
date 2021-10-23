import React from 'react'
import { useDipatch, useSelector } from "react-redux"
import UserNavBar from "../components/user/UserNavBar"
import GuestNavBar from "../components/guest/GuestNavBar"

export default function NavContainer() {

    const { loggedIn } = useSelector(({usersReducer}) => usersReducer.loggedIn)

    return (
        <div>
            {loggedIn ? <UserNavBar/> : <GuestNavBar/> }
        </div>
    )
}

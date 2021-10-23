import React, {useState} from "react"
import PostsState from "../actions/posts"
import UsersState from "../actions/users"

export const CloneContext = React.createContext()

export const CloneProvider = props => {

    debugger

    return (
        <CloneContext.Provider value={
            PostsState,
            UsersState
        }>
            {props.children}
        </CloneContext.Provider>
    )

}



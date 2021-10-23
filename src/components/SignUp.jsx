import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import {signup} from "../actions/users"
import { useDispatch } from "react-redux"
export default function SignUp({setSession}) {
    const history = useHistory()
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })
    const dispatch = useDispatch()
    const handleChange = (e) => {
        setFormData(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            }
        })
    }

     function handleSubmit(e){
        e.preventDefault()
        signup(dispatch, formData)
        history.push("/")
    }
    return ( 
        <div>
            <form onSubmit={handleSubmit} >
                <label for="username">Username</label>
                <input onChange={handleChange} type="text" name="username" value={formData.username}></input>
                <label for="password">Password</label>
                <input onChange={handleChange} type="password" name="password" value={formData.password}></input>
                <button onClick={() => console.log(formData)} >Sign Up</button>
            </form>
        </div>
    )
}

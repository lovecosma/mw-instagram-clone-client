import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import {login} from "../actions/users"
import { useDispatch } from "react-redux"

export default function Login() {

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

     async function handleSubmit(e){
        e.preventDefault()
       let resp = await login(dispatch, formData)
        history.push("/")
    }
    return ( 
        <div>
            <form onSubmit={handleSubmit} >
                <label htmlFor="username">Username</label>
                <input onChange={handleChange} type="text" name="username" value={formData.username}></input>
                <label htmlFor="password">Password</label>
                <input onChange={handleChange} type="password" name="password" value={formData.password}></input>
                <button onClick={() => console.log(formData)} >Login</button>
            </form>
        </div>
    )
}

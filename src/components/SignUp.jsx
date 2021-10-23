import React, { useState } from 'react'
import {useHistory} from "react-router-dom"
export default function SignUp({setSession}) {
    const history = useHistory()
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })
    const handleChange = (e) => {
        setFormData(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSession(prev => {
            return {
                ...prev,
                requesting: true
            }
        })
        const params = {
            user: {
                ...formData
            }
        }
        fetch("/api/signup", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        })
        .then(resp => resp.json())
        .then(userData => {
          
        })
        .catch(error => alert("Logged In"))
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

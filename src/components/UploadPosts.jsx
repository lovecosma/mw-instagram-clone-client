import React, { useState } from 'react'

export default function UploadPosts() {

    const [formData, setFormData] = useState({
        file: null,
        caption: ""
    })

    const handleChange = (e) => {
        setFormData((prevState) =>{
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }
    const handleFileChange = (e) => {
        setFormData((prevState) =>{
            return {
                ...prevState,
                [e.target.name]: e.target.files[0]
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const {file, caption} = formData
        let formDataObj = new FormData()

        formDataObj.append("file", file)
        formDataObj.append("caption", caption)
        

        fetch("http://localhost:3001/posts", {
            method: "POST",
            body: formDataObj
        })
        .then(resp => resp.json())
        .then(json => {
            debugger
        })
        .catch(error => console.error(error))
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input onChange={handleFileChange} name="file" type="file" ></input><br/>
                <input onChange={handleChange} value={formData.caption} name="caption" type="text" placeholder="caption"></input><br/>
                <button type="Submit" >Submit</button><br/>
            </form>

            <button onClick={() => console.log(formData)} ></button>
        </div>
    )
}

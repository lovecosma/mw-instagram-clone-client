import React, { useState } from 'react'

export default function UploadPosts() {

    const [formData, setFormData] = useState({
        file: {},
        caption: ""
    })

    const handleFileChange = (e) => {
        setFormData((prevState) =>{
            return {
                ...prevState,
                [e.target.name]: e.target.files[0]
            }
        })
    }

    return (
        <div>
            <form>
                <input onChange={handleFileChange} name="file" type="file" ></input><br/>
                <input name="caption" type="text" placeholder="caption"></input><br/>
                <button type="Submit" >Submit</button><br/>
            </form>
        </div>
    )
}

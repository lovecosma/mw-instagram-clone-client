import React, {useState, useEffect} from 'react'

export default function Posts() {

    const [posts, setPosts] = useState([])

    useEffect(()  => {
        fetch("/api/posts")
        .then(resp => resp.json())
        .then(postsData => {
            console.log(postsData[postsData.length - 1])
            setPosts(postsData)
        })
        .catch(error => console.log("error"))
    }, [])

    return (
        <div>
            <h1>Posts page</h1>
            {!!posts[0] ?  posts.map(post => <img width="300px" height="300px" src={post.photo_url} />) : <h3>Loading</h3>}
            <br/>
        </div>
    )
}

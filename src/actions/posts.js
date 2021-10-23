import {useState} from "react"


export default function PostsState(){
     const [postsData, setPostsData] = useState({
        posts: [],
        requesting: true,
    })
     const fetchPosts = () => {
        return true
    }

    return {
        postsData,
        setPostsData,
        fetchPosts 
    }

}
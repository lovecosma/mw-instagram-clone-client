BASE_URL="http://localhost:3001"

export const fetchPosts = (dispatch) => {

    dispatch({type: "REQUESTING_POSTS"})
    fetch(BASE_URL + "/posts")
    .then(resp => resp.json())
    .then(postsData => {
        dispatch({type: "ADDING_POSTS", posts: [...postsData]})
    })
}
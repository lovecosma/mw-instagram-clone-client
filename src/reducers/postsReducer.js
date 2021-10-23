const postsReducer = (state = {posts: [], requesting: true}, action) => {
    switch(action.type){
        case "REQUESTING_POSTS":
            return {
                ...state,
                requesting: true
            }
        case "ADD_POSTS":
            return {
                ...state,
                post: [...action.posts],
                requesting: false
            }
        default: 
            return state
    }
}   

export default postsReducer
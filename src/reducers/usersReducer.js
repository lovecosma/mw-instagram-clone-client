const usersReducer = (state = {user: {}, loggedIn: false, requesting: true}, action) => {
    switch(action.type){
        case "REQUESTING_USER":
            return {
                ...state,
                requesting: true
            }

        case "ADDING_USER":
            return {
                ...state,
                user: {...action.user},
                loggedIn: true,
                requesting: false
            }
        default:
            return state
    }
}

export default usersReducer
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
        case "REQUESTING_SIGN_UP":
            return {
                ...state,
                requesting: true
            }
        case "SIGN_UP":
            return {
                ...state,
                requesting: false,
                loggedIn: true,
                user: {...action.user}
            }
        default:
            return state
    }
}

export default usersReducer
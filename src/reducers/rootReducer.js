import { combineReducers } from "redux"
import postsReducer from "./postsReducer"
import usersReducer from "./usersReducer"

const rootReducer = () => {
    return combineReducers({
        postsReducer,
        usersReducer
    })
}

export default rootReducer
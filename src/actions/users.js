const BASE_URL="http://localhost:3001"

export const fetchUser = (dispatch, user_id) => {
    dispatch({type: "REQUESTING_USER"})
    fetch(BASE_URL + `/users/${user_id}`)
    .then(resp => resp.json())
    .then(userData => {
        dispatch({type: "ADDING_USER", user: {...userData}})
    })
}

export const signup = (dispatch, userInfo) => {
    dispatch({type: "REQUESTING_SIGN_UP"})
    const params = {
        user: {
            ...userInfo
        }
    }
     fetch(BASE_URL + `/users`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(params)
    })
    .then(resp => resp.json())
    .then(userData => {
        dispatch({type: "SIGN_UP", user: {...userData}})
    })
}
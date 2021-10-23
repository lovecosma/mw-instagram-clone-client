const BASE_URL="http://localhost:3001"

export const fetchUser = (dispatch, user_id) => {
    dispatch({type: "REQUESTING_USER"})
    fetch(BASE_URL + `/users/${user_id}`)
    .then(resp => resp.json())
    .then(userData => {
        dispatch({type: "ADDING_USER", user: {...userData}})
    })
}

export async function login(dispatch, userInfo){
    dispatch({type: "REQUESTING_LOGIN"})
    const params = {
        session: {
            ...userInfo
        }
    }
    let resp
    try{
        resp = await fetch(BASE_URL + `/login`, {
           method: "POST",
           headers: {
               "Accept": "application/json",
               "Content-Type": "application/json"
           },
           body: JSON.stringify(params)
       })
    } catch(e){
        return Promise.reject(e)
    }
    let userData = await resp.json()
    dispatch({type: "LOGIN", user: {...userData}})
    return Promise.resolve("resolved")
}

export async function signup(dispatch, userInfo){
    dispatch({type: "REQUESTING_SIGN_UP"})
    const params = {
        user: {
            ...userInfo
        }
    }
    let resp
    try{
        resp = await fetch(BASE_URL + `/users`, {
           method: "POST",
           headers: {
               "Accept": "application/json",
               "Content-Type": "application/json"
           },
           body: JSON.stringify(params)
       })
    } catch(error){
        return Promise.reject(error)
    }
    let userData = await resp.json()
    dispatch({type: "SIGN_UP", user: {...userData}})
    return Promise.resolve("resolved")
}

export async function logout(dispatch){
    dispatch({type: "REQUESTING_LOGOUT"})
    let resp = fetch(BASE_URL + '/logout', {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    })
    dispatch({type: "LOGOUT"})
    return Promise.resolve("resolved")
}
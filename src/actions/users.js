BASE_URL="http://localhost:3001"

export const fetchUser = (dispatch, user_id) => {
    dispatch({type: "REQUESTING_USER"})
    fetch(BASE_URL + `/users/${user_id}`)
    .then(resp => resp.json())
    .then(userData => {
        dispatch({type: "ADDING_USER", user: {...userData}})
    })
}
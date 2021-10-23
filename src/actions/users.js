import {useState} from "react"

    export default function UsersState(){
        const [usersData, setUsersData] = useState({
            user: {},
            requesting: true,
            loggedIn: false
        })
         const fetchUser = () => {
            return true
        }

        return {
            usersData,
            setUsersData,
            fetchUser
        }
    
    }
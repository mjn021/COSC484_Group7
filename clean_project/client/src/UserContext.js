import {createContext, useState, useEffect} from 'react'
const UserContext = createContext({ isLoggedIn: false, login: () => {}, logout: () => {}})

export const UserProvider = ({children}) => {
    const [user, setUser] = useState()
    const [curUser, setCurUser] = useState()
    const [userEdit,setUserEdit] = useState({
        info: {},
        edit: false
    })
    const auth = 
    useEffect(()=> {
        //fetchUsers()
    },[])
    /*const fetchUsers = async () => {
        const response = await fetch(`/users?_sort=id&_order=desc`)
        const data = await response.json()
        setUser(data)
    }*/

    const registerUser = async (newUser) => {
        const response = await fetch('/users/', {
            method: 'POST',
            headers: {
            'Content-Type' : 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        const data = await response.json()
        console.log(data)
        setUser(data)
    }
    const deleteUser = async(user) => {
        const response = await fetch('')
    }
    const loginUser = async(userInfo) => {
        const response = await fetch('/users/login', {
            method: 'POST',
            headers: {
            'Content-Type' : 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
        const data = await response.json()

        console.log(data)
        setCurUser(data)
    }
    //

    const logout = () => {

    }
    const editData = async(info) => {
        const response = await fetch('/users/edit', {
            method: 'PUT',
            headers: {
            'Content-Type' : 'application/json'
            },
            body: JSON.stringify(info)
        })
        const data = await response.json()
        
    }

    /*const editUserInfo = async(username, userInfo) => {
        const response = await fetch('/users/editdata', {
            method: 'POST',
            headers: {
            'Content-Type' : 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        const data = await response.json()
        console.log(data)
        setUser(data)
    }*/
    
    //how to get from username
  

    return (
        <UserContext.Provider value = {{
            registerUser,
            loginUser,
            logout,
            curUser,
            user,
            editData
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext
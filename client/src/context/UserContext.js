import {createContext, useState, useEffect} from 'react'

//the Provider allows access to variables inside provider... that's why your shit ain't work
const UserContext = createContext()

export const UserProvider = ({children}) => {
    
    const [user, setUser] = useState()
    const [targetUser, setTargetUser] = useState()
    const [curUser, setCurUser] = useState(null)
    useEffect(()=> {
        //fetchUsers()
    },[])


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

        setCurUser(data)
    }

    //link to api
    /*const deleteUser = async(user) => {
        const response = await fetch('')
    }*/

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
        console.log(curUser.token)
        UserContext.login(curUser.username, curUser.token)
    }
    //

    const logout = () => {
    }
    //info is {username: ..., bio: ...}
    const editData = async(info) => {
        console.log('logged edit data in user context')
        const response = await fetch('/users/me', {
            method: 'PUT',
            headers: {
            'Content-Type' : 'application/json'
            },
            body: JSON.stringify(info)
        })
        console.log('logged after ')
        const data = await response.json()

        setCurUser(data)
        
        
        
    }
    //info is {username: ..., post: ...}
    const addPost = async(info) => {
        const response = await fetch('/users/me/posts', {
            method: 'POST',
            headers: {
            'Content-Type' : 'application/json'
            },
            body: JSON.stringify(info)
        })
        const data = await response.json()

        setCurUser(data)
    }

    /*const getTargetUser = async(username) => {
        const response = await fetch('/users/user', {
            method: 'GET',
            headers: {
            'Content-Type' : 'application/json'
            },
            body: JSON.stringify(username)
        })
        const data = await response.json()
        setTargetUser(data)
    }*/

    /*const editUserInfo = async(userInfo) => {
        const response = await fetch('/user/', {
            method: 'PUT',
            headers: {
            'Content-Type' : 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
        const data = await response.json()
        console.log(data)
        setUser(data)*
    }*/
    
    //how to get from username
  

    return (
        <UserContext.Provider value = {{
            registerUser,
            loginUser,
            //logout,
            user,
            curUser,
            editData,
            addPost,
            //getTargetUser
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext
import { useContext} from 'react'
import {Link, useNavigate } from 'react-router-dom'
import UserContext from '../context/UserContext'


function Header() {

    //const {isLoggedIn, logout} = useContext(UserContext)
    const {curUser} = useContext(UserContext)
    //const nav = useNavigate()

    const {loginBool} = useContext(UserContext)
    const headerStyles = {
        backgroundColor: 'gold',
        color:'black'}
    const onC = () => {
        console.log(loginBool)
    }
    /*const logOut = (e) => {
        logout()
        nav('/')
    }

    const login =(e) => {
        nav('/')
    }*/

    return (
        <header style = {headerStyles}>
            <div className = "container">
                {UserContext.token ? <p>{UserContext.token}</p> : <p>No token</p>}
                {curUser ? <p> Welcome {curUser.username}</p> : <p>No current user</p>}
                <Link to= '/'>
                    <h2>Tu Tunes</h2>
                    <button onClick = {onC}>Click</button>
                </Link>
                <Link to= '/main'>
                    <h2>Main</h2>
                    <button onClick = {onC}>Click</button>
                </Link>
                <Link to= '/profile'>
                    <h2>Profile</h2>
                    <button onClick = {onC}>Click</button>
                </Link>
                <Link to= '/signup'>
                    <h2>Signup</h2>
                    <button onClick = {onC}>Click</button>
                </Link>
                <button onClick = {UserContext.logout}>Logout</button>
            </div>
        </header>
    )
}

export default Header
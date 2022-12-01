import { useContext} from 'react'
import {Link, useNavigate } from 'react-router-dom'
import UserContext from '../UserContext'

function Header() {

    //const {isLoggedIn, logout} = useContext(UserContext)
    //const {curUser} = useContext(UserContext)
    //const nav = useNavigate()

    const {loginBool, targetUser} = useContext(UserContext)

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
                <Link to= '/'>
                    <h2>Tu Tunes</h2>
                    <button onClick = {onC}>Click</button>
                </Link>
                <h1>{targetUser.name}</h1>
            </div>
        </header>
    )
}

export default Header
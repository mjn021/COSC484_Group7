import { useContext } from 'react'
import {Link, useNavigate } from 'react-router-dom'
import UserContext from '../UserContext'
import {curUser, logout, login} from '../UserContext'

function Header() {
    const auth = useContext(UserContext)
    //const {logout, login} = useContext(UserContext)
    const nav = useNavigate()
    const headerStyles = {
        backgroundColor: 'gold',
        color:'black'}
        
    const logOut = (e) => {
        
        nav('/login')
    }
    return (
        <header style = {headerStyles}>
            <div className = "container">
                <Link to= '/'>
                    <h2>Tu Tunes</h2>
                </Link>
                {auth.isLoggedIn && <button onClick = {auth.logout}>Logout</button>}
                {!auth.isLoggedIn && <button onClick = {auth.login}>Login</button>}
            </div>
        </header>
    )
}

export default Header
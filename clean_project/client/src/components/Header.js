import { useContext} from 'react'
import {Link, useNavigate } from 'react-router-dom'
import UserContext from '../context/UserContext'
import { AuthContext } from '../context/AuthContext'

function Header() {

    const {userId, token, logout,curUser} = useContext(AuthContext)
    const {loginBool} = useContext(UserContext)
    const headerStyles = {
        backgroundColor: 'gold',
        color:'black'}

    return (
        <header style = {headerStyles}>
            <div className = "container">
                <Link to= '/'>
                    <h2>Tu Tunes</h2>
                </Link> <br></br>
                {curUser && <h1>Welcome {curUser.username}!</h1>}
                <Link to = '/profile'>
                    Profile
                </Link>
                <p>       </p>
                <Link to='/friendslist'>
                    Following
                </Link>
                
                {token && <button onClick = {logout}>Logout</button>}
            </div>
        </header>
    )
}

export default Header
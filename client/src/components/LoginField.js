import {useState, useContext, useEffect} from 'react'
import {Link} from 'react-router-dom'
function LoginField(){

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const getUsername = (e) => {
        setUsername(e.target.value)
    }

    const getPassword = (e) => {
        setPassword(e.target.value)
    }
    return(
       <div className = "input">
            <h1>Login</h1>
            <form>
                <div className='input-group'>
                    <label>Username: </label><input onChange = {getUsername} name = 'uname' type = 'text'></input> <br></br>
                    <label>Password: </label><input onChange = {getPassword} name = 'pw1' type = 'password'></input><br></br>
                    <input type = 'submit'></input> <br></br>
                    <Link to='/signup'>Don't have an account? Sign up!</Link>
                </div>
            </form>
        </div>
    )
}
export default LoginField
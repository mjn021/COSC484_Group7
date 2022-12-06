import {useState, useContext, useEffect} from 'react'
import UserContext from '../../context/UserContext'
import {useNavigate} from 'react-router-dom'
//do the whole username shit
function SignupField(){

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [usernameErrMsg, setUsernameErrMsg] = useState('')
    const [bool, setBool] = useState(true)
    const{registerUser, isLoggedIn} = useContext(UserContext)
    const nav = useNavigate()
    const getUsername = (e) => {
        setUsername(e.target.value)
    }

    const getPassword = (e) => {
        setPassword(e.target.value)
    }

    const getPassword2 = (e) => {
        setPassword2(e.target.value)
    }
    const checkUsername = () => {
    
        if(username.length > 20 ) setUsernameErrMsg('Username must be under 20 characters')
    
        if(username.length < 6) setUsernameErrMsg('Username must be at least 6 characters')
    }
    const matchPasswords = () => {
        return (password === password2)
    }
    const userNameLength = () => {

    }

    const onS = (e) => {
        e.preventDefault()
            const newUser = {
                username,
                password
            }
            registerUser(newUser)
            nav('/')
    }
    
    return(
        <div className ="signUpBody">
            <h1 className="sign">Signup</h1>
            <form onSubmit = {onS}>
                <input onChange = {{}} name = 'uname' type = 'text' required placeholder="Enter Username" className="name"></input> <br></br>
                <input onChange = {{}} name = 'pw1' type = 'password' required placeholder="Enter Password" className="pass"></input><br></br>
                <input onChange = {{}} name = 'pw2' type = 'password' required placeholder="Re-Enter Password" className="pass2"></input><br></br>
                <input type = 'submit' value="Sign Up"></input> <br></br>
            </form>
            {isLoggedIn && <p>isLoggedIn</p>}
        </div>
    )
}
export default SignupField

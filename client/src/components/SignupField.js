import {useState, useContext, useEffect} from 'react'
import {Link} from 'react-router-dom'
import SignUpPage from '../pages/SignUpPage'

function SignupField(){

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [errorStatementUsername, setErrorStatementUsername] = useState('')
    const [errorStatementPass, setErrorStatementPass] = useState('')
    const [bool, setBool] = useState(true)

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
        if(username.length < 6){
            setErrorStatementUsername("Username must be at least 6 characters.")
            setBool(false)
        }
        if(username.length > 20){
            setErrorStatementUsername("Username must be under 20 characters")
            setBool(false)
        }
    }

    const checkPasswords = () =>{
        if(password !== password2){
            setBool(false)
            setErrorStatementPass("Passwords do not match")
        }
    }
    const onS = (e) => {
        e.preventDefault()
        if(password !== password2){
            setBool(false)
        }
    }
    return(
        <div>
            <h1>Signup</h1>
            <form onSubmit = {onS}>
                <label>Enter Username: </label><input onChange = {getUsername} name = 'uname' type = 'text'></input> <br></br>
                <label>Enter Password: </label><input onChange = {getPassword} name = 'pw1' type = 'password'></input><br></br>
                <label>Re-enter Password: </label><input onChange = {getPassword2} name = 'pw2' type = 'password'></input><br></br>
                {!bool && <div>{errorStatementUsername}</div> }
                <input type = 'submit'></input> <br></br>
            </form>
        </div>
    )
}
export default SignupField
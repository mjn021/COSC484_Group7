import React from 'react';
import './signForm.css'

const signinForm = () => {
    return(
        <form>
            <label>Username: </label><input name = 'uname' type = 'text'></input> <br></br>
            <label>Password: </label><input name = 'pw1' type = 'password'></input><br></br>
            <input type = 'submit'></input>
        </form>
    )
}

export default signinForm;
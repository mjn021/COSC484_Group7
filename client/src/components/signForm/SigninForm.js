import {useState} from 'react';
import React from 'react';
import './signForm.css'

const signinForm = () => {
    const validate = (e) => {

    }
    return(
      <div className = "login-div"> 
      <h1>Login</h1>
        <form>
            <label>Username: </label><input onChange = {validate} name = 'uname' type = 'text'></input> <br></br>
            <label>Password: </label><input name = 'pw1' type = 'password'></input><br></br>
            <input type = 'submit'></input>
        </form>
        </div>
    )
}

export default signinForm;
import React from 'react';
import './signForm.css';

const signupForm = () => {
    return (
        <form>
            <label>Enter a username: </label><input name = 'uname' type = 'text'></input> <br></br>
            <label>Enter a password: </label><input name = 'pw1' type = 'password'></input><br></br>
            <label>Confirm password: </label><input name = 'pw2' type = 'password'></input><br></br>
            <input type = 'submit'></input>
        </form>
    );
};

export default signupForm;
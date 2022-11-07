import React from "react";
import Header from "../components/Header";

const FirstPage = () => {
    const loginFunc = {}
    const signupFunc = {}
    return (
       <div className = 'first-page-div'>
            <Header />
            <h1>Welcome!</h1>
            <h2>Log in or Sign up:</h2>
            <button className = 'in-button' onClick = {loginFunc}>Log in</button> <br></br>
            <button className = 'in-button' onClick = {signupFunc}>Sign up</button>
       </div>
    );
};

export default FirstPage;
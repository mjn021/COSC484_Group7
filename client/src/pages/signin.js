import React from "react";
import SigninForm from "../components/signForm/SigninForm";
import Header from "../components/Header";

function signIn(){
    return(
        <div className='signin-div'>
            <Header />
            <SigninForm />
        </div>
    )
}
export default signIn;

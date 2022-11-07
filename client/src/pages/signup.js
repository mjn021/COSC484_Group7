import React from "react";
import Header from "../components/Header";
import SignupForm from "../components/signForm/SignupForm";

function SignUp(){
    return (
        <div className = "signup-div">
        <Header />
        <SignupForm />    
        </div>
        )
}
export default SignUp;
import React from "react";
import Header from "../components/Header";
import Info from "../components/User/Info";

function Profile(){
    return(
        <div className = 'profile-div'>
            <Header />
            <Info />
        </div>
    )
}
export default Profile;
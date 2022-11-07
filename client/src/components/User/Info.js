import React from 'react';
import {useState} from 'react';

function Info(){
    const[bio, setBio] = useState('This is a user bio. It needs a function to change the text.');
    //functions to change bio
    //function to change pfp
    var username = 'default';
    const editBio = (e) => {
        setBio(e.target.value)
    }
    return (
        <div className = 'user-info-div'>
            <h2>{username}</h2>
            <form onSubmit = {editBio}>
                <h3>Bio</h3>
                <p >{bio}</p>
                
                <button className = 'edit-bio' onClick = {editBio} >Edit Bio</button>
            </form>
        </div>
        
        
    )
}
export default Info;
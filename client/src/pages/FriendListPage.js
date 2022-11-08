import React from 'react';
import FriendCard from '../components/User/FriendCard';

function FriendList(props){
    FRIENDS = {}
    return(
        <div className = 'profile-div'>
            <Header />
            <FriendList items = {FRIENDS} />
        </div>
    )

}
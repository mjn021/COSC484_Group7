import React from 'react';
import FriendCard from './FriendCard';

function FriendsList(){
    if(props.friends.length === 0){
        return (
            <div className = 'no-friends'> 
                <h1>No friends :( </h1>
            </div>
        )
    }
    return (
        <ul className = 'friend-list'>
            {props.items.map(friend => (
                <FriendCard 
                image = {friend.image}
                name = {friend.name} /> ))}

        </ul>
    )
}
export default FriendsList;
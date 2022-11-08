import React from 'react';

function FriendCard(props){
    return(
        <li className = "friend-card">
            <div className = "friend-card__content">
                <div className = "friend-card__image">
                    <img src = {props.image} />
                </div>
                <div className = "friend-card__info">
                    <h2>{props.name}</h2>
                </div>
                
            </div>
        </li>
    )
}

export default FriendCard;
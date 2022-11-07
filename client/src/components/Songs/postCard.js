import React from 'react';

function PostCard({user}, {dt}, {msg},{rtg}) {
    var username = 'default-user';
    var date = '_/_/_';
    var message ='Default message';
    var rating = '10';
    return(
        <div className = 'post-card-div'>
            <h3>{user} \t {dt}</h3>
            <p>{rtg} \t {msg}</p>
            
        </div>
    )
}
export default PostCard;
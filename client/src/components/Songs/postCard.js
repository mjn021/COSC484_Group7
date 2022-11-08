import React from 'react';

function PostCard(props) {
    
    return(
    <li className = 'post-item'>
        <div className = 'post-content'>
            <h3>{props.user}  {props.dt}</h3>
            <p>{props.rtg} - {props.msg}</p>  
        </div>
    </li>
    )
}
export default PostCard;
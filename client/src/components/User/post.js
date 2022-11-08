import React from 'react';
import PostCard from '../Songs/postCard'

function Post(props){
    if(props.items.length === 0) {return (
        <div className = 'no-posts-div'>
            <h1> No recent posts. </h1>
        </div>
    )}
    return(
        <ul className = 'post-list'>
            {props.items.map(posts => (
                 <PostCard 
                 user = {posts.user}
                 dt = {posts.dt}
                 msg = {posts.msg}
                 rtg = {posts.rtg}
                 />
            ))}
        </ul>
        
    );
}
export default Post;
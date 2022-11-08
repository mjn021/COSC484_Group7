import React from "react";
import Header from "../components/Header";
import Info from "../components/User/Info";
import FriendList from '../components/User/FriendsList';
import PostCard from "../components/Songs/postCard";
import Post from '../components/User/post';

function Profile(){
    const POSTS = [
        {user: 'Mike', dt: '11/1/22', msg: 'First post!', rtg: '10'},
        {user: 'Mike', dt: '11/2/22', msg: 'Second post!', rtg: '3'},
        {user: 'Mike', dt: '11/3/22', msg: 'Third post!', rtg: '4'},
        {user: 'Mike', dt: '11/4/22', msg: 'Fourth post!', rtg: '7'},]
    return(
        <div className = 'profile-div'>
            <Header />
            <Info />
            <Post items = {POSTS} />
        </div>
    )
}
export default Profile;
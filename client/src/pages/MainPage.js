import {Link} from 'react-router-dom'
import PostForm from '../components/PostForm'
import PostList from '../components/PostList'
function MainPage(){
    return(
        <>
        <div>
            Main Page
            <Link to= '/profile'>
                Profile 
            </Link>
                   
            <Link to= '/signup'>
                Signup 
            </Link>
            <Link to= '/login'>
                Login
            </Link>
            <Link to='/friendslist'>
                FriendList
            </Link>
            </div>
            <div>
                <PostForm />
                <PostList />
            </div>
            </>
    )
}

export default MainPage
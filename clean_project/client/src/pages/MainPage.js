import { useContext, useEffect } from 'react'
import PostForm from '../components/Fields/PostForm'
import PostList from '../components/PostList'
import UserContext from '../context/UserContext'

function MainPage(){
    //add in follower post list later
    const {curUser} = useContext(UserContext)
    //if postlist need useeffect to show as posting

    return(
        <>
            <div>
                <PostForm />
            </div>
            </>
    )
}

export default MainPage
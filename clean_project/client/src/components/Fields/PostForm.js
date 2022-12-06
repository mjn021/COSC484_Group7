import { useState, useContext, useEffect } from "react"
import Card from "../shared/Card"
import UserContext from "../../context/UserContext"
import {v4 as uuid} from 'uuid'
import { AuthContext } from "../../context/AuthContext"

function PostForm(){
    const[song,setSong] = useState("")
    const id = uuid();
    const[review,setReview] = useState("")

    //need to update
    const {addPost} = useContext(UserContext)
    const {curUser} = useContext(AuthContext)
    const auth = useContext(AuthContext)
    const handleSongText = (e) => {
        setSong(e.target.value)
    }
    const handleReviewText = (e) => {
        setReview(e.target.value)
    }

    const addPostClick = () => {
        console.log('add post clicked')
        const info = {
            username: curUser.username,
            post: {
                post_id: id,
                songname: song,
                review: review
            }
        }
        console.log(info)
        addPost(info)
    }
    return(
        <Card>
        <form onSubmit = {{}}>
            <h2>Create a post</h2>
            <input onChange = {handleSongText} type = 'text' placeholder = 'Song Name' value = {song} /><br />
            <input onChange = {handleReviewText} type = 'text' placeholder = 'Song Review' value = {review} /> <br />
            <button onClick = {addPostClick}>Post</button>
        </form>
        </Card>
    )
}
export default PostForm
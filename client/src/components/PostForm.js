import { useState, useContext } from "react"
import Card from "./shared/Card"
import UserContext from "../context/UserContext"

function PostForm(){

    const[song,setSong] = useState("")

    const[review,setReview] = useState("")

    const[disabled,setDisabled] = useState(true)

    const {curUser, addPost} = useContext(UserContext)

    const handleSongText = (e) => {
        //if(song === ''){
        //  disable button
        //}
        setSong(e.target.value)
    }
    const handleReviewText = (e) => {
        //if(song === ''){
        //  disable button
        //}
        setReview(e.target.value)
    }

    const addPostClick = () => {
        console.log(curUser.username + " .   " + song)
        const info = {
            username: curUser.username,
            post: song /*{
                songname: song,
                review: review
            }*/
        }
        addPost(info)
    }
    return(
        <Card>
        <form onSubmit = {{}}>
            <h2>Create a post</h2>
            {curUser ? <h1>user: {curUser.username}</h1> : <h1>No user</h1>}
            <input onChange = {handleSongText} type = 'text' placeholder = 'Song Name' value = {song} /><br />
            <input onChange = {handleReviewText} type = 'text' placeholder = 'Song Review' value = {review} /> <br />
            <button onClick = {addPostClick}>Post</button>
        </form>
        </Card>
    )
}
export default PostForm
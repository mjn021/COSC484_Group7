import { useState } from "react"
import Card from "./shared/Card"
function PostForm(){

    const[song,setSong] = useState("")
    const[review,setReview] = useState("")
    const[disabled,setDisabled] = useState(true)

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
    return(
        <Card>
        <form onSubmit = {{}}>
            <h2>Create a post</h2>
            <input onChange = {handleSongText} type = 'text' placeholder = 'Song Name' value = {song} /><br />
            <input onChange = {handleReviewText} type = 'text' placeholder = 'Song Review' value = {review} /> <br />
            <button type='submit'>Post</button>
        </form>
        </Card>
    )
}
export default PostForm
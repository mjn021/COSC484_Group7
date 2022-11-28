import {FaEdit} from 'react-icons/fa'
import {useState} from 'react'
function Top3Songs(){
    //get rid of this
    const [editBool,setEditbool] = useState(false)
    var songs = [
        {
            "name":"Song 1",
            "artist":"Band 1"
        },
        {
            "name":"Song 2",
            "artist":"Band 2"
        },
        {
            "name":"Song 3",
            "artist":"Band 3"
        }
    ]
    //Add edit functionaliy
    return(
        <div>
            <h2>Top 3 Songs</h2>
            <ol>
                {songs.map((song,idx) => (
                    <li>{idx+1}. {song.name} by {song.artist} </li>
                ))}
            </ol>
            <button onClick = {() => {}} className = 'edit'>
                <FaEdit color = 'black' />
            </button>
        </div>
    )
}
export default Top3Songs
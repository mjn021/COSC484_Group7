import {FaEdit} from 'react-icons/fa'
import {useState, useContext} from 'react'
import UserContext from '../../UserContext'
import {editData, curUser} from '../../UserContext' 
function Top3Songs(){
    //Do later and get rid of songs
    //How to set edit the songs?
    const [editBool,setEditbool] = useState(false)
    const [temp1,setTemp1] = useState("")
    const [temp2,setTemp2] = useState("")
    const [temp3,setTemp3] = useState("")
    const {curUser,editData} = useContext(UserContext)
    //var songs = curUser.topsongs
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
            <h3>Top 3 Songs {
                    <button onClick = {() => {}} className = 'edit'>
                        <FaEdit color = 'black' />
                    </button>
                }
            </h3>
            <ol>
                {curUser.topsongs.map((song) => (
                    <li>{song}</li>
                ))}
            </ol>
            
        </div>
    )
}
export default Top3Songs
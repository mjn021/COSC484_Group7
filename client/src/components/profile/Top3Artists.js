import {FaEdit} from 'react-icons/fa'
import {useState} from 'react'

function Top3Artists(){
    //TODO clean this shit up
    //edit button 
    const [editBool,setEditbool] = useState(false)

    var artist1= "Fav Artist" 
    var artist2= "Second Fav Artist"
    var artist3= "Third Fav Artist"
    return(
        <div>
            <h2>Top 3 Artists</h2>
            <ol>
                <li>1. {artist1}</li>
                <li>2. {artist2}</li>
                <li>3. {artist3}</li>
            </ol>
            <button onClick = {() => {}} className = 'edit'>
                <FaEdit color = 'black' />
            </button>
        </div>
    )
}
export default Top3Artists
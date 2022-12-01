import {FaEdit} from 'react-icons/fa'
import {useState, useContext} from 'react'
import UserContext from '../../UserContext'
import {curUser, editData} from '../../UserContext'
function Top3Artists(){
    //TODO clean this shit up
    //edit button 
    //no state
    const [editBool,setEditBool] = useState(false)
    const {curUser, editData} = useContext(UserContext)
    const [a1, setA1] = useState("")
    const [a2, setA2] = useState("")
    const [a3, setA3] = useState("")
    const [art1, setArt1] = useState(curUser.topartists[0])
    const [art2, setArt2] = useState(curUser.topartists[1])
    const [art3, setArt3] = useState(curUser.topartists[2])

    
    

    const changeA1 = (e) =>{
        setA1(e.target.value)
    }
    const changeA2 = (e) =>{
        setA2(e.target.value)
    }
    const changeA3 = (e) =>{
        setA3(e.target.value)
    }

    const changeArtists = () => {
        if(a1 != ""){ setArt1(a1)}
        if(a2 != ""){ setArt2(a2)}
        if(a3 != ""){ setArt3(a3)}
        setEditBool(!editBool)
        var changes = {
            'username':curUser.username,
            'topartists': [`${art1}`, `${art2}`, `${art3}`]
            
        }
        editData(changes)

    }
    const onEdit = () => {
        setEditBool(!editBool)
    }


    
    return(
        <div>
            <h3>Top 3 Artists {
                <button onClick = {onEdit} className = 'edit'>
                <FaEdit color = 'black' />
            </button>
            } </h3>
            <ol>

                {!editBool && 
                <ol>
                {curUser.topartists.map((song) => (
                    <li>{song}</li>
                ))}
            </ol>
                }
                {editBool && 
                <>
                <li>1. {<input onChange = {changeA1}  type = 'text' placeholder={art1}></input>}</li>
                <li>2. {<input onChange = {changeA2}  type = 'text'placeholder={art2}></input>}</li>
                <li>3. {<input onChange = {changeA3}  type = 'text'placeholder={art3}></input>}</li>
                </>}
            </ol>
            {editBool && 
            <>
                <button onClick = {changeArtists} >Change</button>
                <button onClick = {onEdit}>Cancel</button>
            </>}

            
        </div>
    )
}
export default Top3Artists
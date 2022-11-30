import { useContext } from "react"
import UserContext from "../UserContext"
import {curUser} from "../UserContext"

function FuckingAroundPage(){
    
   const {curUser} = useContext(UserContext)

    return(
        <>
        {curUser && 
        <div>
            <h1>Hello</h1>
            <p>{curUser.username}</p>
        </div>}
        {!curUser && <p>Nobody logged in</p>}
        </>
    )}

export default FuckingAroundPage
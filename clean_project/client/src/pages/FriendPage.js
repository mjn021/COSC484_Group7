import { useContext } from "react";
import FriendInfo from "../components/friends/FriendInfo";
import FriendTop3 from "../components/friends/FriendTop3";
import UserContext from "../UserContext";
function FriendPage(){
    const {targetUser} = useContext(UserContext)
    return(
        <div>
            
            <FriendInfo user = {user}/>
            <FriendPage user = {user}/>
        </div>
    )

}
export default FriendPage

import UserInfo from "../components/profile/UserInfo"
import Top3Artists from "../components/profile/Top3Artists"
import Top3Songs from "../components/profile/Top3Songs"
import FriendCard from "../components/friends/FriendCard"
function ProfilePage(){
    return(
        <div>
            <h1>Profile Page</h1>
            <UserInfo />
            <Top3Artists />
            <Top3Songs />
        </div>
    )
}
export default ProfilePage
import {FaEdit} from 'react-icons/fa'
function UserInfo(){

    var url1 = "https://st3.depositphotos.com/7486768/17806/v/600/depositphotos_178065822-stock-illustration-profile-anonymous-face-icon-gray.jpg?forcejpeg=true"
    var name = "Default Name"
    var bio = "This is the bio. I do not feel like adding anything in here right now."
    return(
        <div>
            <h2>{name}</h2>
            <img src = {url1} alt = "me" height = {200} width = {200}/>
            <button onClick = {() => {}} className = 'edit'>
                <FaEdit color = 'black' />
            </button>
            <p>{bio}</p>
        </div>
    )
}
export default UserInfo
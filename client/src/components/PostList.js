import Post from "./Post"
function PostList(){
   var posts = [1,2,3]
   var songs = [
        {"songname": "Song 1",
        "artist" : "Artist 1"},
        {"songname": "Song 2",
        "artist" : "Artist 2"},
        {"songname": "Song 3",
        "artist" : "Artist 3"}
    ]
    var user= {"username" : "mike_a",
                "url" : "https://st3.depositphotos.com/7486768/17806/v/600/depositphotos_178065822-stock-illustration-profile-anonymous-face-icon-gray.jpg?forcejpeg=true"}

    return <div className = 'post-feed'>
            {songs.map((song) => (
                <Post song={song} user={user} />
        ))}
        </div>
    
}
export default PostList
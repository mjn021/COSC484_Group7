const express = require('express')
const {registerUser, loginUser, getMe, getUsers,editInfo, deleteUser, getPosts, getUser, addPost} = require('../controllers/userController')
const router = express.Router()
const {protect} = require('../middleware/authMiddleware')

//if user doesn't exist
//adds user to database
//input: {username, password}
router.post('/', registerUser)

//router.use(protect)
//if user exists
//sends a user instance as response
//input {username, passeword}
router.post('/login', loginUser)

//
router.get('/me', protect, getMe)

//gets posts from a specified user
//input: {username}
router.get('/userposts', getPosts)

//adds post to list of posts from specified user
//input: {username, post}
router.post('/userposts', addPost)

//returns a specified user
//input: {username}
router.get('/user', getUser)

//returns all users
//no input
router.get('/userlist', getUsers)

//edits info of a specified user
//input: {username, info (bio: , etc)}
router.put('/user', editInfo)

//delete user
//input: {username}
router.delete('/user', deleteUser)

//follow a user

router.put("/:id/follow", async (req,res)=> {
    if(req.body.getUser !== req.params.id){
        try{
            const user = await getUser.findById(req.params.id);
            const currentUser = await getUser.findById(req.body.userId);
            if(!user.followers.includes(req.body.userId)){
                await user.updateOne({$push:{followers:req.body.userId}});
                await currentUser.updateOne({$push:{following:req.params.id}});
                res.status(200).json("User Has Been Followed!");

            }else{
                res.status(403).json("You Already Follow This User");
            }

        }catch(err){
            res.status(500).json(err)
        }
        
    }else{
        res.status(403).json("Cant Follow Yourself")
    }
});

//unfollow a user



router.put("/:id/unfollow", async (req,res)=> {
    if(req.body.getUser !== req.params.id){
        try{
            const user = await getUser.findById(req.params.id);
            const currentUser = await getUser.findById(req.body.userId);
            if(user.followers.includes(req.body.userId)){
                await user.updateOne({$pull:{followers:req.body.userId}});
                await currentUser.updateOne({$push:{following:req.params.id}});
                res.status(200).json("User Has Been Unfollowed!");

            }else{
                res.status(403).json("You don't Follow This User");
            }

        }catch(err){
            res.status(500).json(err)
        }
        
    }else{
        
        res.status(403).json("Cant Unfollow Yourself")
    }
});

module.exports = router
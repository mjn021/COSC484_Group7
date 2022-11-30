const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')



const JWT_SECRET = 'shhh'
//register new user
//api/users
const registerUser = asyncHandler(async(req,res) => {
    const {username,password} = req.body
    if(!username || !password){
        res.status(400)
        throw new Error('Include all fields')
    }
    console.log(req.body)

    const usernameCheck = await User.findOne({username})

    if(usernameCheck) {
        res.status(400)
        throw new Error('Username is taken')
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPass = await bcrypt.hash(password,salt)

    const user = await User.create({
        username,
        password: hashedPass
    })
    //???
    if(user){
        res.status(201).json({
            _id: user._id,
            username: user.username,
            password: user.password,
            token: getToken(user._id)
        })
        console.log(user.username)
        }
        else{
            res.status(400)
            throw new Error('Invalid user data')
        }
    }
)
//current user
const getMe = asyncHandler(async(req,res) => {
    res.status(200).json(req.user)
    const userInfo = {
        id: req.user._id,
        username: req.user.username,
        topsongs: req.user.topsongs,
        topartists: req.user.topartists,
        friends: req.user.friends
    }
})
const editInfo = asyncHandler(async(req,res) => {
    const username = req.body.username
    User.findOneAndUpdate({username}, req.body, (err,res) => {
        if(err) throw err
        console.log(req.body)
        
    })
    const user = await User.findOne({username})
    res.status(200).json({user})
    
    
})

const getUser = asyncHandler(async(req,res) => {
    const {username} = req.body
    console.log({username})
    const user = await User.findOne({username})
    res.status(200).json(user)
})

// fix :(
const deleteUser = asyncHandler(async(req,res) => {
    const id = req.body
    User.findByIdAndDelete({_id: id}, (err, res) => {
        if(err) throw err
    })
    res.status(200).json({message: 'okay'})

})

const getPosts = asyncHandler(async(req,res) => {
    const {username} = req.body
    console.log({username})
    const user = await User.findOne({username})
    //console.log(posts)
    res.status(200).json(user.posts)
})
//api/users/userlist
//not needed for anything
const getUsers = asyncHandler(async(req,res) => {
    const users = await User.find()
    res.status(200).json(users)
})

///api/users/login
const loginUser = asyncHandler(async(req,res) => {
    const {username, password} = req.body

    const user = await User.findOne({username})
    
    //if user exists
    if(user){
        const pass = await bcrypt.compare(password, user.password)
        if(pass){
            res.status(200).json({
                message: 'true',
                token: getToken(user._id),
                username: user.username,
                bio: user.bio,
                topartists: user.topartists,
                topsongs: user.topsongs
            })
        }
        //invalid password
        else{
            res.status(401)
            throw new Error('Invalid password')
        }
        
    }
    else{
        throw new Error('Username not found ')
    }
    res.send('Login Route')
})

const getToken = (id) =>{
    return jwt.sign({id},JWT_SECRET, {
        expiresIn: '7d'
    })
}


module.exports = {
    registerUser,
    loginUser,
    getMe,
    editInfo,
    getUsers,
    deleteUser,
    getPosts,
    getUser
}
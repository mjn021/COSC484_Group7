const express = require('express')
const {registerUser,loginUser,getMe, getUsers,editInfo, deleteUser, getPosts, getUser} = require('../controllers/userController')
const router = express.Router()
const {protect} = require('../middleware/authMiddleware')


router.post('/', registerUser)

router.post('/login', loginUser)

router.get('/me', protect, getMe)

router.get('/userposts', getPosts)

router.get('/user', getUser)

router.get('/userlist', getUsers)

router.put('/edit', editInfo)

router.delete('/delete', deleteUser)
module.exports = router
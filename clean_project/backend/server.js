const path = require('path')
const express = require('express')
const connectDB = require('./config/db')
const e = require('express')
const dotenv = require('dotenv').config()
//const {errorHandler} = require('./middleware/errorMiddleware')
const PORT = 5001 || 8000 

const app = express()

connectDB()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.get('/', (req,res) => {
    //res.status(200).send({message: 'Welcome to port 5001'})
})



app.use('/api/users', require('./routes/userRoutes'))

if(process.env.NODE_ENV ==='production'){
    app.use(express.static(path.join(__dirname,'../frontend/build')))
    app.get('*', (req,res)=> res.sendFile(__dirname,'../','frontend','build','index.html'))
}


app.listen(PORT, () => console.log(`Server started on ${PORT}`))

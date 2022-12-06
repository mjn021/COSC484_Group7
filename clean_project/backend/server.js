const path = require('path')
const express = require('express')
const connectDB = require('./config/db')
const e = require('express')
const dotenv = require('dotenv').config()
const PORT = (process.env.PORT || 8000)

const app = express()

connectDB()

app.use(express.json())
app.use(express.urlencoded({extended: false}))




app.use('/api/users', require('./routes/userRoutes'))

if(process.env.NODE_ENV ==='production'){
    console.log('we in the if bitch')
    app.use(express.static(path.join(__dirname,'../client/build')))
    app.get('*', (_,res)=> res.sendFile(path.join(__dirname,'../client/build/index.html')))
    console.log('this shit has been started I believe')
} 
else{
    app.get('/', (_,res) => {
        console.log('we in the else bitch')
        res.status(200).send({message: `Welcome to ${PORT}`})
    })
}

app.listen(PORT, () => console.log(`Server started on ${PORT}`))

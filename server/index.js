

import express from 'express'
import mongoose from 'mongoose'
import userRoutes from "./routes/user.js"
// const dotenv=require('dotenv')
const app=express()

app.get('/',(req,res)=>{
    res.send('hello')
})
// dotenv.config()

app.use('/api/users',userRoutes)

const connect=()=>{
    mongoose.connect('mongodb://localhost:27017/twitter').then(()=>{
        console.log('connected')
    }).catch(err=>console.error(err))
}
app.listen(8000,(req,res)=>{
    connect()
    console.log('server is running on 8000')
})


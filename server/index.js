const token = require('./utils/generateToken')
const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const {notFound,errorHandler} = require("./middleware/errorMiddleware")
const {initdb} = require('./config/db')
const {router} = require("./routes/userRoutes")
const {issuerouter} = require("./routes/issueRoutes")
const app = express()

app.use(cors({credentials:true,origin:'http://localhost:3000'}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use('/users',router)
app.use('/issue',issuerouter)
app.use(notFound)
app.use(errorHandler)
if(process.env.NODE_ENV!=='production'){
    require('dotenv').config()
}
initdb()

module.exports = app

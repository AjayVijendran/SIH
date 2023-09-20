const mongoose = require('mongoose')
mongoose.set('strictQuery',false)
const initdb = async() =>{
    try{
        await mongoose.connect(process.env.conn)
    } catch(e){
        console.log(e.message)
    }
}

module.exports = {initdb}
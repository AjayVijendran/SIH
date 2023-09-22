
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema  = new mongoose.Schema({
    email : {
        type: String,
        required : true
    },
    pwd : {
        type: String,
        required : true
    },
    name : String,
    address : {type: String, default : null},
    contact : {type : String,default : null},
    avatarURL : {type : String,default:null},
    userID : String
})

userSchema.pre('save',async function (next){
    if(!this.isModified('pwd')){
        next()
    }
    const salt = await bcrypt.genSalt(10)
    this.pwd  = await bcrypt.hash(this.pwd,salt)
})

userSchema.methods.matchPwd = async function(password){
    return await bcrypt.compare(password,this.pwd)
}
module.exports = mongoose.model('Users',userSchema)
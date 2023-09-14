//Gets user data based on id and returns json object or appropriate message
//A private function , should be logged_in
const asyncHandler = require('express-async-handler')
const User = require("../models/User")
const token = require("../utils/generateToken")
const getData = asyncHandler(async (req,res)=>{
    try{
        const {id} = req.body
        const user = await User.findById(id)
        if(!user){
            res.status(404).json({"error":"No data with the given id"})
        }
        else{
            res.json(user)
        }
    } catch(e){
        res.status(404).json({"error":"No data with the given id"})
    }
})
//Registering new user
//Public
const register = asyncHandler(async (req,res)=>{
    const email = req.body.email
    const userexists = await User.findOne({email})
    if(!userexists){
        try{
            const user = new User({
                name : req.body.name,
                email : req.body.email,
                pwd : req.body.pwd,
            })
            await user.save()
            token.gentoken(res,user._id)
            res.json(user)
        } catch(e){
            res.json({"Error": e.message}).status(400)
        }
    }
    else{
        res.status(400)
        res.json({"Error":"User already exists"})
    }
})
//Logout
//Private

const logout = asyncHandler( async (req,res)=>{
    res.cookie('jwt','',{
        httpOnly : true,
        expires : new Date(0)
    })
    res.json({message : "Logged out"})
})

const login = asyncHandler( async (req,res)=>{
    const {email,pwd} = req.body
    const userexists = await User.findOne({email})
    if(userexists && (await userexists.matchPwd(pwd))){
        token.gentoken(res,userexists._id)
        res.json(userexists)
    }
    else{
        res.status(400)
        res.json({"Error":"Invalid Emailid or Pwd"})
    }
})
const updateUser = asyncHandler(async(req,res)=>{
    const {_id,name} = req.body
    const userexists = await User.findById({_id})
    if(userexists){
        userexists.name = name || userexists.name
        const updatedUser = await userexists.save()
        res.status(200)
        res.json(updatedUser)
    }
    else{
        res.status(400)
        res.json({"Error":"Invalid Emailid or Pwd"})
    }
})
module.exports = {
    getData,
    register,
    logout,
    login,
    updateUser
}
const jwt  = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const user = require("../models/User")
const protect = asyncHandler(async (req,res,next)=>{
    let token;
    token = req.cookies.jwt;
    const head = req.headers.vfkey
    if (token){
        try{
            const decoded = jwt.verify(token,process.env.JWT_SECRET);

            req.user = await user.findById(decoded.userID).select('-pwd');
            next();
        }catch(e){
            res.status(401).json({"Error":"Not authorised,Invalid token"})
        }
    }
    else if(head===process.env.vfapikey){
        next();
    }
    else{
        res.status(401).json({"Error":"Not authorised,No token,Please Login Again"})
    }
})
module.exports = {protect}
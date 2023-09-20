const jwt = require("jsonwebtoken")
const gentoken = (res,userID) =>{
    const token = jwt.sign({userID},process.env.JWT_SECRET,{
        expiresIn : '30d'
    })
    res.cookie('jwt',token,{
        httpOnly : true,
        secure : true,
        sameSite : 'none',
        maxAge : 30*24*60*60*1000
    })
}
module.exports =  {gentoken}
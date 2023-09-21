const jwt = require("jsonwebtoken")
const gentoken = (res,userID) =>{
    const token = jwt.sign({userID},process.env.JWT_SECRET,{
        expiresIn : '30m'
    })
    res.cookie('jwt',token,{
        httpOnly : true,
        secure : true,
        sameSite : 'none',
        maxAge : 30*60*1000
    })
}
module.exports =  {gentoken}
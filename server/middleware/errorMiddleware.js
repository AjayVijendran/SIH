const notFound = (req,res,next)=>{
    const error = new Error(`Not found ${req.originalURL}`)
    res.status(404)
    next(error)
}

const errorHandler = (err,req,res,next)=>{
    let status = res.statusCode ===200 ? 500 : res.statusCode
    let msg = err.message

    if (err.name==='CastError' && err.kind==='ObjectID'){
        status = 404;
        msg = "Resource Not Found";
    }
    res.status(status).json({
        msg
    })
}

module.exports = {notFound,errorHandler}
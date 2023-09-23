const asyncHandler = require('express-async-handler')
const Issue = require('../models/Issues')

const getData = asyncHandler( async(req,res)=>{
    const {vfkey} = req.headers
    if(vfkey===process.env.vfapikey){
        try{
            const {id} = req.headers
            const issue = await Issue.findById(id)
            if(!issue){
                res.status(404).json({"error":"No data with the given id"})
            }
            else{
                res.json(issue)
            }
        } catch(e){
            res.status(404).json({"error":"There is No data with the given id"})
        }
    }
    else{
        res.status(401).json({"error":"haha"})
    }
})

const regIssue = asyncHandler(async(req,res)=>{
    try{
        const issue = new Issue({
            userID : req.headers.userid,
            issue : req.headers.issue,
            status : req.headers.status
        })
        console.log(issue)
        await issue.save()
        console.log(issue)
        res.json(issue)
    } catch(e){
        res.status(400)
    }
})

module.exports = {
    getData,
    regIssue
}
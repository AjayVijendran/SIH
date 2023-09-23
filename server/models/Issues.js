const mongoose = require('mongoose')

const issueSchema = new mongoose.Schema({
    userID : {
        type: String,
        required : true
    },
    issue : {
        type: String,
        required : true
    },
    status : {
        type: String,
        required : true
    },
    issueID : String
})

module.exports = mongoose.model('Issues',issueSchema)
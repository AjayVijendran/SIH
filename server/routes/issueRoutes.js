const {getData,regIssue} = require("../controllers/issueController")
const express = require('express')

const issuerouter = express.Router()

issuerouter.post('/register',regIssue)
issuerouter.get('/issues',getData)

module.exports = {issuerouter}
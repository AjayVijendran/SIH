const { getData, register, logout, login, updateUser, isauth } = require('../controllers/userController')
const express = require('express')
const {protect} = require("../middleware/authMiddleware")
const router = express.Router()

router.route('/profile').get(protect,getData).put(protect,updateUser)
router.post('/',register)
router.post('/logout',logout)
router.post('/auth',login)
router.get('/isauth',isauth)
module.exports = {router}

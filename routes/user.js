const express = require('express')

const router = express.Router()

const userController = require('../controllers/user')


router.post('/post',userController.postData)


module.exports = router
import express from 'express'
const router = express.Router()
import userControler from '../controller/userController'

// const userControler  = require("../controller/userController");

router.get('/', userControler.getAllUsers)

module.exports = router

import express from 'express'
import {getAllUsers} from '../controller/userController.js'
export const router = express.Router()

// const userControler  = require("../controller/userController");

router.get('/', getAllUsers)

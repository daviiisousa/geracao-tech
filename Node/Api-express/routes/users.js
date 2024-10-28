import express from 'express'
import {createUser, getAllUsers, getUserById} from '../controller/userController.js'
export const router = express.Router()

router.get('/', getAllUsers)
router.get('/:id', getUserById)
router.post('/', createUser)

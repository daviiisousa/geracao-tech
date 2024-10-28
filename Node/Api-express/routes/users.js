import express from 'express'
import {createUser, deleteUser, getAllUsers, getUserById, updateUser} from '../controller/userController.js'
export const router = express.Router()

router.get('/', getAllUsers)
router.get('/:id', getUserById)
router.post('/', createUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
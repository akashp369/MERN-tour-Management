import express from 'express'
import { deleteUser, getAllUser, getSingleUser, updateUser } from '../controllers/userController.js'
const router =express.Router();

import { verifyTokent } from '../utils/verifyToken.js';



// update User
router.put('/:id',verifyTokent, updateUser)

// delete User
router.delete('/:id',verifyTokent, deleteUser)

// get single User
router.get('/:id',verifyTokent, getSingleUser)

// get all User
router.get('/',verifyTokent, getAllUser)

export default router
import express from 'express';
import { getUser, update, deleteUser, follow, unFollow } from "../controllers/user.js";
import { verifyToken } from '../verifyToken.js';

const router = express.Router();
// Update user
router.put('/:id', verifyToken, update)

//get User
router.get('/find/:id', getUser);

// delete User
router.delete('/:id', verifyToken, deleteUser);

// follow 
router.put("/follow/:id", verifyToken, follow);

// unfollow 
router.put("/unfollow/:id", verifyToken, unFollow);

export default router;
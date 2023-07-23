import express from 'express';
import {signupUser, loginUser} from '../controller/user-controller.js';
import { uploadImage, getImage } from '../controller/image-controller.js';
import upload from '../utils/upload.js';
import { authorization } from '../controller/jwt-controller.js';
import { createPost, getPosts,getPost,updatePost, deletePost,getPostByUserName } from '../controller/post-controller.js';
import { getComments, newComment,deleteComment } from '../controller/comment-controller.js';


const router = express.Router();

router.post('/signup', signupUser);
router.post('/login', loginUser);
router.post('/file/upload',upload.single('file'), uploadImage);
router.post('/create', authorization, createPost);
router.get('/posts', authorization, getPosts)
router.get('/details/:id', authorization, getPost)
router.put('/update/:id', authorization, updatePost)
router.delete('/delete/:id', authorization, deletePost)
router.post('/comment/new', authorization, newComment)
router.get('/comments/:id', authorization, getComments)
router.delete('/delete/comment/:id', authorization, deleteComment)
router.get('/account', authorization, getPostByUserName)


router.get('/file/:filename', getImage);


export default router;


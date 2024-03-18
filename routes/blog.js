import express from 'express'
import { createBlog,updateBlog,deleteBlog,myBlogs,getAllBlogs,getBlogById } from '../Controllers/blog.js';
import { isAuthenticated } from '../middlewares/auth.js';

const router=express.Router();

router.post('/new',isAuthenticated,createBlog)
router.get('/myblogs',isAuthenticated,myBlogs)
router.put('/:id',isAuthenticated,updateBlog)
router.delete('/:id',isAuthenticated,deleteBlog)
router.get('/allblogs',getAllBlogs);
router.get('/blog/:id',isAuthenticated,getBlogById);
// router.delete('/:id',isAuthenticated,deleteBlog)


export default router;
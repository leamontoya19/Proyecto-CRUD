import express from 'express'
import { createBlog, deleteBlog, getAllBlogs, getBlog, updateblog } from '../controllers/BlogController.js'

const router = express.Router()

router.get('/', getAllBlogs)
router.get('/:id', getBlog)
router.post('/', createBlog)
router.put('/:id',updateblog)
router.delete('/:id', deleteBlog)

export default router;

import express from 'express'

import { getPosts, createPost } from '../controlles/posts.js'

const router = express.Router()

router.get('/', getPosts)
router.get('/', createPost)

export default router
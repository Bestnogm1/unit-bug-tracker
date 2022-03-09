
import { Router } from 'express'
const router = Router()
import { isLoggedIn } from '../middleware/middleware.js'
import * as commentCrtl from '../models/comments.js'
router.get('/section',isLoggedIn,commentCrtl.new)


export {
  router
}

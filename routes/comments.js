
import { Router } from 'express'
const router = Router()
import { isLoggedIn } from '../middleware/middleware.js'
import * as commentCrtl from '../controllers/comments.js'
router.get('/sections',isLoggedIn,commentCrtl.index)


export {
  router
}


import { Router } from 'express'
const router = Router()
import { isLoggedIn } from '../middleware/middleware.js'
import * as commentCrtl from '../middleware/comment'
router.get('/', isLoggedIn, commentCrtl.index)
export {
  router
}

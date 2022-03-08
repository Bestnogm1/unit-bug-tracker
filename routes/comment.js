import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
const router = Router()
import * as commentCrtl from '../middleware/comment'


router.get('/',commentCrtl.index)
export {
  router
}

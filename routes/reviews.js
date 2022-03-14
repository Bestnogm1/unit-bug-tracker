
import { Router } from 'express'
const router = Router()
import { isLoggedIn } from '../middleware/middleware.js'
import * as reviewsCtrl from '../controllers/reviews.js'



router.get('/', isLoggedIn, reviewsCtrl.index)
router.post('/',isLoggedIn, reviewsCtrl.create)
router.delete('/:id',isLoggedIn, reviewsCtrl.delete)
// router.get('/:id', isLoggedIn,reviewsCtrl.show)
export {
  router
}

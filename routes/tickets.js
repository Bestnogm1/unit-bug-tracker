import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as ticketsCtrl from '../controllers/tickets.js'
const router = Router()


router.get('/', ticketsCtrl.index)
router.get('/new', isLoggedIn,ticketsCtrl.new)
router.post('/', isLoggedIn,ticketsCtrl.create)

export{
  router
}
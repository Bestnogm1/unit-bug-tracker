import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as ticketsCtrl from '../controllers/tickets.js'
const router = Router()


router.get('/', ticketsCtrl.index)
router.get('/new',ticketsCtrl.new)
router.post('/', isLoggedIn,ticketsCtrl.create)
router.get('/:id', isLoggedIn,ticketsCtrl.show)
router.delete('/:id',isLoggedIn ,ticketsCtrl.delete)

export{
  router
}
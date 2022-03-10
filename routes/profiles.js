import { Router } from 'express'
import * as profilesCtrl from '../controllers/profile.js'
import { isLoggedIn } from '../middleware/middleware.js'
const router = Router()

export {
  router
}
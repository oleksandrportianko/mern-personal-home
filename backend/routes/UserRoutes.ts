import express from 'express'
import { GetUser } from '../controllers/UserController'

const router = express.Router()

router.get('/user', GetUser)

export default router
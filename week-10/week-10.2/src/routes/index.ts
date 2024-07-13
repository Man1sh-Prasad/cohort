import { Router } from "express";
import todoRouter from './todo'
import userRouter from './user'

const router = Router()

router.use('/user', userRouter)
router.use('/todo', todoRouter)

export default router
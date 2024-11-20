import express from 'express'
import { deleteUsers, getUsers, postUsers } from '../controllers/userControllers.js'


const userRouter = express.Router()

userRouter.get("/",getUsers)

userRouter.post("/",postUsers)

userRouter.delete("/",deleteUsers)


export default userRouter;
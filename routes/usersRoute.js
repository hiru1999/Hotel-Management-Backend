import express from 'express'
import { deleteUsers, getUsers, loginUser, postUsers } from '../controllers/userControllers.js'


const userRouter = express.Router()

userRouter.get("/",getUsers)

userRouter.post("/",postUsers)
userRouter.post("/login",loginUser)

userRouter.delete("/",deleteUsers)


export default userRouter;
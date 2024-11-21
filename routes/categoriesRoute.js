import express from 'express'
import { postCategory } from '../controllers/categoryControllers.js'

const categoryRouter = express.Router()

categoryRouter.post("/",postCategory)




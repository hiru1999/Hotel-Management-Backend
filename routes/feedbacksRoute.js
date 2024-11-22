import express from 'express'
import { postFeedback } from '../controllers/feedbackControllers.js'

const feedbackRouter = express.Router()

feedbackRouter.post("/",postFeedback)

export default feedbackRouter;
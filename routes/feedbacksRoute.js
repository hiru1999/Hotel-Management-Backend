import express from 'express'
import { getFeedback, postFeedback } from '../controllers/feedbackControllers.js'

const feedbackRouter = express.Router()

feedbackRouter.post("/",postFeedback)

feedbackRouter.get("/",getFeedback)

export default feedbackRouter;
import express from 'express'
import { postBooking } from '../controllers/bookingControllers.js';

const bookingRouter = express.Router()

bookingRouter.post("/",postBooking)

export default bookingRouter;
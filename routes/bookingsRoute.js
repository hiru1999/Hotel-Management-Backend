import express from 'express'
import { getBooking, postBooking } from '../controllers/bookingControllers.js';

const bookingRouter = express.Router()

bookingRouter.post("/",postBooking)

bookingRouter.get("/",getBooking)

export default bookingRouter;
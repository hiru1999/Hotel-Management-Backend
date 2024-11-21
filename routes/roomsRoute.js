import express from 'express'
import { getRoom, postRoom } from '../controllers/roomControllers.js';

const roomRouter = express.Router()

roomRouter.post("/",postRoom)

roomRouter.get("/",getRoom)

export default roomRouter;
import express from 'express'
import { postRoom } from '../controllers/roomControllers.js';

const roomRouter = express.Router()

roomRouter.post("/",postRoom)

export default roomRouter;
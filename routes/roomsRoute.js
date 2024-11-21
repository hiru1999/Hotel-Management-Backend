import express from 'express'
import { findRoomById, getRoom, postRoom } from '../controllers/roomControllers.js';

const roomRouter = express.Router()

roomRouter.post("/",postRoom)

roomRouter.get("/",getRoom)

roomRouter.get("/:roomId",findRoomById)

export default roomRouter;
import express from 'express'
import { findRoomById, getRoom, postRoom, updateRoom } from '../controllers/roomControllers.js';

const roomRouter = express.Router()

roomRouter.post("/",postRoom)

roomRouter.get("/",getRoom)

roomRouter.get("/:roomId",findRoomById)

roomRouter.put("/:roomId",updateRoom)

export default roomRouter;
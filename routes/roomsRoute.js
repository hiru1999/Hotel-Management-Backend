import express from 'express'
import { deleteRoom, findRoomById, getRoom, postRoom, updateRoom } from '../controllers/roomControllers.js';

const roomRouter = express.Router()

roomRouter.post("/",postRoom)

roomRouter.get("/",getRoom)

roomRouter.get("/:roomId",findRoomById)

roomRouter.put("/:roomId",updateRoom)

roomRouter.delete("/:roomId",deleteRoom)

export default roomRouter;
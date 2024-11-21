import Room from "../models/room.js";
import { isAdminValid } from "./userControllers.js";

//post
export function postRoom(req,res){
    
    if(!isAdminValid(req)){
        res.status(403).json({
            message : "Unauthorized"
        })
        return
    }

    const room = req.body
    const newRoom = new Room(room)

    newRoom.save().then(
        (result)=>{
            res.json({
                message : "Room created successfully",
                result : result
            })
        }
    ).catch(
        (err)=>{
            res.json({
                message : "Room creation failed",
                error : err
                
            })
        }
    )
}

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

//get
export function getRoom(req,res){
    
    Room.find().then(
        (result)=>{
            res.json({
                rooms : result
            })
        }
    ).catch(
        ()=>{
            res.json({
                message : "Failed to get rooms"
            })
        }
    )

}

//find by roomId
export function findRoomById(req,res){
    const roomId = req.params.roomId
    Room.findOne({roomId:roomId}).then(
        (result)=>{
            if(result == null){
                res.json({
                    message : "Room not found"
                })
            }else{
                res.json({
                    Category : result
                })
            }   
        }
    ).catch(
        ()=>{
            res.json({
                message : "Failed to get Room"
            })
        }
    )

}

//update
export function updateRoom(req,res){
    if(!isAdminValid(req)){
        res.status(403).json({
            message : "Unauthorized"
        })
        return
    }
    const roomId = req.params.roomId
    Room.updateOne({roomId:roomId},req.body).then(
        ()=>{
            res.json({
                message : "Room updated successfully"
            })
        }
    ).catch(
        ()=>{
            res.json({
                message : "Failed to update Room"
            })
        }
    )
}

//delete
export function deleteRoom(req,res){
    if(!isAdminValid(req)){
        res.status(403).json({
            message : "Unauthorized"
        })
        return
    }
    const roomId = req.params.roomId
    Room.findOneAndDelete({roomId:roomId}).then(
        ()=>{
            res.json({
                message : "Room deleted successfully"
            })
        }   
    ).catch(
        ()=>{
            res.json({
                message : "Room deletion failed"
            })
        } 
    )
    
}
import Booking from "../models/booking.js";
import { isAdminValid, isCustomerValid } from "./userControllers.js";



//post
export function postBooking(req,res){

    if(!isCustomerValid(req)){
        res.status(403).json({
            message : "Unauthorized"
        })
        return
    }

    const startingId = 1200;

    Booking.countDocuments({}).then(
        (count)=>{
            console.log(count);
            const newId = startingId + count + 1;
            const newBooking = new Booking(
                {
                    bookingId : newId,
                    roomId : req.body.roomId,
                    email : req.user.email,
                    start : req.body.start,
                    end : req.body.end
                }
            )
            newBooking.save().then(
                (result)=>{
                    res.json({
                        message : "Booking created successfully",
                        result : result
                    })
                }
            ).catch(
                (err)=>{
                    res.json({
                        message : "Booking creation failed",
                        error : err
                        
                    })
                }
            )
        }
    ).catch(
        (err)=>{
            res.json({
                message : "Booking creation failed",
                error : err
                
            })
        }
    )

}


//get
export function getBooking(req,res){

    if(isAdminValid(req)){
        Booking.find().then(
            (result)=>{
                res.json({
                    bookings : result
                })
            }
        ).catch(
            ()=>{
                res.json({
                    message : "Failed to get bookings"
                })
            }
        )
        return
    }

    if(isCustomerValid(req)){
        const email = req.user.email
        Booking.findOne({email:email}).then(
            (result)=>{
                if(result == null){
                    res.json({
                        message : "Bookings not found"
                    })
                }else{
                    res.json({
                        Booking : result
                    })
                }   
            }
        ).catch(
            ()=>{
                res.json({
                    message : "Failed to get bookings"
                })
            }
        )
    }
    
    

}


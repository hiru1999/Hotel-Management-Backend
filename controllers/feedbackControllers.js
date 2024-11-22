import Feedback from "../models/feedback.js";
import { isCustomerValid } from "./userControllers.js";

//post
export function postFeedback(req,res){

    if(isCustomerValid(req)){
        const {rating,comment} = req.body
        const newFeedback = new Feedback(
            {
                email : req.user?.email,
                userName : req.user?.firstName,
                rating : rating,
                comment : comment
            }

        );

        newFeedback.save().then(
            (result)=>{
                res.json({
                    message : "Feedback sent successfully",
                    result : result
                })
            }
        ).catch(
            (err)=>{
                res.json({
                    message : "Feedback sent failed",
                    error : err
                })
            }
        )
            return
    }else{
        res.json({
            message : "Unauthorized"
        })
    }

    

}
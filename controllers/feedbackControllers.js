import Feedback from "../models/feedback.js";

//post
export function postFeedback(req,res){

    if(!isCustomerValid(req)){
        res.status(403).json({
            message : "Unauthorized"
        })
        return
    }

    const feedback = req.body
    const newFeedback = new Feedback(feedback)

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

}
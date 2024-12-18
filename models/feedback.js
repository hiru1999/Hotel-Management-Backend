import mongoose from "mongoose";

const feedbackSchema = mongoose.Schema(
    {
        email : {
            type : String,
            required : true
        },
        userName : {
            type : String,
            required : true
        },
        rating : {
            type : Number,
            min : 1,
            max : 5,
            required : true
        },
        comment : {
            type : String,
            required : true
        },
        date : {
            type : Date,
            default : Date.now
        },
        status : {
            type : String,
            status : ['Pending','Approved','Rejected'],
            default : "Pending"
        }
    }
)

const Feedback = mongoose.model("feedbacks",feedbackSchema)
export default Feedback;
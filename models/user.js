import mongoose from "mongoose";
const userSchema = mongoose.Schema(
    {
        email : {
            type : String,
            required : true,
            unique : true
        },
    }
)

const User = mongoose.model("users",userSchema)
export default User;
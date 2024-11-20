import User from "../models/user.js";

//post
export function postUsers(req, res) {
    const user = req.body;
    const newUser = new User(user);

    newUser.save().then(
        () =>{
            res.status(201).json({
                message: "User created successfully",
            })
        }
        ).catch(
            () =>
            res.status(400).json({
                message: "User creation failed",
                
            })
        );
}
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

//get
export function getUsers(req,res){
    
    User.find().then(
        (usersList)=>{
            res.json({
                list : usersList
            })
        }
    )

}

//delete
export function deleteUsers(req,res){
    const email = req.body.email;
    User.deleteOne({email:email}).then(
        ()=>{
            res.json({
                message : "User deleted successfully"
            })
        }
    ).catch(
        ()=>{
            res.json({
                message : "User deletion failed"
            })
        }
    )
    
}

//login
export function loginUser(req,res){
    const credentials = req.body
    User.findOne({email : credentials.email, password : credentials.password}).then(
        (user)=>{
            if(user == null){
                res.json({
                    message : "User not found"
                })
            }else{
                res.json({
                    message : "User found",
                    user : user
                })
            }
        }
    )
}
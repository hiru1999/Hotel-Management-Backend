import Category from "../models/category.js";

//post
export function postCategory(req,res){
    const user = req.user
    if(user == null){
        res.status(403).json({
            message : "Please login to create a category"
        })
        return
    }

    if(user.type != "admin"){
        res.status(403).json({
            message : "You are not authorized to create a category"
        })
        return
    }

    const category = req.body
    const newCategory = new Category(category)

    newCategory.save().then(
        ()=>{
            res.json({
                message : "Category created successfully"
            })
        }
    ).catch(
        ()=>{
            res.json({
                message : "Category creation failed"
            })
        }
    )
}
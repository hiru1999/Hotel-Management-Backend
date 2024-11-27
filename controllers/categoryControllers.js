import Category from "../models/category.js";
import { isAdminValid } from "./userControllers.js";

//post
export function postCategory(req,res){
    
    if(!isAdminValid(req)){
        res.status(403).json({
            message : "Unauthorized"
        })
        return
    }

    const category = req.body
    const newCategory = new Category(category)

    newCategory.save().then(
        (result)=>{
            res.json({
                message : "Category created successfully",
                result : result
            })
        }
    ).catch(
        (err)=>{
            res.json({
                message : "Category creation failed",
                error : err
                
            })
        }
    )
}

//get
export function getCategory(req,res){
    
    Category.find().then(
        (result)=>{
            res.json({
                categories : result
            })
        }
    ).catch(
        ()=>{
            res.json({
                message : "Failed to get categories"
            })
        }
    )

}

//get by name
export function getCategoryByName(req,res){
    const name = req.params.name
    
    Category.findOne({name:name}).then(
        (result)=>{
            if(result == null){
                res.json({
                    message : "Category not found"
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
                message : "Failed to get category"
            })
        }
    )

}

//update
export function updateCategory(req,res){
    if(!isAdminValid(req)){
        res.status(403).json({
            message : "Unauthorized"
        })
        return
    }
    const name = req.params.name
    Category.updateOne({name:name},req.body).then(
        ()=>{
            res.json({
                message : "Category updated successfully"
            })
        }
    ).catch(
        ()=>{
            res.json({
                message : "Failed to update category"
            })
        }
    )
}

//delete
export function deleteCategory(req,res){
    // if(!isAdminValid(req)){
    //     res.status(403).json({
    //         message : "Unauthorized"
    //     })
    //     return
    // }
    const name = req.params.name
    Category.findOneAndDelete({name:name}).then(
        ()=>{
            res.json({
                message : "Category deleted successfully"
            })
        }   
    ).catch(
        ()=>{
            res.json({
                message : "Category deletion failed"
            })
        } 
    )
    
}
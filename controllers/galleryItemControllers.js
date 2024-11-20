import GalleryItem from "../models/galleryItem.js";

//post
export function postGalleryItems(req,res){
    const galleryItem = req.body
    const newGalleryItem = new GalleryItem(galleryItem)

    newGalleryItem.save().then(
        ()=>{
            res.json({
                message : "Gallery item created successfully"
            })
        }
    ).catch(
        ()=>{
            res.json({
                message : "Gallery item creation failed"
            })
        }
    )
}

//get
export function getGalleryItems(req,res){
    
    GalleryItem.find().then(
        (list)=>{
            res.json({
                list : list
            })
        }
    )

}

    
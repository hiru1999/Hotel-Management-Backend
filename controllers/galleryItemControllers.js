import GalleryItem from "../models/galleryItem.js";


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
    
import express from 'express'
import { deleteGalleryItem, getGalleryItems, postGalleryItems, updateGalleryItems } from '../controllers/galleryItemControllers.js';

const galleryItemRouter = express.Router()

galleryItemRouter.post("/",postGalleryItems)

galleryItemRouter.get("/",getGalleryItems)

galleryItemRouter.put("/:name",updateGalleryItems)

galleryItemRouter.delete("/:name",deleteGalleryItem)

export default galleryItemRouter;
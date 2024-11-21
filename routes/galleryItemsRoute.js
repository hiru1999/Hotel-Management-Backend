import express from 'express'
import { getGalleryItems, postGalleryItems, updateGalleryItems } from '../controllers/galleryItemControllers.js';

const galleryItemRouter = express.Router()

galleryItemRouter.post("/",postGalleryItems)

galleryItemRouter.get("/",getGalleryItems)

galleryItemRouter.put("/:name",updateGalleryItems)

export default galleryItemRouter;
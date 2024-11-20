import express from 'express'
import { postGalleryItems } from '../controllers/galleryItemControllers.js';

const galleryItemRouter = express.Router()

galleryItemRouter.post("/",postGalleryItems)

export default galleryItemRouter;
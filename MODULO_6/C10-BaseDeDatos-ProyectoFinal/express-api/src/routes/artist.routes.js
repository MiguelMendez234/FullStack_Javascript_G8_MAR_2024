import { Router } from 'express';
import { ArtistMongoController } from "../controller_mongo/artist.mongo.controller.js"


const router = Router();
const controller =  new ArtistMongoController();


router.get("/artist", controller.getAllArtist);

router.get("/artist/:id", controller.getArtisyById );

router.post("/artist", controller.createArtist );

router.put("/artist/:id", controller.updateArtist );

export default router;
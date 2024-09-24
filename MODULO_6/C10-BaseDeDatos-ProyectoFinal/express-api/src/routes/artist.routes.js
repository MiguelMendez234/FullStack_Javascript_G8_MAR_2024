import { Router } from 'express';
import { ArtistController } from '../controllers/index.js';



const router = Router();
const controller =  new ArtistController();


router.get("/artist", controller.getAllArtist);

router.get("/artist/:id", controller.getArtisyById );

router.get("/artist/:id/song", controller.getSongsByArtist)



router.post("/artist", controller.createArtist );

router.put("/artist/:id", controller.updateArtist );

export default router;
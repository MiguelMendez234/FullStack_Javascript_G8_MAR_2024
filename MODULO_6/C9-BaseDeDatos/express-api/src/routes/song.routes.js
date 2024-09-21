import { Router } from 'express';
import { SongController } from '../controllers/index.js';


const router = Router();
const controller =  new SongController();


router.get("/song", controller.getSong);

router.get("/song/:id", controller.getSongById );

router.post("/song", controller.createSong );

export default router;
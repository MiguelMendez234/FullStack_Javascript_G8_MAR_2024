import { Router } from 'express';
import { default as artistRoutes } from './artist.routes.js';
import { default as songRoutes } from './song.routes.js';


const router = Router();
router.use(songRoutes);
router.use(artistRoutes);

export default router;
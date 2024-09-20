import { Router } from 'express';
import { connection } from "../db/sequelize.js";

import { MovieController } from "../controllers/movie.controller.js";


const router = Router();
const controller = new MovieController();


router.get("/movies", controller.getMovies );

router.get("/movies/:id", controller.getMovieById );

router.post("/movies", controller.create );

router.put("/movies/:id", controller.updateMovie );

router.delete("/movies/:id", controller.deleteMovie );

export default router;
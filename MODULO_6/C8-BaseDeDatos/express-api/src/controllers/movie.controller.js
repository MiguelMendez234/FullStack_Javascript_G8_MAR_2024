import { Movie } from "../models/movie.js";


export class MovieController {

    getMovies = async (req, res) => {
        try {
          const movies = await Movie.findAll();
        console.log(movies);
          res.status(200).json(movies);
        } catch (error) {
          console.error(error.message);
          res.status(500).json({ error: error.message });
        }
    };

    getMovieById = async (req, res) => {

        const id = parseInt(req.params.id);
      
        const movie = await Movie.findByPk(id);

        if (!movie) return res.status(404).send({ message: 'Movie not found' });
        
        res.json(movie);
      }

    create = async (req, res) => {

        try {
          const { title, genre, releaseYear } = req.body;
          
          if (!title) {
            return res.status(404).json({ message: "Bad request" });
          }
          
          const releaseYearInt = parseInt(releaseYear);
          
          if (isNaN(releaseYearInt) ) { 
            return res.status(404).json({ message: "Bad request" });
          }
      
          const movie = await Movie.create({
            title,
            genre,
            releaseYear: releaseYearInt,
          });

          res.status(201).json(movie);
        } catch (err) {
          console.log(err.message);
          return res.status(500).json({ message: 'Internal Server Error'});
        }
      
    }

    updateMovie = async (req, res) => {
        const { title, genre, releaseYear } = req.body;
        
        try {
          const id = parseInt(req.params.id);
          
          const movie = await Movie.findOne({
            where: { id },
          })
      
          if (! movie ) return res
          .status(404)
          .send({ message: `Movie with id: ${id} not found`});
          
          movie.set({
            title,
            genre,
            releaseYear
          })

          await movie.save();
          return res.json(movie);
        } catch (error) {
          console.error(error.message);
          res.status(500).json({ message: 'Interal Server Error'})
        }
    }

    deleteMovie = async (req, res) => {
 
        try {
          const id = parseInt(req.params.id);
          const result = await Movie.destroy({ where: {id: id} });
            console.log(result);
          if (!result || result <= 0) return res.status(404).send("Movie not found");
      
          res.json({ id: id })
        } catch (error) {
          console.error(error.message);
          res.status(500).json({ message: 'Interal Server Error'})
        }
      
    }

}

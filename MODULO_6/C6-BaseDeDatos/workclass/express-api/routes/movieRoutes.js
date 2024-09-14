const { Router } = require("express");
const { movies } = require("../data");

const router = Router();


router.get("/movies", (req, res) => {
  res.json(movies);
});

router.get("/movies/:id", (req, res) => {
  console.log(req.params);
  const movie = movies.find((movie) => movie.id === parseInt(req.params.id));
  if (!movie) return res.status(404).send("Movie not found");
  res.json(movie);
});

router.post("/movies", (req, res) => {
  if (!req.body.title) {
    return res.status(404).json({ message: "Bad request" });
  }

  const movie = {
    id: movies.length + 1,
    title: req.body.title,
    directorId: req.body.directorId,
    genre: req.body.genre,
    releaseYear: req.body.releaseYear,
  };
  movies.push(movie);
  res.status(201).json(movie);
});

router.put("/movies/:id", (req, res) => {
  const movie = movies.find((m) => m.id === parseInt(req.params.id));
  if (!movie) return res.status(404).send("Movie not found");

  movie.title = req.body.title;
  movie.directorId = req.body.directorId;
  movie.genre = req.body.genre;

  return res.json(movie);
});

router.delete("/movies/:id", (req, res) => {
  const movieIndex = movies.findIndex((m) => m.id === parseInt(req.params.id));
  console.log({ movieIndex });
  if (movieIndex === -1) return res.status(404).send("Movie not found");
  console.log({ movieIndex });
  const deletedMovie = movies.splice(movieIndex, 1);
  res.json(deletedMovie[0]);
});


module.exports = router;
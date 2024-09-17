const { Router } = require("express");
const { movies } = require("../data");
const connection = require("../db/sequelize");

const router = Router();


router.get("/movies", async (req, res) => {
  try {
    const movies = await connection.query(`
      SELECT * FROM Movies
      ORDER BY id ASC;
    `, {
      type: connection.QueryTypes.SELECT
    });
    res.status(200).json(movies);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
});

router.get("/movies/:id", async (req, res) => {

  const id = parseInt(req.params.id);

  const result = await connection.query(`
    SELECT * FROM Movies
    WHERE id = :id;
    `,{
      replacements: { id },
      type: connection.QueryTypes.SELECT,
    }

  );
  if (!result[0]) return res.status(404).send({ message: 'Movie not found' });
  res.json(result[0]);
});

router.post("/movies", async (req, res) => {

  try {
    const {title, genre, releaseYear } = req.body;
    console.log({releaseYear}, typeof releaseYear)
    
    if (!title) {
      return res.status(404).json({ message: "Bad request" });
    }
    
    const releaseYearInt = parseInt(releaseYear);
    
    if (isNaN(releaseYearInt) ) { 
      return res.status(404).json({ message: "Bad request" });
    }

    const result = await connection.query(`
      INSERT INTO Movies (title, genre, releaseYear)
      VALUES (:title, :genre, :releaseYearInt)
      RETURNING *;
    `, {
      replacements: { title, genre, releaseYearInt },
      type: connection.QueryTypes.INSERT
    });
    res.status(201).json(result[0]);
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ message: 'Internal Server Error'});
  }

});

router.put("/movies/:id", async (req, res) => {
  const { title, genre, releaseYear } = req.body;
  
  try {
    const id = parseInt(req.params.id);
    const [ movies, number] = await connection.query(`
      UPDATE Movies
      SET title = :title,
          genre = :genre,
          releaseYear = :releaseYear
      WHERE id = :id
      RETURNING * ;
      `, {
        replacements: {id, title, genre, releaseYear },
        type: connection.QueryTypes.UPDATE,
      });
     console.log(movies, number); 

    if (movies?.length <= 0 ) return res
    .status(404)
    .send({ message: `Movie with id: ${id} not found`});

    return res.json(movies[0]);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Interal Server Error'})
  }
});

router.delete("/movies/:id", async (req, res) => {
 
  try {
    const id = parseInt(req.params.id);
    const result = await connection.query(`
      DELETE FROM movies 
      WHERE id = :id
      RETURNING * ;
    `,{
      replacements: { id },
      type: connection.QueryTypes.DELETE,
    })

    if (result.length <= 0) return res.status(404).send("Movie not found");

    res.json(result)
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Interal Server Error'})
  }

});

module.exports = router;
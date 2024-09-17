let movies = [
  {
    id: 1,
    title: "Inception",
    directorId: 1,
    genre: "Sci-Fi",
    releaseYear: 2011,
    isActive: false,
  },
  {
    id: 2,
    title: "Interstellar",
    directorId: 1,
    genre: "Sci-Fi",
    releaseYear: 2014,
    isActive: false,
  },
  {
    id: 1,
    title: "Inception",
    directorId: 1,
    genre: "Sci-Fi",
    releaseYear: 2010,
    isActive: false,
  },
];

const directors = [
  {
    id: 1,
    name: "Christopher Nolan",
    nationality: "British-American",
  },
  {
    id: 2,
    name: "Quentin Tarantino",
    nationality: "American",
  },
];


module.exports = {
    movies,
    directors,
};
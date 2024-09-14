const express = require("express");
const router = require('./routes/movieRoutes');

const app = express();
const port = 3000;

app.use(express.json());

app.use(router);

app.listen(port, () => {
  console.log("listening on port", port);
});

console.log("Starting");

const express = require("express")
const { getAllTest, createMovie } = require("../services/Movie.service");

const router = express.Router();

router.get("/movies", getAllTest);
router.post("/movie", createMovie);

module.exports = router;

const { Movie } = require("../models/Movie.model");


const createMovie = (req, res, next) => {
  const {
    name,
    title,
    content,
    image,
    trailer,
    star,
    time,
    movieMaker,
    director,
    cast,
  } = req.body;
  Movie.create({  
    name,
    title,
    content,
    image,
    trailer,
    star,
    time,
    movieMaker,
    director,
    cast, })
    .then((item) => {
      res.status(201).json(item);
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
};


const getAllTest = (req, res, next) => {
    return Movie.find()
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => res.status(500).json(err));
}

module.exports = {
  getAllTest,
  createMovie
}
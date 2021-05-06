const { LichChieu } = require("../models/LichChieu.model");
const { Movie } = require("../models/Movie.model");

const getAll = (req, res, next) => {
// OK
  return LichChieu.find()
    .populate('movie')
    .then((lichChieu) => {
        console.log(lichChieu.movie);
      res.status(200).json(lichChieu);
    })
    .catch((err) => res.status(500).json(err));
}

const createMovie = (req, res, next) => {
  const {
     ngayChieu,
    gioChieu,
    price,
    status,
    movie,
  } = req.body;
  LichChieu.create({
     ngayChieu,
    gioChieu,
    price,
    status,
    movie,
      })
    .then((item) => {
      res.status(201).json(item);
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
};

module.exports = {
  getAll,
  createMovie
}
// em phari create 1 casi mowsi cos ddwowjc
// ban dau no chua co movie ay ma

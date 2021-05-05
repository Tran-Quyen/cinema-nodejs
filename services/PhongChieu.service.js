const { PhongChieu } = require("../models/PhongChieu.model");


const getAll = (req, res, next) => {
    return PhongChieu.find()
    .then((test) => {
      res.status(200).json(test);
    })
    .catch((err) => res.status(500).json(err));
}

const createUser = (req, res, next) => {
   const name = "Phong 1 abc";
  PhongChieu.create({ name })
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
};

module.exports = {
  getAll,
  createUser
}
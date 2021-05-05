const express = require("express")
const { getAll,createUser } = require("../services/PhongChieu.service");

const router = express.Router();

router.get("/phong", getAll);
router.get("/phong1", createUser);

module.exports = router;

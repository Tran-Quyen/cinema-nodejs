const express = require("express")
const { getAll,createMovie  } = require("../services/LichChieu.service");

const router = express.Router();

router.get("/lichchieu", getAll);
router.post("/lichchieu", createMovie);

module.exports = router;

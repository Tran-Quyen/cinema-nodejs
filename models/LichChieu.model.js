const mongoose = require("mongoose");

const LichChieuSchema = mongoose.Schema({
    ngayChieu: { type: String, required: false },
    gioChieu: { type: String, required: false },
    price: { type: String, required: false },
    status: { type: String, required: false },
    movie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movie',
    // default: 'employee',
  },
});

const LichChieu = mongoose.model("LichChieu", LichChieuSchema, "LichChieu");

module.exports = {
    LichChieuSchema,
    LichChieu
}
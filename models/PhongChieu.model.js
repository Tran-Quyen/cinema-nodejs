const mongoose = require("mongoose");

const PhongChieuSchema = mongoose.Schema({
     name: { type: String, required: true },
});

const PhongChieu = mongoose.model("PhongChieu", PhongChieuSchema, "PhongChieu");

module.exports = {
    PhongChieuSchema,
    PhongChieu
}
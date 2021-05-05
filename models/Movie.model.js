const mongoose = require("mongoose");

const MovieSchema = mongoose.Schema({
     name: { type: String, required: true },
    title: { type: String, required: false },
    content: { type: String, required: false },
    image: { type: String, required: true },
    trailer: { type: String, required: false },
    star: { type: Number, required: false },
    time: { type: String, required: false },
    movieMaker: { type: String, required: false },
    director: { type: String, required: false },
    cast: { type: String, required: false },
});

const Movie = mongoose.model("Movie", MovieSchema, "Movie");

module.exports = {
    MovieSchema,
    Movie
}
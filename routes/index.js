 const MovieController = require("../controller/Movie.controller");
const LichChieuController = require("../controller/LichChieu.controller");
const PhongChieuController = require("../controller/PhongChieu.controller");

function route(app) {
  // Demo API
  app.get('/', (req, res) => {
    res.send('Hello to Cinema 2021 API!');
  });

   app.use('/api',MovieController);
   app.use('/api',LichChieuController);
   app.use('/api',PhongChieuController);
}

module.exports = route;
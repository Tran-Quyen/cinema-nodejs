const mongoose = require('mongoose');
const configs = require('../constant');

async function connect() {
  console.log('configs', configs.MONGO_URI);
  await mongoose
    .connect(configs.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    .then(() => console.log('Connect to database successfully!'))
    .catch((error) => console.log('Error: connect to database failed!!!', error));
}

module.exports = { connect };
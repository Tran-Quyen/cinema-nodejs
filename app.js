const express = require('express');
const cors = require('cors');
const database = require('./database');
const route = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());

// Middleware
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));


// Connect to DB
database.connect();

// Routes init
route(app);

// Listen port
const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`App is running on port ${port}`));
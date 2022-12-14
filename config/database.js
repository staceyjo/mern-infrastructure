const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);

// create variable for db connections - this allows us to look at the current status of our functions
const db = mongoose.connection;

db.on('connected', function () {
  console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
});
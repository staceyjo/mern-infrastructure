// mern-infrastructure[main*] % node
// Welcome to Node.js v15.2.0.
// Type ".help" for more information.
// > .load crud-helper.js

// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
// const User = require('./models/user');
// const Item = require('./models/item');
// const Category = require('./models/category');
// const Order = require('./models/order');

// Local variables will come in handy for holding retrieved documents
let user, item, category, order;
let users, items, categories, orders;
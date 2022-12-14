const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

// Always require and configure near the top
require('dotenv').config();

require("./config/database")


const app = express();

app.use(logger('dev'));
app.use(express.json());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, "build", "favicon.ico")))
app.use(express.static(path.join(__dirname, "build")))

// Put API routes here, before the "catch all" route
app.use("/api/users", require("./routes/api/users"))

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
// Note: Since this route is a "catch all" that matches every GETrequest, be sure to mount API or other routes before it!
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3003

app.listen(PORT, () => {
    console.log(`Express app is running on port: ${PORT}`)
})
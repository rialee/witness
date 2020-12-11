// dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// port
const PORT = process.env.PORT || 3000;

// server
const app = express();

// logger
app.use(logger("dev"));

// request body middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// public serve 
app.use(express.static("public"));

// mongoose connection
const db = mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", 
{ 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

// routes
app.use(require("./controller/apiRoutes.js"));
app.use(require("./controller/htmlRoutes.js"));

// Listen on port 
app.listen(PORT, () => {
    console.log(`App running on ${PORT} !`);
});

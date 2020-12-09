// dependencies
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const router = require("./controller/apiRoutes");

// port
const PORT = 3000;

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
const db = mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

// routes
router.use(require("./controller/apiRoutes.js"));
router.use(require("./controller/htmlRoutes.js"));

// Listen on port 
app.listen(PORT, () => {
    console.log(`App running on ${PORT} !`);
});

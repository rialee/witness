// dependencies
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");

// server
const app = express();

// logger
app.use(logger("dev"));

// request body middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// public serve 
app.use(express.static("public"));

// database setup
const databaseUrl = "workouts_db";
const collections = ["workouts"];

// mongoose connection
const db = mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/custommethoddb", { useNewUrlParser: true });


// Listen on port 3000
app.listen(3000, () => {
    console.log(`App running on ${3000}`);
});

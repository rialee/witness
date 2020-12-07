// dependencies
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");

// PORT setup
const app = express();

// PORT
const PORT = process.env.PORT || 3000

// logger
app.use(logger("development"));

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// connection
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/workout",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
    );

// routing
app.get("/", function (){
    res.send("server testing")
})
// app.use(require("./routes/html-routes.js"))

// start server and listen on PORT
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});

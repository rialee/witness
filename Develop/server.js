// dependencies
const express = require("express");

// PORT setup
const PORT = process.env.PORT || 3000;
const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static("public"));


// routing
app.get("/", function (req, res) {

    res.send("Test Connection Working!");

});

// start server and listen on PORT
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});

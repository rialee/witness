// dependencies
const router = require ("express").Router();
const path = require ("path");

// home route
router.get("/", (req, res) => {

    // display html file
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// tracker route
router.get("/exercise", (req, res) => {

    // display html file
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

// dashboard route
router.get("/stats", (req, res) => {
    
    // display html file
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

// export router
module.exports = router;
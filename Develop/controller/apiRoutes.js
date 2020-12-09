// dependencies
const router = require ("express").Router();

// require model



// create workouts POST request and return new workout id
router.post("/api/workouts", ({ body }, res)=> {

    // create an empty data entry

    // res.json()

    // err handling

});

// update the selected workout with PUT request
router.put("/api/workours/:id", ({ body }, res) => {

    // get the data by id input (req.params.id)

    // update extercise with $push

    // validate

    // res.json

    // err handling

});

// get workouts
router.get("/api/workouts", (req, res) => {
    
    // find() all workouts
    
    // res,json()

    // err handling

})

// GET request workout history for display
router.put("/api/workouts/range", ({ body }, res)=> {

    // find the last entered 7 days of workout

    // return res.json

    // err handling

});


// delete DELETE request workout
router.delete("/api/workouts", ({ body }, res) => {

    // get req.body.id 

    // delete data in db

    // return res.json()

    // err handling

});

// export router
module.exports = router;


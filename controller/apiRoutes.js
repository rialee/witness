// dependencies
const router = require("express").Router();

// require model
const Workout = require("../model/workout-schema.js");



// get workouts
router.get("/api/workouts", (req, res) => {

    // find() all workouts
   Workout.find()

        // res,json()
        .then(workoutsData => {
            res.json(workoutsData);
        })

        // err handling
        .catch(err => {
            res.json(err);
        });
});

// create workouts POST request and return new workout id
router.post("/api/workouts", ({ body }, res) => {

    // create an empty data entry
    Workout.create({})

        // res.json()
        .then(workoutsData => {
            res.json(workoutsData);
        })

        // err handling
        .catch(err => {
            res.json(err)
        });
});

// update the selected workout id and fill workout info with PUT request
// add exercise button
router.put("/api/workouts/:id", ({ body, params }, res) => {

    // get the data by id input (req.params.id)
    Workout.findByIdAndUpdate(params.id,

        // update extercise with $push
        { $push: { exercises: body } },

        // validate in schema parameters 
        { new: true, runValidators: true }
    )
        // res.json
        .then(workoutsData => {
            res.json(workoutsData);
        })

        // err handling
        .catch(err => {
            res.json(err);
        });
});



// GET request workout history for display
router.get("/api/workouts/range", (req, res) => {

    // find the last entered 7 days of workout
    Workout.find().limit(7)

        // return res.json
        .then(workoutsData => {
            console.log(workoutsData)
            res.json(workoutsData);
        })
        
        // err handling
        .catch(err => res.json(err));

});


// delete DELETE request workout
router.delete("/api/workouts", ({ body }, res) => {

    // get req.body.id 
    // delete data in db
    Workout.findByIdAndDelete(body.id)

        // return res.json()
        .then(() => {
            res.json(true);
        })

        // err handling
        .catch(err => res.json(err));
});

// export router
module.exports = router;


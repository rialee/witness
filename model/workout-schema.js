// dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema

// reference seed file
const workoutSchema = new Schema(
    {
        // date
        day: {
            type: Date,
            default: () => new Date()
        },

        // exercise
        exercise: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Please enter an exercise type."
                },
                name: {
                    type: String,
                    trim: true,
                    required: "Please enter a name of the exercise."
                },
                duration: {
                    type: Number,
                    required: "Please enter the duration exercised (unit: minutes)"
                },

                weight: {
                    type: Number,
                },

                reps: {
                    type: Number,
                },

                sets: {
                    type: Number,
                },

                distance: {
                    type: Number,
                }
            }
        ]
    },

    {
        // format
        toJSON: {
            virtuals: true
        }
    }
);

// get total exercised time
workoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {

        // sum of duration of all exercises 
        return total + exercise.duration;
        // start at 0
    }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
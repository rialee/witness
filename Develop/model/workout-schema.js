const { Schema } = require("mongoose");

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
workoutSchema.virtual("totalExercised").get(function () {
    return this.exercise.reduce((total, exercise) => {
        // sum of duration of all exercises 
        return total + exercise.duration;
    // start at 0
    }, 0);
});

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;
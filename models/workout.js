const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: () => new Date
        },
        excercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Workout type"
                },
                name: {
                    type: String,
                    trim: true,
                    required: "Workout name"
                },
                duration: {
                    type: Number,
                    required: "Workout duration"
                },
                weight: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                sets: {
                    type: Number
                },
                distance: {
                    type: Number
                }
            }
        ]
    }
)

const Workout = mongoose.model("Workouts", workoutSchema);

module.exports = Workout;
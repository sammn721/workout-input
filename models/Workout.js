const mongoose = require("mongoose");
const Workout = mongoose.Schema;

const workoutSchema = new Workout({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String
            },
            name: {
                type: String
            },
            duration: {
                type: Number
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            distance: {
                type: Number
            }
            
        }
    ]
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
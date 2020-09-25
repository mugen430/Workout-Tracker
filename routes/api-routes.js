const Workout = require("../models/workout");

function epson(req, res, next){
    console.log("epson")
    next()
}

module.exports = function (app) {

    app.post("/api/workout", epson, (req, res) => {
        console.log(req.body)
        Workout.create({})
            .then(function (newWorkout) {
                res.json(newWorkout);
            });
    });

    app.get("/api/workout", (req, res) => {
        Workout.find({})
            .then(function (workouts) {
                res.json(workouts);
            });
    });



};
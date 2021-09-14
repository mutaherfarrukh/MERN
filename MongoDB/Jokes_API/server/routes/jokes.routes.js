const JokesAPIController = require("../controllers/jokes.controller");
const JokesAPI = require("../models/jokes.model");

module.exports = app => {
    app.get("/api/jokes/random", JokesAPIController.findRandomJoke);

    app.get("/api/jokes", JokesAPIController.findAllJokes);

    app.get("/api/jokes/:_id", JokesAPIController.JokesbyId);

    app.post("/api/jokes/new", JokesAPIController.createJokes);

    app.patch("/api/jokes/update/:_id", JokesAPIController.updateJoke);

    app.delete("/api/jokes/delete/:_id", JokesAPIController.deleteSingleJoke);

    
}
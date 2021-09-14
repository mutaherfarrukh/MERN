const JokesAPI = require("../models/jokes.model");

module.exports.findAllJokes = (req,res) => {
    console.log("hello it is me, the find all function")

    JokesAPI.find({})
        .then(allJokes => res.json({results: allJokes}))
        .catch(err => res.json({message: "that didn't quite work", err}))
}

module.exports.JokesbyId = (req,res) => {
    JokesAPI.findOne({_id: req.params._id})
        .then(JokeId => res.json({results: JokeId}))
        .catch(err => res.json({message: "that didn't quite work", err}))
}

module.exports.createJokes = (req,res) => {
    JokesAPI.create(req.body)
        .then(newJoke => res.json({results: newJoke}))
        .catch(err => res.json({message: "that didn't quite work", err}))
}

module.exports.updateJoke = (req,res) => {
    JokesAPI.updateOne({_id: req.params._id}, 
        req.body)
        .then(singleJoke => res.json({results: singleJoke}))
        .catch(err => res.json({message: "that didn't quite work", err}))
}

module.exports.deleteSingleJoke = (req,res) => {
    JokesAPI.deleteOne({_id: req.params._id})
    .then(results => res.json({results: results}))
    .catch(err => res.json({message: "that didn't quite work", err}))
}


module.exports.findRandomJoke = (req,res) => {
    console.log("looking for Random Joke")

    JokesAPI.find()
    .then(jokes => {
        const random = Math.floor(Math.random() * jokes.length)
        return res.json({result: jokes[random]})
    })
    .catch(err => res.json({message: "that didn't quite work", err}))
}
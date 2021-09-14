const mongoose = require("mongoose");

const JokesAPISchema = new mongoose.Schema({
    setup : {
        type: String,
        required: [true, "Setup is required"],
        name : "Validator Error",
        properties: {
            message: "Setup is required",
            type: "required",
            path: "setup",
            value: "",
        },
        kind: "required",
        path: "setup",
        value: ""

    },
    punchline :  {
        type: String,
        required: [true, "punchline is required"],
        name : "Validator Error",
        properties: {
            message: "punchline is required",
            type: "required",
            path: "punchline",
            value: "",
        },
        kind: "required",
        path: "punchline",
        value: ""

    },
    createdAt : Number,
    updatedAt : Number
}, {timestamps: true})

const JokesAPI = mongoose.model("JokesAPI", JokesAPISchema);

module.exports = JokesAPI;
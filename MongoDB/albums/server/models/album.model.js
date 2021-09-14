const mongoose = require("mongoose");

const AlbumSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "must have a name!"],
        minlength: [3, "need at least 3 characters"]
    },
    artist: {
        type: String,
        required: [true, "must have a artist name!"],
        minlength: [3, "need at least 3 characters"]
    },
    imgURL: {
        type: String,
        required: [true, "must have a img URL!"],
        minlength: [8, "need at least 3 characters"]
    },
    releaseYear:{
        type: Number,
        required:[true, "must have realse year!"],
        validate: {
            validator: (input) => {
                return input >= 1980 && input <= 1989;
            },
            message: (input) => {
            return `${input} is not in the 80s!`
            }
        }
    },
    genre: String,

    rating: {
        type:Number,
        reuired: [true, "just ask paul!"],
        min:0,
        max:5
    }
}, {timestamps:true})

const Album = mongoose.model("Album", AlbumSchema);

module.exports = Album;
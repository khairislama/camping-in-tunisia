const mongoose     = require("mongoose");

const campgroundSchema = new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: String, required: true},
    campgroundImages: {type: String, required: true},
    description: {type: String, required: true},
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ],
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        firstname: String,
        lastname: String
    },
    created: {type: Date, default: Date.now}
});
module.exports = mongoose.model("campground", campgroundSchema);
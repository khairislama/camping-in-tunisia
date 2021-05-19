const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    text: {type: String, required: true},
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        firstname: String,
        lastname: String,
        userImage: String
    },
    nLikes: {type: Number, default: 0},
    nDislikes: {type: Number, default: 0},
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    dislikes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    created: {type: Date, default: Date.now}
});
module.exports = mongoose.model("Comment", commentSchema);
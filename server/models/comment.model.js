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
    likes: {type: String, default: "0"},
    dislikes: {type: String, default: "0"},
    created: {type: Date, default: Date.now}
});
module.exports = mongoose.model("Comment", commentSchema);
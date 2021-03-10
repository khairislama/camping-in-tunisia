const mongoose     = require("mongoose");

const blogSchema = new mongoose.Schema({
    titre: String,
    contenu: String,
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
module.exports = mongoose.model("blog", blogSchema);
const   mongoose    = require("mongoose");

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    image: String,
    location: String,
    price: String,
    rating: {type: String, default: "0"},
    sell: Boolean,
    state: Boolean,
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

module.exports = mongoose.model("Product", productSchema);
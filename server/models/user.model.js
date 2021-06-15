const   mongoose                = require("mongoose"),
        passportLocalMongoose   = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    username: {type: String, required: true},
    passwordHash: {type: String, required: true},
    age: {type: String, default: "0"},
    bio: {type: String, default: "BIO"},
    from: {type: String, default: "enter your origins"},
    adresse: {type: String, default: "enter your adresse"},
    rating: {type: String, default: "0"},
    situation: {type: String, default: "Signle"},
    nratings: {type: String, default: "0"},
    nCampgrounds: {type: Number, default: 0},
    nblogs: {type: Number, default: 0},
    nlikes: {type: Number, default: 0},
    ncomments: {type: Number, default: 0},
    bookmarks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Campground"
        }
    ],
    followers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    following: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    surname: {type: String, default: "new member"},
    profession: {type: String, default: "jobless"},
    facebook: {type: String, default: null},
    instagram: {type: String, default: null},
    linkedIn: {type: String, default: null},
    phoneNumber: {type: String, default: "-- --- ---"},
    userImage: {type: String, default: "userImage-default-vector-avatar-image1541962.jpg"},
    created: {type: Date, default: Date.now}
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
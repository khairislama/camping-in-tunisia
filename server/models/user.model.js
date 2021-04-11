const   mongoose                = require("mongoose"),
        passportLocalMongoose   = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    username: {type: String, required: true},
    passwordHash: {type: String, required: true},
    bio: {type: String, default: "BIO"},
    from: {type: String, default: "enter your origins"},
    adresse: {type: String, default: "enter your adresse"},
    rating: {type: String, default: "0"},
    situation: {type: String, default: "Signle"},
    nratings: {type: String, default: "0"},
    nblogs: {type: String, default: "0"},
    nlikes: {type: String, default: "0"},
    ncomments: {type: String, default: "0"},
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
    phoneNumber: {type: String, default: "-- --- ---"},
    userImage: {type: String, default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScdHD-KQQkMQdJcXTSALcRVFp7chjRbA0e-w&usqp=CAU"},
    created: {type: Date, default: Date.now}
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
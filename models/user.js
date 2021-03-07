const   mongoose                = require("mongoose"),
        passportLocalMongoose   = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    username: String,
    password: String,
    userImage: {type: String, default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScdHD-KQQkMQdJcXTSALcRVFp7chjRbA0e-w&usqp=CAU"}
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
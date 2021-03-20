const USER      = require("../models/user");

module.exports.findOneUser = async (req, res) => {
    try {
        let user = await USER.findById(req.params.userID);
        return res.status(200).json({
            success: true,
            user: user
        })
    }catch(err) {
        return res.status(400).json({
            success: false,
            error : err
        })
    }
}
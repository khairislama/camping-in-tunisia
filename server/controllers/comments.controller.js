const   COMMENT                 = require("../models/comment.model");
const   CAMPGROUND              = require("../models/campground.model");
const   USER                    = require("../models/user.model");
const   jwt                     = require("jsonwebtoken");

module.exports.createComment = async (req, res) => {
    try{
        const token = req.cookies.token;
        jwt.verify(token, process.env.JWT_SECRET, (err, user)=>{
            req.user = user;
        })
        const userInfo = await USER.findOne({_id: req.user.id});
        const text = req.body.text;
        const commentModel = new COMMENT({
            text,
            author: {
                id: userInfo._id,
                firstname: userInfo.firstname,
                lastname: userInfo.lastname,
                userImage: userInfo.userImage
            }
        });
        const savedComment = await commentModel.save();
        const savedCampgroundModel = await CAMPGROUND.findById(req.params.campgroundID, (err, campground)=>{
            if (err) return res.status(400).json({
                                success: false,
                                error: err
                            })
            campground.comments.push(savedComment);
            campground.save();            
        })
        return res.status(200).json({
            success: true,
            campground: savedCampgroundModel
        })
    }catch(err){
        return res.status(400).json({
            success: false,
            error: err
        })
    }
}

module.exports.editComment = async (req, res) =>{
    try {
        COMMENT.findByIdAndUpdate(req.params.commentID, req.body.text, (err, comment)=>{
            if (err) return res.status(400).json({
                success: false,
                error: err
            })            
        })
        return res.status(200).json({
            success: true
        })
    }catch (err){
        return res.status(400).json({
            success: false,
            error: err
        })
    }
}

module.exports.deleteComment = async (req, res) =>{
    try {
        Comment.findByIdAndRemove(req.params.comment_id, (err)=>{
            if (err) return res.status(400).json({
                success: false,
                error: err
            })
        })            
        return res.status(200).json({
            success: true
        })
    }catch (err){
        return res.status(400).json({
            success: false,
            error: err
        })
    }
}

module.exports.isOwner = async (req, res) =>{
    try {
        const token = req.cookies.token;
        if (!token) return res.json(false);
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        await COMMENT.findById(req.params.commentID, (err, comment)=>{
            if (err) return res.json(false);
            if (comment.author.id.equals(verified.id)) return res.send(true);
            return res.json(false);
        });
    } catch(err) {
        res.json(false);
    }
}

module.exports.likeComment = async (req, res) =>{
    try {
        const token = req.cookies.token;
        jwt.verify(token, process.env.JWT_SECRET, (err, user)=>{
            req.user = user;
        })
        const userInfo = await USER.findOne({_id: req.user.id});
        await COMMENT.findById(req.params.commentID, (err, comment)=>{
            if (err) return res.status(400).json({
                                success: false,
                                error: err
                            })
            const alreadyLiked = comment.likes.indexOf(userInfo._id);
            if (alreadyLiked > -1) {
                comment.likes.splice(alreadyLiked, 1);
                comment.nLikes --
            }else{
                comment.likes.push(userInfo);
                comment.nLikes ++
            }
            comment.save()
        });
        return res.status(200).json({
            success: true
        })
    } catch(err) {
        return res.status(400).json({
            success: false,
            error: err
        })
    }
}

module.exports.dislikeComment = async (req, res) =>{
    try {
        const token = req.cookies.token;
        jwt.verify(token, process.env.JWT_SECRET, (err, user)=>{
            req.user = user;
        })
        const userInfo = await USER.findOne({_id: req.user.id});
        await COMMENT.findById(req.params.commentID, (err, comment)=>{
            if (err) return res.status(400).json({
                                success: false,
                                error: err
                            })
            const alreadydisliked = comment.dislikes.indexOf(userInfo._id);
            if (alreadydisliked > -1) {
                comment.dislikes.splice(alreadydisliked, 1);
                comment.nDislikes --
            }else{
                comment.dislikes.push(userInfo);
                comment.nDislikes ++
            }
            comment.save()
        });
        return res.status(200).json({
            success: true
        })
    } catch(err) {
        return res.status(400).json({
            success: false,
            error: err
        })
    }
}
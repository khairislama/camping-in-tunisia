// PACKAGE IMPORTATION
const   express             = require("express"),
        router              = express.Router();

// root route
router.get("/", (req, res)=>{
    res.render("home");
});

// MODULE EXPORTATION
module.exports = router;
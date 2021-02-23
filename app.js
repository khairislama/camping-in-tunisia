const   express                     = require("express"),
        bodyParser                  = require("body-parser"),
        mongoose                    = require("mongoose"),
        dotenv                      = require("dotenv"),
        app                         = express();

dotenv.config();



app.listen(process.env.PORT_APP, ()=>{
    console.log(`Server started and listening on port ${process.env.PORT_APP}`);
});
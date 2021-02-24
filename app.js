// ********************* APP CREATED BY KHAIRISLAMA *********************** //
// PACKAGES IMPORTATION
const   express                     = require("express"),
        bodyParser                  = require("body-parser"),
        mongoose                    = require("mongoose"),
        dotenv                      = require("dotenv"),
        flash                       = require("connect-flash"),
        methodOverride              = require("method-override"),
        expressSanitizer            = require("express-sanitizer"),
        app                         = express();

// MODELS IMPORTATION

// ROUTES IMPORTATION
const   indexRoutes                 = require("./routes/index");

// BASE CONFIGURATION
dotenv.config();
app.set("view engine", "ejs");
app.use(expressSanitizer());
app.use(methodOverride("_method"));
app.use(express.static(__dirname + "/public"));
app.use(flash());

// DATABASE CONNEXION
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true});

// PASSPORT CONFIGURATION

// GENERAL MIDDLEWARES

// CALLING ROUTES
app.use(indexRoutes);

// SERVER STARTER
app.listen(process.env.PORT_APP, ()=>{
    console.log(`Server started and listening on port ${process.env.PORT_APP}`);
});
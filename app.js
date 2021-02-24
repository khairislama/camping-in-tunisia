// ********************* APP CREATED BY KHAIRISLAMA *********************** //
// PACKAGES IMPORTATION
const   express                     = require("express"),
        bodyParser                  = require("body-parser"),
        mongoose                    = require("mongoose"),
        dotenv                      = require("dotenv"),
        flash                       = require("connect-flash"),
        methodOverride              = require("method-override"),
        expressSanitizer            = require("express-sanitizer"),
        passport                    = require("passport"),
        localStrategy               = require("passport-local"),
        passportLocalMongoose       = require("passport-local-mongoose"),
        app                         = express();

// MODELS IMPORTATION
const   User                        = require("./models/user");

// ROUTES IMPORTATION
const   indexRoutes                 = require("./routes/index");

// BASE CONFIGURATION
dotenv.config();
app.set("view engine", "ejs");
app.use(expressSanitizer());
app.use(methodOverride("_method"));
app.use(express.static(__dirname + "/public"));
app.use(flash());
app.use(bodyParser.urlencoded({extended: true}));

// DATABASE CONNEXION
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true});

// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: process.env.SECRET_MESSAGE,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// GENERAL MIDDLEWARES
app.use((req, res, next)=>{
    res.locals.currentUser  = req.user;
    next();
});

// CALLING ROUTES
app.use(indexRoutes);

// SERVER STARTER
app.listen(process.env.PORT_APP, ()=>{
    console.log(`Server started and listening on port ${process.env.PORT_APP}`);
});
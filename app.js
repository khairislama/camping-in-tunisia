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
        cors                        = require("cors"),
        app                         = express();

const   seedDB                      = require("./seeds");
// MODELS IMPORTATION
const   User                        = require("./models/user.model"),
        Comment                     = require("./models/comment.model"),
        Campground                  = require("./models/campground.model");

// ROUTES IMPORTATION
const   indexRoutes                 = require("./routes/index.routes"),
        commentRoutes               = require("./routes/comments.routes"),
        campgroundRoutes            = require("./routes/campgrounds.routes"),
        shopRoutes                  = require("./routes/products.routes"),
        userRoutes                  = require("./routes/users.routes");

// BASE CONFIGURATION
//seedDB();
dotenv.config();
app.set("view engine", "ejs");
app.use(expressSanitizer());
app.use(methodOverride("_method"));
app.use(express.static(__dirname + "/public"));
app.use(flash());
app.use(bodyParser.json());
app.use(cors());

// DATABASE CONNEXION
const   APP_PORT = process.env.APP_PORT || 3001;
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
    res.locals.error        = req.flash("error");
    res.locals.success      = req.flash("success");
    next();
});

// CALLING ROUTES
//app.use(indexRoutes);
//app.use("/campgrounds/:id/comments", commentRoutes);
app.use("/campgrounds", campgroundRoutes);
//app.use("/products", shopRoutes);
//app.use("/users/:userID", userRoutes);
//app.use("/blogs", blogRoutes);

app.get("*", (req, res)=>{
    res.render("routeNotFound");
});

// SERVER STARTER
app.listen(APP_PORT, ()=>{
    console.log(`Server started and listening on port ${APP_PORT}`);
});
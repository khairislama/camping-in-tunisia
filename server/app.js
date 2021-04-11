// ********************* APP CREATED BY KHAIRISLAMA *********************** //
// PACKAGES IMPORTATION
require("dotenv").config();
const   express                     = require("express"),
        bodyParser                  = require("body-parser"),
        mongoose                    = require("mongoose"),
        cookieParser                = require("cookie-parser"),
        cors                        = require("cors"),
        app                         = express();

const   seedDB                      = require("./seeds");

// BASE CONFIGURATION
//seedDB();
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true
}));


// DATABASE CONNEXION
const   APP_PORT = process.env.APP_PORT || 3001;
mongoose.connect(
    process.env.DATABASE_URL, 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }, (err)=>{
        if (err) return console.error(err)
        console.log(`connected to MongoDB`);
    }
    );

// CALLING ROUTES
//app.use(indexRoutes);
//app.use("/campgrounds/:id/comments", commentRoutes);
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/campgrounds", require("./routes/campgrounds.routes"));
//app.use("/products", shopRoutes);
//app.use("/users/:userID", userRoutes);
//app.use("/blogs", blogRoutes);

// SERVER STARTER
app.listen(APP_PORT, ()=>{
    console.log(`Server started and listening on port ${APP_PORT}`);
});
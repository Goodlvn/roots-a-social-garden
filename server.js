const express = require("express");
const session = require("express-session");
const passport = require ("./config/passport");


const PORT = process.env.PORT || 8080;
const db = require("./models");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public"));

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// will need one of these for every routes file that we use
require("./routes/sign&log-routes.js")(app);
require("./routes/user-routes.js")(app);

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log("App listening on PORT: http://localhost:" + PORT);
    });
});



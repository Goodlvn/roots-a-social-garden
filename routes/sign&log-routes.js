
const path = require("path");
const db = require("../models");
const passport = require("../config/passport");
const isAuthenticated = require("../config/middleware/isAuthenticated")

module.exports = (app) => {

    app.post("/api/login", passport.authenticate("local"), (req, res) => {
        res.json(req.user);
    });

    app.post("/api/signup", (req, res) => {
        db.user.create({
            email: req.body.email,
            password: req.body.password
        })
        .then(() => {
            res.redirect(307, "/api/login");
        })
        .catch((err) => {
            res.status(401).json(err)
        });
     

    });

    app.get("/", (req, res) => {
        
        if(req.user) {
            res.redirect("/members");
        }
        res.sendFile(path.join(__dirname, "../public/html/signup.html"))
    });

    app.get("/login", (req,res) => {
        if(req.user) {
            res.redirect("/members");
        }
        res.sendFile(path.join(__dirname, "../public/html/login.html"));
    });

    app.get("/members", isAuthenticated, (req, res) => {
        res.sendFile(path.join(__dirname, "../public/html/profilePage.html"));
    });
};
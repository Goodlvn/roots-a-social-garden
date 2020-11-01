
const path = require("path");
const db = require("../models");
const passport = require("../config/passport");
const isAuthenticated = require("../config/middleware/isAuthenticated")

module.exports = (app) => {

    app.post("api/login", passport.authenticate("local"), (req, res) => {
        res.json(req.user);
    });

    app.post("api/signup", (req, res) => {
        db.User.create({
            email: req.body.email,
            password: req.body.password
        })
        .then(() => {
            res.redirect(307, "api/api/login");
        })
        .catch((err) => {
            res.status(401).json(err)
        });
    });






}
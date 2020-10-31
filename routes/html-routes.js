const path = require("path");
const db = require("../models");

module.exports = (app) => {
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/html/signup.html"));
    })
};
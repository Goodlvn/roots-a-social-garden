const path = require("path");

module.exports = (app) => {
    app.get("/", (req, res) => {
        res.send("welcom to our garden");
    })
};
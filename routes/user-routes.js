const path = require("path");



module.exports = (app) => {

    app.get("/logout", (req, res) => {
        req.logout();
        res.redirect("/");
    });

    app.get("/createprofile", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/html/profileConfirm.html"))
    })

};
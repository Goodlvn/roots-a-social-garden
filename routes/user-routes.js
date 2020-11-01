module.exports = (app) => {

    app.get("/logout", function(req, res) {
        req.logout();
        res.redirect("/");
    });



};
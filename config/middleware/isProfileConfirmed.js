module.exports = function(req, res, next) {
    if(req.first_name !== null || req.first_name !== "") {
        // return next();
    }

    console.log("is not completed");
    return res.redirect("/createprofile");
};
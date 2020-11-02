const path = require("path");
const db = require("../models");

module.exports = (app) => {

    app.get("/logout", (req, res) => {

        if(req.user.bio === null){
            req.logout();
            res.redirect("/login");
        }
        
    });

    app.get("/createprofile", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/html/profileConfirm.html"));
        
    });
    


    app.put("/api/createprofile", (req, res) => {

        db.user.update({ 
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            bio: req.body.bio
         
        },{
            where: {
                id: req.user.id
            }
        })
        .then((data) => {
            res.json(data)
        })
        
        
    })

};
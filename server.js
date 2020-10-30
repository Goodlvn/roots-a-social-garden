const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("app/public"));

// will need one of these for every routes file that we use
// require("./app/routes/api-routes.js")(app);

app.listen(PORT, () => {
    console.log("App listening on PORT: http://localhost:" + PORT);
});

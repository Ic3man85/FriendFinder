let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');

let app = express();

let PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/*+json" }));
app.use(express.static("app/public"));




require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


app.listen(PORT, function() {
    console.log("Listening on Port " + PORT);
});
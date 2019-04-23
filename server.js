var express = require('express');
var app = express();

//If extended is false, you can not post "nested object"; if extended is true you can whatever you want.  In other words, when you have extended: true, when you post, you can see the nested object within the objects
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Set Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require('./controllers/burgers_controllers.js');

app.use(routes);

//heroku default language "process.env.PORT"
app.listen(process.env.PORT || 3001, () => {
    console.log('express app listening on port 3001');
});






var express = require('express');
var exphbs = require('express-handlebars');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var routes = require('./controllers/burgers_controller.js');

//setup express
var app = express();
var PORT = process.env.PORT || 3000;

//middleware
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("./public"))
app.use("/", routes);



//listener
app.listen(PORT, function() {
    console.log("Server listening on port: " + PORT + "\nAnd heres to hoping nothing goes wrong, eh?")
})
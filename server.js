var exp = require("express");
var bodyParser = require('body-parser');

var app = exp();

var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function () {
    console.log("----------------------------");
    console.log(" the server is working " + PORT);
    console.log("----------------------------\n");
})
//Importing/Requiring dependencies
const express   = require('express'),
bodyParser      = require('body-parser'),
methodOverride  = require('method-override'),
mongoose        = require('mongoose'),
app             = express();

const url = process.env.DATABASEURL || "mongodb://localhost/rest_blog_app";
mongoose.connect(url, { useUnifiedTopology: true });
app.set("view engine", "ejs"); //Setting the template library to ejs
app.use(bodyParser.urlencoded({extended:true})); //Reqruired to use bodyParser which allows form submition
app.use(methodOverride('_method')); //Allows HTML forms to use methods other than GET and POST
app.use(express.static(__dirname + "/public")); //Serves static files like CSS and Javascript files

//Requiring Route files
const rest = require('./routes/rest');

app.use(rest);

app.listen(3000);

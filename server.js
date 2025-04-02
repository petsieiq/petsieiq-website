//import the libraries
const express = require("express");
//init the express server
var app = express();
const path = require("path");
const hbs = require('hbs');
const db_api = require("./db_api");

db_obj = new db_api.DatabaseAPI();
db_obj.init();

//set the view engine to handlebars
app.set("view engine", 'hbs');
app.set('views', path.join(__dirname, 'public'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded());
app.use(express.json());

app.get('/', (req, res) => {
    const minm = 100000;
    const maxm = 999999;
    const number = Math.floor(Math.random() * (maxm - minm + 1)) + minm;
    res.render('index', {});
});

app.post('/', (req, res) => {
    let email = req.body.email_input;
    //console.log("the pose request received:" + email);
    //update the data base
    db_obj.add_email({"email":email});
    res.redirect('/');
})

//run the application
const server = app.listen(3000);

module.exports = app;
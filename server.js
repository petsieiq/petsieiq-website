//import the libraries
const express = require("express");
//init the express server
var app = express();
const path = require("path");
const hbs = require('hbs');

var mongo_client = require("mongodb").MongoClient;

class DatabaseAPI{
    //databse setup
    async init() {
        //let url = "mongodb://localhost:27017/";
        let url = "mongodb+srv://admin:ey3Q76SUjTgxnjBc@petsieiqdb.07dy5vz.mongodb.net/?retryWrites=true&w=majority&appName=PetsieIQDB";
        let db_conn =await mongo_client.connect(url);
        this.db_obj = await db_conn.db("email_db");
        this.email_collection =await this.db_obj.createCollection("emails");
    }

    async add_email(data){
        let reps =await this.email_collection.insertOne(data);
    }
}

db_obj = new db_api.DatabaseAPI();
db_obj.init();

//set the view engine to handlebars
app.set("view engine", 'hbs');
app.set('views', path.join(__dirname, 'public'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded());
app.use(express.json());

app.get('/', async (req, res) => {
    res.render('index', {});
});

app.post('/',async (req, res) => {
    let email = req.body.email_input;
    //console.log("the pose request received:" + email);
    //update the data base
    db_obj.add_email({"email":email});
    res.redirect('/');
})

//run the application
const server = app.listen(3000);

module.exports = app;
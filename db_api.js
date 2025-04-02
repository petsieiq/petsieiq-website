var mongo_client = require("mongodb").MongoClient;

class DatabaseAPI{
    constructor(){

    }

    //databse setup
    async init() {
        let url = "mongodb+srv://admin:ey3Q76SUjTgxnjBc@petsieiqdb.07dy5vz.mongodb.net/?retryWrites=true&w=majority&appName=PetsieIQDB";
        let db_conn =await mongo_client.connect(url);
        this.db_obj = await db_conn.db("email_db");
        this.email_collection =await this.db_obj.createCollection("emails");
    }

    async add_email(data){
        let reps =await this.email_collection.insertOne(data);
    }
}

module.exports = {DatabaseAPI:DatabaseAPI};
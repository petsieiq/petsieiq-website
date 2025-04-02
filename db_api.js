var mongo_client = require("mongodb").MongoClient;

class DatabaseAPI{
    constructor(){

    }

    //databse setup
    async init() {
        let url = "mongodb://localhost:27017/";
        let db_conn =await mongo_client.connect(url);
        this.db_obj = await db_conn.db("email_db");
        this.email_collection =await this.db_obj.createCollection("emails");
    }

    async add_email(data){
        let reps =await this.email_collection.insertOne(data);
    }
}

module.exports = {DatabaseAPI:DatabaseAPI};
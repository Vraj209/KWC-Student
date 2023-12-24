const { MongoClient } = require("mongodb");
require("dotenv").config();

const URL = process.env.DB_URL;
let db;

const dbConnect = async () => {
  if (!db) {
    const client = new MongoClient(URL);
    await client.connect();
    db = client.db();
  }
  console.log("***** Database Connected *****");
};

const getStudentData = async () => {
  if (!db) await dbConnect();
  return db.collection("students");
};

module.exports = {
  dbConnect,
  getStudentData,
};
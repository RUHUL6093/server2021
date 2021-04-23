const express = require("express");
const app = express();
const port = 5000;
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.g4xsc.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
client.connect((err) => {
  const productscollection = client.db("Grameenponno").collection("products");
 
});

app.listen(port);

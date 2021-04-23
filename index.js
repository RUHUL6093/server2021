const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const port = 5000;
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const MongoClient = require("mongodb").MongoClient;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.g4xsc.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
client.connect((err) => {
  const productsCollection = client.db("Grameenponno").collection("products");

  app.get("/products", (req, res) => {
    productsCollection.find({}).toArray((err, documents) => {
      res.send(documents);
    });
  });
  app.post("/addProducts", (req, res) => {
    const products = req.body;

    productsCollection.insertMany(products, (err, result) => {
      console.log(err, result);
      res.send({ count: result.insertedCount });
    });
  });

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });
});

app.listen(port);

const express = require("express");


const app = express();
const cors =require('cors');
app.


const port = 4000;


app.get("/", (request, response) => {
  
  response.send("Hi, from Node server");
});

//start server and listen for the request
app.listen(port, () =>
  //a callback that will be called as soon as server start listening
  console.log(`server is listening at http://localhost:${port}`)
);

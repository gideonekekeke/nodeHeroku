const express = require("express");
const mongoose = require("mongoose");
const port = process.env.PORT || 6000;
const url =
  "mongodb+srv://shotkode:shotkode@cluster0.2kfdg.mongodb.net/RomanusDB?retryWrites=true&w=majority";

const app = express();

mongoose.connect(url, { useNewUrlParser: true }).then(() => {
  console.log("successfully deployed");
});

app.get("/", (req, res) => {
  res.send("my api is working");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

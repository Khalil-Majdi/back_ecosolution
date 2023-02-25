require("dotenv").config();
const express = require("express");
const app = express();
const port = 5050;
const body_parser = require("body-parser");
const connectMongo = require("./utils/connect");
const projet_router = require("./routes/projetRoute");
const cors = require("cors");

connectMongo();

app.listen(port, () => {
  console.log(`Running at Port ${port}`);
});
app.use(cors());
app.use(body_parser.json());
app.use(projet_router);

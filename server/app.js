const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const playerCsvDownload = require("./utility/playerCsvDownload");
require("dotenv").config();
mongoose.connect(process.env.DB_CONN);

mongoose.connection.once("open", () => {
  console.log("connected to db");
});
app.use(cors());
app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

app.get("/download", async (req, res) => {
  playerCsvDownload(req.query, res);
});

app.listen(4000, () => {
  console.log("now listening for requests on port 4000");
});

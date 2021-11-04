const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const footballPlayerScehma = new Schema({
  player: String,
  team: String,
  position: String,
  att: Number,
  attG: Number,
  yds: Number,
  avg: Number,
  ydsG: Number,
  td: Number,
  lng: String,
  player1st: Number,
  player1stP: Number,
  player20: Number,
  player40: Number,
  FUM: Number,
});

module.exports = mongoose.model("FootballPlayers", footballPlayerScehma);

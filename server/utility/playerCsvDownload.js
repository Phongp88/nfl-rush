const { Parser } = require("json2csv");
const footballPlayer = require("../models/footballPlayer");
const playerCsvDownload = async (filters, res) => {
  try {
    const { name, stat, sort } = filters;
    const sortParams = { player: sort };
    if (stat) {
      // Remove Player name if stats is sorted
      sortParams[stat] = sort;
      delete sortParams.player;
    }
    const playerData = await footballPlayer
      .find({
        ...(name && { player: new RegExp(name, "i") }),
      })
      .sort(sortParams)
      .then((players) => {
        return players;
      })
      .catch((err) => {
        console.log(err);
        return "error occured";
      });

    const fields = [
      {
        label: "Player Name",
        value: "player",
      },
      {
        label: "Team",
        value: "team",
      },
      {
        label: "Position",
        value: "position",
      },
      {
        label: "ATT",
        value: "att",
      },
      {
        label: "ATT/G",
        value: "attg",
      },
      {
        label: "YDS",
        value: "yds",
      },
      {
        label: "AVG",
        value: "avg",
      },
      {
        label: "YDS/G",
        value: "ydsG",
      },
      {
        label: "TD",
        value: "td",
      },
      {
        label: "LNG",
        value: "lng",
      },
      {
        label: "1ST",
        value: "player1st",
      },
      {
        label: "1ST%",
        value: "player1stP",
      },
      {
        label: "20+",
        value: "player20",
      },
      {
        label: "40+",
        value: "player40",
      },
      {
        label: "FUM",
        value: "FUM",
      },
    ];
    const json2csvParser = new Parser({ fields });
    const csv = json2csvParser.parse(playerData);
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=players.csv");
    res.status(200).end(csv);
  } catch (err) {
    console.log("There was an error exporting the csv", err);
    res.status(401).send();
  }
};
module.exports = playerCsvDownload;

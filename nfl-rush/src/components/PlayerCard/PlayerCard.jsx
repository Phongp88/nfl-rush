import React from "react";
import { PlayerName } from "./PlayerName";
import { PlayerStats } from "./PlayerStats";
import "./PlayerCard.css";
export const PlayerCard = ({ playerInfo, index }) => {
  const {
    FUM,
    att,
    attG,
    avg,
    lng,
    player1st,
    player1stP,
    player20,
    player40,
    td,
    yds,
    ydsG,
  } = playerInfo;
  const playerStats = {
    Att: att,
    "Att/G": attG,
    Yds: yds,
    Avg: avg,
    "Yds/G": ydsG,
    TD: td,
    Lng: lng,
    "1st": player1st,
    "1st%": player1stP,
    "20+": player20,
    "40+": player40,
    FUM: FUM,
  };
  return (
    <div className="playerCard">
      <PlayerName playerInfo={playerInfo} />
      <PlayerStats playerStats={playerStats} />
    </div>
  );
};

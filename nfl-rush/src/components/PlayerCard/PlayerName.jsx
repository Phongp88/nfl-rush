import React from "react";

export const PlayerName = ({ playerInfo: { player, team, position } }) => {
  return (
    <div className="playerName">
      <h3>{player}</h3>
      <div>
        <span>
          {team} | {position}
        </span>
      </div>
    </div>
  );
};

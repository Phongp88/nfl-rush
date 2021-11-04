import React from "react";
import { StatCard } from "./StatCard";
export const PlayerStats = ({ playerStats }) => {
  return (
    <div className="statContainer">
      {Object.entries(playerStats).map(([keyName, value], index) => {
        return <StatCard key={index} keyName={keyName} value={value} />;
      })}
    </div>
  );
};

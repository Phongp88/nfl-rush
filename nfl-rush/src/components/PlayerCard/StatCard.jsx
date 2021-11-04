import React from "react";

export const StatCard = ({ keyName, value }) => {
  return (
    <div className="statCard">
      <h4 className="statTitle">{keyName}</h4>
      <h3 className="statValue">{value}</h3>
    </div>
  );
};

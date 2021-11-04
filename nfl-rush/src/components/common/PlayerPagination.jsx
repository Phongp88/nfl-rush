import React from "react";
import "./Common.css";
import Pagination from "@mui/material/Pagination";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  ul: {
    "& .MuiPaginationItem-root": {
      color: "#fff",
      borderColor: "#fff",
    },
  },
}));
const PlayerPagination = ({
  playerPerPage,
  totalPlayers,
  paginate,
  currentPage,
}) => {
  const classes = useStyles();
  return (
    <div className="playerPagination">
      <div className="centerPagination">
        <Pagination
          classes={{ ul: classes.ul }}
          onChange={paginate}
          color="primary"
          count={Math.ceil(totalPlayers / playerPerPage) - 1}
          page={currentPage}
        />
      </div>
    </div>
  );
};
export { PlayerPagination };

import React, { useState, useEffect } from "react";
// import dataPlayer from "../../rushing.json";
import { PlayerCard } from "../PlayerCard/PlayerCard";
import { PlayerFilter } from "../PlayerFilter/PlayerFilter";
import { PlayerPagination } from "../common/PlayerPagination";
import { Error } from "../common/Error";
import { Loading } from "../common/Loading";
import { NoDataFound } from "../common/NoDataFound";
import { CommonButton } from "../common/CommonButton";
import { useFilterQuery } from "../../hooks/useFilterQuery";
import { PLAYER_PER_PAGE } from "../../constant";
import "./PlayerData.css";

export const PlayerData = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [selectFilter, setSelectFilter] = useState("");
  const [selectSortDirection, setSelectSortDirection] = useState(1);
  const { players, loading, count, error, fetchPlayer } = useFilterQuery();
  useEffect(() => {
    fetchPlayer({
      limit: PLAYER_PER_PAGE,
      offset: 0,
    });
  }, []);

  // Change page
  const paginate = (event, value) => {
    setCurrentPage(value);
    fetchPlayer({
      sort: parseInt(selectSortDirection),
      player: searchInput,
      stat: selectFilter,
      limit: PLAYER_PER_PAGE,
      offset: value * PLAYER_PER_PAGE,
    });
  };
  const handleSearchPlayer = () => {
    setCurrentPage(1);
    fetchPlayer({
      sort: parseInt(selectSortDirection),
      player: searchInput,
      stat: selectFilter,
      limit: PLAYER_PER_PAGE,
      offset: 0,
    });
  };
  const handleExport = () => {
    window.open(
      `http://localhost:4000/download?name=${searchInput}&sort=${selectSortDirection}&stat=${selectFilter}`,
      "_blank"
    );
  };
  if (error) {
    <Error />;
  }
  return (
    <div className="playerDataContainer">
      <PlayerFilter
        handleSearchPlayer={handleSearchPlayer}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        selectFilter={selectFilter}
        setSelectFilter={setSelectFilter}
        selectSortDirection={selectSortDirection}
        setSelectSortDirection={setSelectSortDirection}
      />
      {players && players.length > 0 ? (
        players.map((player, index) => {
          return <PlayerCard playerInfo={player} index={index} />;
        })
      ) : loading ? (
        <Loading />
      ) : (
        <NoDataFound />
      )}
      <PlayerPagination
        playerPerPage={PLAYER_PER_PAGE}
        totalPlayers={count}
        currentPage={currentPage}
        paginate={paginate}
      />
      <CommonButton
        classText={"exportBtn"}
        changeEvent={handleExport}
        text={"Export"}
        variant={"success"}
      ></CommonButton>
    </div>
  );
};

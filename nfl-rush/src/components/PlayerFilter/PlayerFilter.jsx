import React from "react";
import {
  FormSelect,
  FormControl,
  FormLabel,
  Form,
  FormGroup,
} from "react-bootstrap";
import { CommonButton } from "../common/CommonButton";
import "./PlayerFilter.css";
import { ASC, DESC } from "../../constant";
export const PlayerFilter = ({
  handleSearchPlayer,
  searchInput,
  setSearchInput,
  selectFilter,
  setSelectFilter,
  selectSortDirection,
  setSelectSortDirection,
}) => {
  return (
    <div className="filterContainer">
      <h2>Filter</h2>
      <div className="filterFormContainer">
        <Form
          className="filterForm"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <FormGroup className="filterFormGroup">
            <FormLabel>Stat</FormLabel>
            <FormSelect
              value={selectFilter}
              onChange={(e) => setSelectFilter(e.target.value)}
            >
              <option value="">All</option>
              <option value="yds">Total Rushing Yards</option>
              <option value="lng">Longest Rush</option>
              <option value="td">Total Rushing Touchdowns</option>
            </FormSelect>
          </FormGroup>
          <FormGroup className="filterFormGroup">
            <FormLabel>Direction</FormLabel>
            <FormSelect
              value={selectSortDirection}
              onChange={(e) => setSelectSortDirection(e.target.value)}
            >
              <option value={ASC}>Ascending</option>
              <option value={DESC}>Descending</option>
            </FormSelect>
          </FormGroup>
          <FormGroup className="filterFormGroup">
            <FormLabel>Player Name</FormLabel>
            <FormControl
              type="text"
              placeholder="Player Name"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            ></FormControl>
          </FormGroup>
          <div className="searchBtnContainer">
            <CommonButton
              testId={"searchBtn"}
              classText={"searchBtn"}
              changeEvent={handleSearchPlayer}
              text={"Search"}
            ></CommonButton>
          </div>
        </Form>
      </div>
    </div>
  );
};

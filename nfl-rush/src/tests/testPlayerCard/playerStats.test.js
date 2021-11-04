import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PlayerStats } from "../../components/PlayerCard/PlayerStats";
const TEST_PLAYER = {
  Att: 34,
  "Att/G": 2.1,
  Yds: 150,
  Avg: 4.4,
  "Yds/G": 9.4,
  TD: 2,
  Lng: 15,
  "1st": 10,
  "1st%": 29.4,
  "20+": 25,
  "40+": 26,
  FUM: 27,
};

const renderComponent = ({ value }) => {
  return render(<PlayerStats playerStats={value} />);
};

describe("Test PlayerStats Component", () => {
  it("Should render the all the TEST_PLAYER data correctly", () => {
    renderComponent({ value: TEST_PLAYER });
    // Test that all stat keys are rendering
    const playerRushingAttempts = screen.getByText("Att");
    const playerRushingAttemptsPerGame = screen.getByText("Att/G");
    const playerTotalRushingYards = screen.getByText("Yds");
    const playerRushingAvgYards = screen.getByText("Avg");
    const playerRushingYardsPerGame = screen.getByText("Yds/G");
    const playerRushingTouchDowns = screen.getByText("TD");
    const playerLongestRush = screen.getByText("Lng");
    const playerRushingFirstDowns = screen.getByText("1st");
    const playerFirstDownPercent = screen.getByText("1st%");
    const playerRushing20Yards = screen.getByText("20+");
    const playerRushing40Yards = screen.getByText("40+");
    const playerFumbles = screen.getByText("FUM");
    // tell all stat values are rendering
    const rushValue = screen.getByText("34");
    const rushingAttempsValue = screen.getByText("2.1");
    const yardsValue = screen.getByText("150");
    const averageValue = screen.getByText("4.4");
    const yardsPerGameValue = screen.getByText("9.4");
    const totalDownsValue = screen.getByText("2");
    const longestRushValue = screen.getByText("15");
    const firstDownValue = screen.getByText("10");
    const firstDownPercentageValue = screen.getByText("29.4");
    const rushing20YardsValue = screen.getByText("25");
    const rushing40YardsValue = screen.getByText("26");
    const fumbleValue = screen.getByText("27");

    // Fake key stat & value
    const fakeStat = screen.queryByText("PP");
    const fakeValue = screen.queryByText("400");

    expect(playerRushingAttempts).toBeInTheDocument();
    expect(playerRushingAttemptsPerGame).toBeInTheDocument();
    expect(playerTotalRushingYards).toBeInTheDocument();
    expect(playerRushingAvgYards).toBeInTheDocument();
    expect(playerRushingYardsPerGame).toBeInTheDocument();
    expect(playerRushingTouchDowns).toBeInTheDocument();
    expect(playerLongestRush).toBeInTheDocument();
    expect(playerRushingFirstDowns).toBeInTheDocument();
    expect(playerFirstDownPercent).toBeInTheDocument();
    expect(playerRushing20Yards).toBeInTheDocument();
    expect(playerRushing40Yards).toBeInTheDocument();
    expect(playerFumbles).toBeInTheDocument();

    expect(rushValue).toBeInTheDocument();
    expect(rushingAttempsValue).toBeInTheDocument();
    expect(yardsValue).toBeInTheDocument();
    expect(averageValue).toBeInTheDocument();
    expect(yardsPerGameValue).toBeInTheDocument();
    expect(totalDownsValue).toBeInTheDocument();
    expect(longestRushValue).toBeInTheDocument();
    expect(firstDownValue).toBeInTheDocument();
    expect(firstDownPercentageValue).toBeInTheDocument();
    expect(rushing20YardsValue).toBeInTheDocument();
    expect(rushing40YardsValue).toBeInTheDocument();
    expect(fumbleValue).toBeInTheDocument();

    // Should return falsey as both stat and value does not exist
    expect(fakeStat).not.toBeInTheDocument();
    expect(fakeValue).not.toBeInTheDocument();
  });
});

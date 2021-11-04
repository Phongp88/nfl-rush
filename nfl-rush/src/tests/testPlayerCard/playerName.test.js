import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PlayerName } from "../../components/PlayerCard/PlayerName";
const TEST_PLAYER = { player: "Aaron Ripkowski", team: "GB", position: "FB" };

const renderComponent = ({ value }) => {
  return render(<PlayerName playerInfo={value} />);
};

describe("Test PlayerName Component", () => {
  it("Should render player as name: Aaron Ripkowski and GB | FB", () => {
    renderComponent({ value: TEST_PLAYER });
    const playerName = screen.getByText("Aaron Ripkowski");
    const playerTeamPosition = screen.getByText("GB | FB");

    const fakePlayer = screen.queryByText("Aaron Rodgers");
    expect(playerName).toBeInTheDocument();
    expect(playerTeamPosition).toBeInTheDocument();

    // Should be falsey as player doesn't exist
    expect(fakePlayer).not.toBeInTheDocument();
  });
});

import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { PlayerFilter } from "../../components/PlayerFilter/PlayerFilter";

const renderComponent = () => {
  return render(<PlayerFilter />);
};

describe("Test PlayerFilter Component", () => {
  it("Should correct input labels and search button", () => {
    renderComponent();
    const filterStatLabel = screen.getByText("Stat");
    const filterDirectionLabel = screen.getByText("Direction");
    const filterPlayerNameLabel = screen.getByText("Player Name");
    const searchButton = screen.getByTestId("searchBtn");
    const fakeLabel = screen.queryByText("Football");
    expect(searchButton).toBeInTheDocument();
    expect(filterStatLabel).toBeInTheDocument();
    expect(filterDirectionLabel).toBeInTheDocument();
    expect(filterPlayerNameLabel).toBeInTheDocument();

    // Should be falsey as label doesn't exist
    expect(fakeLabel).not.toBeInTheDocument();
  });
});

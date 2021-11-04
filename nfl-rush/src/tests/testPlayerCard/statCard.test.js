import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { StatCard } from "../../components/PlayerCard/StatCard";
const TEST_PLAYER = { key: "Att", value: "100" };

const renderComponent = ({ testValue: { key, value } }) => {
  return render(<StatCard keyName={key} value={value} />);
};

describe("Test Statcard Component", () => {
  it("Should render stat key Att and value of 100", () => {
    renderComponent({ testValue: TEST_PLAYER });
    const statKey = screen.getByText("Att");
    const statValue = screen.getByText("100");

    const fakeKey = screen.queryByText("PP");
    const fakeValue = screen.queryByText("101");
    expect(statKey).toBeInTheDocument();
    expect(statValue).toBeInTheDocument();

    expect(fakeKey).not.toBeInTheDocument();
    expect(fakeValue).not.toBeInTheDocument();
  });
});

import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { NoDataFound } from "../../components/common/NoDataFound";

const renderComponent = () => {
  return render(<NoDataFound />);
};

describe("Test NoDataFound Component", () => {
  it("Should render correct text ", () => {
    renderComponent();
    const componentText = screen.getByText("No Data Found");
    const fakeText = screen.queryByText("Found Data!");
    expect(componentText).toBeInTheDocument();

    // Should be falsey as label doesn't exist
    expect(fakeText).not.toBeInTheDocument();
  });
});

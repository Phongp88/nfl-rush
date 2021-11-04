import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Loading } from "../../components/common/Loading";

const renderComponent = () => {
  return render(<Loading />);
};

describe("Test Loading Component", () => {
  it("Should render correct text ", () => {
    renderComponent();
    const componentText = screen.getByText("Loading...");
    const fakeText = screen.queryByText("Something Wrong");
    expect(componentText).toBeInTheDocument();

    // Should be falsey as label doesn't exist
    expect(fakeText).not.toBeInTheDocument();
  });
});

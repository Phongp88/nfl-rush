import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Error } from "../../components/common/Error";

const renderComponent = () => {
  return render(<Error />);
};

describe("Test Loading Component", () => {
  it("Should render correct text ", () => {
    renderComponent();
    const componentText = screen.getByText(
      "Something went wrong... Please fresh page or try again later"
    );
    const fakeText = screen.queryByText("Nothing went wrong");
    expect(componentText).toBeInTheDocument();

    // Should be falsey as label doesn't exist
    expect(fakeText).not.toBeInTheDocument();
  });
});

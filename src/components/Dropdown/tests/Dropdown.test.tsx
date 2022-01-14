import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Dropdown from "..";
import { DropdownProps } from "../Dropdown";

const defaultProps: DropdownProps = {
  name: "Test name",
  label: "Test label",
  placeholder: "Test placeholder",
  options: ["Option 1", "Option 2"],
};

describe("<Dropdown />", () => {
  it("should render properly", () => {
    render(<Dropdown {...defaultProps} />);

    expect(screen.getByText(defaultProps.label)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.placeholder)).toBeInTheDocument();
    expect(screen.queryByText("Option 1")).not.toBeInTheDocument();
    expect(screen.queryByText("Option 2")).not.toBeInTheDocument();
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  it("should show options on click and select the correct value", () => {
    render(<Dropdown {...defaultProps} />);

    const div = screen.getByLabelText(defaultProps.label);
    userEvent.click(div);
    expect(screen.getByText("Option 1")).toBeInTheDocument();
    expect(screen.getByText("Option 2")).toBeInTheDocument();
    expect(screen.queryByRole("button")).not.toBeInTheDocument();

    const option1 = screen.getByText("Option 1");
    userEvent.click(option1);
    expect(
      screen.queryByText(defaultProps.placeholder)
    ).not.toBeInTheDocument();
    expect(screen.getByText("Option 1")).toBeInTheDocument();
    expect(screen.queryByText("Option 2")).not.toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();

    const closeButton = screen.getByRole("button");
    userEvent.click(closeButton);
    expect(screen.getByText(defaultProps.placeholder)).toBeInTheDocument();
    expect(screen.queryByText("Option 1")).not.toBeInTheDocument();
    expect(screen.queryByText("Option 2")).not.toBeInTheDocument();
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
});

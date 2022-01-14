import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input, { InputProps } from "../Input";

const defaultValue = "defaultValue";
let value = defaultValue;

const defaultProps: InputProps = {
  name: "Test input",
  label: "Test label",
  placeholder: "Test placeholder",
  onChange: jest.fn(),
  value: value,
};

describe("<Input />", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  it("should properly render input with label", () => {
    render(<Input {...defaultProps} />);

    expect(screen.getByText(defaultProps.label!)).toBeInTheDocument();
    const input = screen.getByLabelText(defaultProps.label!);
    expect(input).toBeInTheDocument();
    expect(input.nodeName).toEqual("INPUT");
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("should change value on type", () => {
    render(<Input {...defaultProps} value={undefined} onChange={undefined} />);

    const input = screen.getByLabelText(defaultProps.label!);
    expect(input).toHaveValue("");

    const typedValue = "testValue";

    userEvent.type(input, typedValue);
    expect(screen.getByLabelText(defaultProps.label!)).toHaveValue(typedValue);
  });
});

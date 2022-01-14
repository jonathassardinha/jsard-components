import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormProvider from "..";
import { FormProviderProps } from "../FormProvider";

const testInputName = "testInputName";
const defaultValue = "defaultValue";

const defaultProps: FormProviderProps = {
  onSubmit: jest.fn(),
  children: (
    <>
      <input name={testInputName} defaultValue={defaultValue} />
      <button type="submit">Submit</button>
    </>
  ),
};

describe("<FormProvider />", () => {
  it("should properly render a form", () => {
    render(<FormProvider {...defaultProps} />);
    expect(screen.getByRole("form")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should properly submit a form", () => {
    render(<FormProvider {...defaultProps} />);
    const button = screen.getByRole("button");
    userEvent.click(button);
    expect(defaultProps.onSubmit).toHaveBeenCalledWith({
      [testInputName]: defaultValue,
    });
  });
});

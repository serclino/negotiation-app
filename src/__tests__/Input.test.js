import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from "../components/Input";

describe("Input component", () => {
  beforeEach(() => {
    render(<Input tab={"zaměstnanec"} />);
  });

  it(`should render input with type 'number'`, () => {
    const inputElement = screen.getByRole("spinbutton");
    expect(inputElement).toBeInTheDocument();
  });

  it("should focus on input when try to submit with no value", () => {
    const inputElement = screen.getByRole("spinbutton");
    const submitBtn = screen.getByRole("button");
    fireEvent.click(submitBtn);
    expect(inputElement).toHaveFocus();
  });

  it("should be able to type in input", () => {
    const inputElement = screen.getByRole("spinbutton");
    fireEvent.change(inputElement, {
      target: { value: "200" },
    });
    expect(inputElement.value).toBe("200");
  });

  it("should render correct label", () => {
    const labelElement = screen.getByText("Minimální mzda:");
    expect(labelElement).toHaveTextContent("Minimální mzda:");
  });
});

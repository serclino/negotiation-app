import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

const fillInputAndSubmit = () => {
  const inputElement = screen.getByRole("spinbutton");
  const submitBtn = screen.getByRole("button", { name: "Submit" });
  fireEvent.change(inputElement, {
    target: { value: "200" },
  });
  fireEvent.click(submitBtn);
};

describe("Integration tests", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("selected tab should have active class", () => {
    const btn = screen.getByText("Zaměstnanec");
    fireEvent.click(btn);
    expect(btn).toHaveClass("active");
  });

  it("after submit the tab button should be disabled", () => {
    fillInputAndSubmit();
    const buttonElement = screen.getByRole("button", { name: "Zaměstnavatel" });
    expect(buttonElement).toBeDisabled();
  });

  it("after submit the tab should be switched to another one", () => {
    fillInputAndSubmit();
    const labelElement = screen.getByText("Minimální mzda:");
    expect(labelElement).toHaveTextContent("Minimální mzda:");
  });

  it("PopUp component is rendered after both inputs", () => {
    fillInputAndSubmit();
    fillInputAndSubmit();
    const buttonReset = screen.getByRole("button", { name: "Reset" });
    expect(buttonReset).toBeInTheDocument();
  });

  it("click on reset btn set default state of the app", () => {
    fillInputAndSubmit();
    fillInputAndSubmit();
    const buttonReset = screen.getByRole("button", { name: "Reset" });
    fireEvent.click(buttonReset);
    const btnTab1 = screen.getByRole("button", { name: "Zaměstnavatel" });
    const btnTab2 = screen.getByRole("button", { name: "Zaměstnanec" });
    const inputElement = screen.getByRole("spinbutton");
    expect(btnTab1).not.toBeDisabled();
    expect(btnTab2).not.toBeDisabled();
    expect(inputElement.value).toBe('');
  });
});

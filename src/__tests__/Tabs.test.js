import { render, screen } from "@testing-library/react";
import { Tabs } from "../components/Tabs";

describe("Tabs component", () => {
  it(`should render buttons 'Zaměstnavatel' and 'Zaměstnanec'`, () => {
    render(<Tabs />);
    const button1 = screen.getByText("Zaměstnavatel");
    const button2 = screen.getByText("Zaměstnanec");
    expect(button1).toBeInTheDocument();
    expect(button2).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import { PopUp } from "../components/PopUp";

describe("PopUp", () => {
  it("should render loading state before weather data is fetched", () => {
    render(<PopUp />);
    const paragraphElement = screen.getByText(/načítání počasí.../i);
    expect(paragraphElement).toBeInTheDocument();
  });

  it("should load weather data on mount", async () => {
    render(<PopUp />);
    const weatherIcon = await screen.findByAltText("weather-icon");
    expect(weatherIcon).toBeInTheDocument();
  });

  it('should render "úspěch" when min < max', () => {
    render(<PopUp min={100} max={200} />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("Úspěch! 🤝");
  });

  it('should render "úspěch" when min = max', () => {
    render(<PopUp min={100} max={100} />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("Úspěch! 🤝");
  });

  it('should render "neúspěch" when min > max', () => {
    render(<PopUp min={200} max={100} />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("Nevyšlo to... 😟");
  });

  it("should render correct values", () => {
    render(<PopUp min={100} max={200} />);
    const firstParaElement = screen.getByText("200 Kč");
    const secondParaElement = screen.getByText("100 Kč");
    expect(firstParaElement).toBeInTheDocument();
    expect(secondParaElement).toBeInTheDocument();
  });

  it("should render reset button", () => {
    render(<PopUp />);
    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument();
  });
});

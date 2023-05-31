import { render, screen } from "@testing-library/react";
import HomePage from "../pages/home.page";

describe("Loading of main app component", () => {
  it("Renders the <HomePage />  component", () => {
    render(<HomePage />);
    const button = screen.getByText(/Primary/i);
    expect(button).toBeInTheDocument();
  });
});

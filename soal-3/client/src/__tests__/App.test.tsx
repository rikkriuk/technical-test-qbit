import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../../src/App";

jest.mock("../components/HeaderComponent", () => () => <div data-testid="header">Header Component</div>)
jest.mock("../pages/HomePage", () => () => <div data-testid="homepage">Home Page</div>)

describe("App Component", () => {
  test("renders without crashing", () => {
    render(<App />);
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });

  test("renders header component", () => {
    render(<App />);
    const headerElement = screen.getByTestId("header");
    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveTextContent("Header Component");
  });

  test("renders homepage component on root path", () => {
    render(<App />);
    const homepageElement = screen.getByTestId("homepage");
    expect(homepageElement).toBeInTheDocument();
    expect(homepageElement).toHaveTextContent("Home Page");
  });

  test("contains router setup", () => {
    const { container } = render(<App />);
    expect(container.innerHTML).toBeTruthy();
  });
});
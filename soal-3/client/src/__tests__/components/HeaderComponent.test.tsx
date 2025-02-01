import { render, screen, fireEvent } from "@testing-library/react";
import HeaderComponent from "../../components/HeaderComponent";

describe("HeaderComponent", () => {
  test("shows hamburger menu button on mobile and toggles navigation", () => {
    render(<HeaderComponent />);
    const openButton = screen.getByTestId("open-button");
    expect(openButton).toBeInTheDocument();
    
    fireEvent.click(openButton);
    const nav = screen.getByTestId("navigation");
    expect(nav).toHaveClass("translate-x-0");
    
    const closeButton = screen.getByTestId("close-button");
    fireEvent.click(closeButton);
    expect(nav).toHaveClass("translate-x-full");
  });

  test("renders all navigation links", () => {
    render(<HeaderComponent />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Feature")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  test("toggles navigation visibility when menu buttons are clicked", () => {
    render(<HeaderComponent />);
    const openButton = screen.getByTestId("open-button");
    
    fireEvent.click(openButton);
    expect(screen.getByTestId("navigation")).toHaveClass("translate-x-0");
    
    const closeButton = screen.getByTestId("close-button");
    fireEvent.click(closeButton);
    expect(screen.getByTestId("navigation")).toHaveClass("translate-x-full");
  });

  test("maintains navigation visibility on desktop view", () => {
    render(<HeaderComponent />);
    const nav = screen.getByTestId("navigation");
    expect(nav).toHaveClass("lg:translate-x-0");
    expect(nav).toHaveClass("lg:static");
  });
});
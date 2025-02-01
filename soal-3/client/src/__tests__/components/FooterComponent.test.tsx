import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FooterComponent from "../../components/FooterComponent";

describe("Footer Component", () => {
  test("renders the footer component", () => {
    render(<FooterComponent />);
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  test("displays the company name", () => {
    render(<FooterComponent />);
    expect(screen.getByText("HomeStyle")).toBeInTheDocument();
  });

  test("renders all footer sections", () => {
    render(<FooterComponent />);
    const sections = [
      "Produk Kami",
      "Fitur Unggulan",
      "Sumber Daya",
      "Perusahaan",
      "Hal Favorit"
    ];
    
    sections.forEach(section => {
      expect(screen.getByText(section)).toBeInTheDocument();
    });
  });

  test("displays the copyright notice", () => {
    render(<FooterComponent />);
    expect(screen.getByText(/© HomeStyle 2025 - Semua Hak Dilindungi Undang-Undang/)).toBeInTheDocument();
  });

  test("renders correct number of footer sections", () => {
    render(<FooterComponent />);
    const sections = screen.getAllByRole("list");
    expect(sections).toHaveLength(5);
  });

  test("renders footer items under each section", () => {
    render(<FooterComponent />);
    const items = screen.getAllByRole("listitem");
    expect(items.length).toBe(20);
  });

  test("has correct responsive classes", () => {
    render(<FooterComponent />);
    const footer = screen.getByRole("contentinfo");
    expect(footer).toHaveClass("bg-[#23262F]", "px-5", "lg:px-32");
  });
});

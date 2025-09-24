import { render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "../context/ThemeContext";

describe("Navbar Component", () => {
  test("renders site logo", () => {
    render(
      <ThemeProvider>
        <Navbar />
      </ThemeProvider>
    );
    expect(screen.getByText(/MyGarden/i)).toBeInTheDocument();
  });

  test("renders menu items", () => {
    render(
      <ThemeProvider>
        <Navbar />
      </ThemeProvider>
    );
    const menuItems = ["Home", "About", "Contact"]; // menu.ts да бор номлар
    menuItems.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });
});

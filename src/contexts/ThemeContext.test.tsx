import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { ThemeProvider, useThemeContext } from "./ThemeContext";
import userEvent from "@testing-library/user-event";

const TestComponent = () => {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

describe("ThemeContext", () => {
  it("should use system theme by default", () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );
    expect(screen.getByTestId("theme")).toHaveTextContent("light");
  });

  it("should toggle theme and save to localStorage", async () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );
    const themeText = screen.getByTestId("theme");
    const toggleButton = screen.getByRole("button", { name: /toggle theme/i });

    userEvent.click(toggleButton);
    await waitFor(() => expect(themeText).toHaveTextContent("dark"));
    expect(localStorage.getItem("theme")).toBe("dark");

    userEvent.click(toggleButton);
    await waitFor(() => expect(themeText).toHaveTextContent("light"));
    expect(localStorage.getItem("theme")).toBe("light");
  });
});

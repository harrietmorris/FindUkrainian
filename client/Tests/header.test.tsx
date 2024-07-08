import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { BrowserRouter } from "react-router-dom";
import App from "../src/App";
import Header from "../src/components/Header/Header";
import { FormControl, OutlinedInput } from "@mui/material";
import Search from "../src/components/Search/Search";

describe.only("navigation header", () => {
  describe("logo", () => {
    it("logo should be visible", () => {
      render(<Header />, { wrapper: BrowserRouter });
      expect(screen.getByAltText(/logo/i)).toBeInTheDocument();
    });

    it("logo click should navigate to home page", () => {
      const user = userEvent.setup();
      render(<App />, { wrapper: BrowserRouter });
      user.click(screen.getByAltText(/logo/i));
      expect(screen.getByTestId("home-element")).toBeInTheDocument();
    });
  });

  describe("search-bar", () => {
    it("search bar should be visible", () => {
      render(<Header />, { wrapper: BrowserRouter });
      expect(screen.getByTestId("search")).toBeInTheDocument();
    });
  });
});

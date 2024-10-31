import React from "react";
import { render, screen } from "@testing-library/react";
import { useDataContext } from "../../contexts/DataContext";
import List from "./index";

jest.mock("../../contexts/DataContext");

const mockedUseDataContext = useDataContext as jest.Mock;

describe("List Component", () => {
  it("renders a list of items", () => {
    mockedUseDataContext.mockReturnValue({
      data: [
        { id: 1, name: "Item 1", description: "Description 1" },
        { id: 2, name: "Item 2", description: "Description 2" },
      ],
      loading: false,
    });

    render(<List />);
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
  });

  it("shows loader when loading", () => {
    mockedUseDataContext.mockReturnValue({
      data: [],
      loading: true,
    });

    render(<List />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});

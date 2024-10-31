import { render, screen } from "@testing-library/react";
import List from ".";
import dataStore from "../../stores/DataStore";

test("renders loading state", () => {
  dataStore.loading = true;
  render(<List />);
  expect(screen.getByText(/loading/i)).toBeInTheDocument();
});

test("renders list items", () => {
  dataStore.loading = false;
  dataStore.data = [{ id: 1, name: "Repo 1", description: "Description 1" }];
  render(<List />);
  expect(screen.getByText("Repo 1")).toBeInTheDocument();
  expect(screen.getByText("Description 1")).toBeInTheDocument();
});

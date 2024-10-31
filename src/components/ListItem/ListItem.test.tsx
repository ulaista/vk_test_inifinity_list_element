import React from "react";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ListItem from "./index";

describe("ListItem Component", () => {
  const item = { id: 1, name: "Test Item", description: "Test Description" };
  const onEdit = jest.fn();
  const onDelete = jest.fn();

  it("renders item details", () => {
    render(<ListItem item={item} onEdit={onEdit} onDelete={onDelete} />);
    expect(screen.getByText("Test Item")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
  });

  it("calls onEdit when edit button is clicked", async () => {
    render(<ListItem item={item} onEdit={onEdit} onDelete={onDelete} />);
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      userEvent.click(screen.getByRole("button", { name: /edit/i }));
    });
    expect(onEdit).toHaveBeenCalledTimes(1);
  });

  it("calls onDelete when delete button is clicked", async () => {
    render(<ListItem item={item} onEdit={onEdit} onDelete={onDelete} />);
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      userEvent.click(screen.getByRole("button", { name: /delete/i }));
    });
    expect(onDelete).toHaveBeenCalledTimes(1);
  });
});

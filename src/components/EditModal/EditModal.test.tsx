import React from "react";
import { render, screen, waitFor, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EditModal from "./index";

describe("EditModal Component", () => {
  const onClose = jest.fn();
  const onSave = jest.fn();

  it("renders with initial value", () => {
    render(
      <EditModal open={true} onClose={onClose} onSave={onSave} initialValue="Initial Name" />
    );
    expect(screen.getByDisplayValue("Initial Name")).toBeInTheDocument();
  });

  it("calls onSave with updated value", async () => {
    render(
      <EditModal open={true} onClose={onClose} onSave={onSave} initialValue="Initial Name" />
    );

    const input = screen.getByDisplayValue("Initial Name");
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      userEvent.clear(input);
      userEvent.type(input, "Updated Name");
    });

    userEvent.click(screen.getByRole("button", { name: /ok/i }));
    await waitFor(() => expect(onSave).toHaveBeenCalledWith("Updated Name"));
  });

  it("calls onClose when canceled", async () => {
    render(
      <EditModal open={true} onClose={onClose} onSave={onSave} initialValue="Initial Name" />
    );

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      userEvent.click(screen.getByRole("button", { name: /cancel/i }));
    });
    await waitFor(() => expect(onClose).toHaveBeenCalledTimes(1));
  });
});

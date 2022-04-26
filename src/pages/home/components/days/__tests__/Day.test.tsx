import { fireEvent, render, screen } from "@testing-library/react";
import Day from "../Day";

test("Checks Day card to have border on click", () => {
  const onClick = jest.fn();
  render(<Day forecast={{ date: "2022-04-12", data: [] }} />);
  const dayButton = screen.getByRole("day");
  dayButton.addEventListener("click", onClick);
  fireEvent.click(dayButton);
  expect(onClick).toBeCalledTimes(1);
});

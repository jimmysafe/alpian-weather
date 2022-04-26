import { render, screen } from "@testing-library/react";
import LocationHeader from "../LocationHeader";

test("Renders LocationHeader", () => {
  render(<LocationHeader location="London" />);
  const locationText = screen.getByRole("location");
  expect(locationText).toHaveTextContent("London");
});

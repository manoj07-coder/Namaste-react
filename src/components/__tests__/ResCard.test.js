import { render, screen } from "@testing-library/react";
import ResCard, { WithPromotedLabel } from "../ResCard";
import MOCK_DATA from "../mocks/restaurantMockData.json";
import "@testing-library/jest-dom";

it("Should render the Restaurant card component", () => {
  render(<ResCard resData={MOCK_DATA} />);

  const name = screen.getByText("Adil Hotel");

  expect(name).toBeInTheDocument();
});

it("Should render the Restaurant card with the promoted label", () => {
  const WrappedComponent = WithPromotedLabel(ResCard);
  render(<WrappedComponent resData={MOCK_DATA} />);

  const promoted = screen.getByText("Promoted");

  expect(promoted).toBeInTheDocument();
});

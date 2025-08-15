import { act, fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import MOCK_DATA_MENU from "../mocks/restaurantMenuList.json";
import { Provider } from "react-redux";
import AppStore from "../../utils/AppStore";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_MENU),
  });
});
it("Should tract the cart flow", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={AppStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  const categoryName = screen.getByText("Pasta (10)");

  fireEvent.click(categoryName);

  const foodItems = screen.getAllByTestId("foodItems");

  expect(foodItems.length).toBe(10);

  const addBtns = screen.getAllByRole("button", { name: "Add+" });

  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart-(1)")).toBeInTheDocument();

  fireEvent.click(addBtns[1]);

  expect(screen.getByText("Cart-(2)")).toBeInTheDocument();

  const clearCartBtn = screen.getByRole("button", { name: "Clear Cart" });

  expect(screen.getAllByTestId("foodItems").length).toBe(12);

  fireEvent.click(clearCartBtn);

  expect(screen.getByText("Cart-(0)")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(10);
});

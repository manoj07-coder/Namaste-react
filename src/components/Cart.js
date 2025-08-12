import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/CartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-2 p-2 ">
      <h1 className="text-3xl font-semibold">Cart</h1>
      <button
        className="mt-2 font-semibold border p-2 rounded-lg shadow-md cursor-pointer bg-gradient-to-r from-purple-600 to-pink-500 text-white animate-pulse"
        onClick={handleRemoveItem}
      >
        Clear Cart
      </button>
      <div>
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;

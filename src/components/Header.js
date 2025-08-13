import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between items-center px-10 py-3 bg-[#ff6b35] text-white shadow-md">
      {/* Logo */}
      <div>
        <img className="w-[70px] h-auto rounded-lg" src={LOGO_URL} alt="Logo" />
      </div>

      {/* Navigation */}
      <div>
        <ul className="flex items-center gap-6 list-none m-0 p-0">
          {/* Online Status */}
          <li className="text-base font-medium cursor-pointer transition-colors duration-200 hover:text-[#ffe7d3]">
            {onlineStatus ? "✅ Online" : "🔴 Offline"}
          </li>

          {/* Links */}
          <li className="text-base font-medium cursor-pointer transition-colors duration-200 hover:text-[#ffe7d3]">
            <Link to="/">Home</Link>
          </li>
          <li className="text-base font-medium cursor-pointer transition-colors duration-200 hover:text-[#ffe7d3]">
            <Link to="/about">About us</Link>
          </li>
          <li className="text-base font-medium cursor-pointer transition-colors duration-200 hover:text-[#ffe7d3]">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="text-base font-medium cursor-pointer transition-colors duration-200 hover:text-[#ffe7d3]">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="text-base font-medium cursor-pointer transition-colors duration-200 hover:text-[#ffe7d3]">
            <Link to="/cart">Cart-({cartItems.length})</Link>
          </li>

          {/* Login Button */}
          <button
            className="bg-white text-[#ff6b35] px-4 py-2 rounded-2xl font-semibold cursor-pointer transition-all duration-200 hover:bg-[#ffe7d3]"
            onClick={() =>
              setLoginBtn(loginBtn === "Login" ? "Logout" : "Login")
            }
          >
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

import {
  FaCalendar,
  FaHamburger,
  FaHome,
  FaInbox,
  FaShoppingCart,
  FaWallet,
} from "react-icons/fa";
import { FaBookBookmark, FaMessage, FaShop } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* dashboard site bar */}
      <div className="w-64 min-h-screen bg-[#97783b]">
        <ul className="menu p-4">
          <li>
            <NavLink to="/dashboard/userHome">
              {" "}
              <FaHome />
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              {" "}
              <FaCalendar />
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/payment">
              {" "}
              <FaWallet />
              Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              {" "}
              <FaShoppingCart />
              My Cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              {" "}
              <FaShoppingCart />
              Add Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/booking">
              {" "}
              <FaBookBookmark />
              My Booking
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <FaHamburger />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop/salad">
              <FaShop />
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <FaInbox />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;

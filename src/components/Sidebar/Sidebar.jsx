import React, { useState } from "react";
import { AiOutlineShopping, AiOutlineShoppingCart } from "react-icons/ai";
import {
  FaChartLine,
  FaCreditCard,
  FaHome,
  FaMoneyBill,
  FaUser,
} from "react-icons/fa";
import { FiMenu, FiMessageCircle } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { IoBag } from "react-icons/io5";
import {
  MdAccountBalance,
  MdDashboard,
  MdOutlineLeaderboard,
} from "react-icons/md";
import { Link } from "react-router-dom";

const sideBarItems = [
  {
    name: "Dashboard",
    icon: <MdDashboard />,
    link: "/",
  },
  {
    name: "Profile",
    icon: <FaUser />,
    link: "/profile",
  },
  {
    name: "Order",
    icon: <AiOutlineShoppingCart />,
    link: "/order",
  },
  {
    name: "Product",
    icon: <IoBag />,
    link: "/product",
  },
  {
    name: " Sales Report",
    icon: <FaChartLine />,
    link: "/report",
  },
];
const Sidebar = ({ toggleSidebar }) => {
  const [isActive, setIsActive] = useState(0);
  return (
    <div className="bg-gray-300 border-r border-gray-500 w-44 p-5 transition-all h-screen ">
      
      <ul className="space-y-3 mt-5 md:mt-0">
        {sideBarItems.map((item, index) => (
          <Link
            to={item.link}
            onClick={() => setIsActive(index)}
            key={item.name}
            className={`flex font-medium px-2 py-2.5 rounded-lg items-center gap-2 cursor-pointer hover:bg-rose-500 hover:text-white transition-all
  duration-300 ${
    index === isActive ? "text-black bg-gray-200" : "text-gray-900 bg-amber-800"
  }`}
          >
            {item.icon} {item.name}
          </Link>
        ))}
      </ul>
      <button
        onClick={toggleSidebar}
        className="md:hidden absolute top-0 right-0 px-2 py-2 text-2xl cursor-pointer"
      >
        <IoMdClose />
      </button>
    </div>
  );
};

export default Sidebar;

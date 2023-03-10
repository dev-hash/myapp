import React, { useState } from "react";
import {
  FaTh,
  FaBars,
  FaRegChartBar,
  FaUsers,
  FaRegWindowRestore,
} from "react-icons/fa";
import { HiBadgeCheck } from "react-icons/hi";
import { Link, Outlet } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/dashboard/categories",
      name: "Categories",
      icon: <FaRegWindowRestore />,
    },
    {
      path: "/dashboard/config",
      name: "IMAPConfig",
      icon: <FaRegChartBar />,
    },
    {
      path: "/dashboard/users",
      name: "Users",
      icon: <FaUsers />,
    },
    {
      path: "/dashboard/subscription-plan",
      name: "SubscriptionPlan",
      icon: <HiBadgeCheck />,
    },
  ];
  return (
    
    <div className="container">

      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Logo
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </Link>
        ))}
      </div>
      {/* <main>{children}</main> */}
      <Outlet />
        
    </div>
    
  );
};

export default Sidebar;

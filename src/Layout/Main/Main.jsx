import React from "react";
import Sidebar from "../../Components/Sidebar";
import Categories from "../../Pages/Categories";
import Dashboard from "../../Pages/Dashboard";
import IMAPConfig from "../../Pages/IMAPConfig";
import SubscriptionPlan from "../../Pages/SubscriptionPlan";
import Users from "../../Pages/Users";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <>
      <div className="Main">
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<Dashboard/>}/> */}
            <Route path="/dashboard" element={<Sidebar />} />
            <Route path="/dashboard/categories" element={<Categories />} />
            <Route path="/dashboard/config" element={<IMAPConfig />} />
            <Route path="/dashboard/users" element={<Users />} />
            <Route
              path="/dashboard/subscription-plan"
              element={<SubscriptionPlan />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};
export default Main;

import React from "react";
import Sidebar from "../../Components/Sidebar";
import Categories from "../../Pages/Categories";
import Dashboard from "../../Pages/Dashboard";
import IMAPConfig from "../../Pages/IMAPConfig";
import SubscriptionPlan from "../../Pages/SubscriptionPlan";
import Users from "../../Pages/Users";
import {BrowserRouter,Routes,Route} from "react-router-dom"

const Main = () => {
  return (
    <>
      <div className="Main">
        <BrowserRouter>
     
      <Sidebar>
     <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/categories" element={<Categories/>}/>
      <Route path="/config" element={<IMAPConfig/>}/>
      <Route path="/users" element={<Users/>}/>
      <Route path="/subscription-plan" element={<SubscriptionPlan/>}/>

     </Routes>
     
     </Sidebar>
     </BrowserRouter>
      </div>
    </>
  );
};
export default Main;

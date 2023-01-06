import logo from "./logo.svg";
import "./App.css";
import Login from "./Layout/Auth/Login";
import SignUp from "./Layout/Auth/SignUp";
import ResetPassword from "./Layout/Auth/ResetPassword";
import SignIn from "./Layout/Users/SignIn";
import Signup from "./Layout/Users/Signup";
import Resetpassword from "./Layout/Users/Resetpassword";
// import Sidebar from "./Components/Sidebar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Categories from "./Pages/Categories";
import IMAPConfig from "./Pages/IMAPConfig";
import Users from "./Pages/Users";
import SubscriptionPlan from "./Pages/SubscriptionPlan";
import Main from "./Layout/Main/Main";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Sidebar />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/categories" element={<Categories />} />
            <Route path="/dashboard/config" element={<IMAPConfig />} />
            <Route path="/dashboard/users" element={<Users />} />
            <Route
              path="/dashboard/subscription-plan"
              element={<SubscriptionPlan />}
            />
          </Route>

          <Route path="/admin" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="reset-password" element={<ResetPassword />} />

          <Route path="/" element={<SignIn />} />
          <Route path="/usignup" element={<Signup />} />
          <Route path="/ureset-password" element={<Resetpassword />} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Login from './Layout/Auth/Login';
import SignUp from './Layout/Auth/SignUp';
import ResetPassword from "./Layout/Auth/ResetPassword"
import SignIn from './Layout/Users/SignIn';
import Signup from './Layout/Users/Signup';
import Resetpassword from './Layout/Users/Resetpassword';
import Sidebar from './Components/Sidebar';

import  {BrowserRouter,Routes,Route} from "react-router-dom";
import Dashboard from './Pages/Dashboard';
import Categories from './Pages/Categories';
import IMAPConfig from './Pages/IMAPConfig';
import Users from './Pages/Users';
import SubscriptionPlan from './Pages/SubscriptionPlan';
import Main from './Layout/Main/Main';

function App() {
  return (
    // <div className="App">
    //   {/* <Login/>  */}
    //   {/* <SignUp/> */}
    //   {/* <ResetPassword/> */}
      
    //   {/* <SignIn/> */}
    //   {/* <Signup/> */}
    //   {/* <Resetpassword/> */}
    //   <Sidebar/>
    // </div>
    <>

     {/* <BrowserRouter>
     <Sidebar>
  
     <Routes>
      <Route path="/" element={<Dashboard/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/categories" element={<Categories/>}></Route>
      <Route path="/config" element={<IMAPConfig/>}></Route>
      <Route path="/users" element={<Users/>}></Route>
      <Route path="/subscription-plan" element={<SubscriptionPlan/>}></Route>

     </Routes>
     
     </Sidebar>
     </BrowserRouter> */}
     
     <BrowserRouter>
     
     <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/reset-password" element={<ResetPassword/>}/>
    
     
     </Routes>
     </BrowserRouter>

     <Main/>
    </>
  );
}

export default App;

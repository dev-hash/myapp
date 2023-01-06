import { combineReducers } from "redux";
import { AdminLoginReducer } from "./SuperAdminLoginReducer";
import { UserLoginReducer } from "./UserLoginReducer";
export const rootReducers = combineReducers({
    Login:AdminLoginReducer,
    UserLogin:UserLoginReducer,
})
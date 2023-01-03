import { combineReducers } from "redux";
import { AdminLoginReducer } from "./SuperAdminLoginReducer";
export const rootReducers = combineReducers({
    Login:AdminLoginReducer,
})
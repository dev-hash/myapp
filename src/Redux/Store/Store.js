import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducers } from "../Reducers";

const middelware = [thunk];
export const store = createStore(rootReducers, applyMiddleware(...middelware))
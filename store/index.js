import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';
import AppReducer from "./app/reducers";
import AuthReducer from "./auth/reducers";

const RootReducers = combineReducers({
  AuthReducer,
  AppReducer
});

export const store = configureStore({reducer: RootReducers}, applyMiddleware(thunk));
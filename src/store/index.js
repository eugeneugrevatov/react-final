import { applyMiddleware, createStore } from 'redux'
import reducer from "../redusers";
import thunk from "redux-thunk";
import api from "../middlewares/api";

export default () => createStore(reducer, applyMiddleware(thunk, api))

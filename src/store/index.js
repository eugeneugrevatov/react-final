import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "../redusers";
import thunk from "redux-thunk";
import api from "../middlewares/api";

export default () => createStore(reducer, composeWithDevTools(applyMiddleware(thunk, api)))

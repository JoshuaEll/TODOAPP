import { combineReducers } from "redux";
import auth from './auth';
import  todoReducer  from "./todoReducer";

export default combineReducers({
    auth,
    todoReducer,
});